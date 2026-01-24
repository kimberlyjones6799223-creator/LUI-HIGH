
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Always initialize with the direct process.env.API_KEY variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MAX_RETRY = 2;

// 简单的延迟函数用于重试
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 核心推荐服务：整合了重试、解析容错与内容修正
 */
export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  let lastError: any = null;

  for (let attempt = 0; attempt <= MAX_RETRY; attempt++) {
    try {
      // 如果不是第一次尝试，先等待一段时间（指数退避）
      if (attempt > 0) {
        await sleep(Math.pow(2, attempt) * 1000); 
      }

      const response = await ai.models.generateContent({
        // 使用 Flash-Lite 版本以获得极速响应，降低超时概率
        model: "gemini-flash-lite-latest",
        contents: `
任务背景：${taskInstruction}
用户需求：${query}
商品列表数据：${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, summary: p.summary, price: p.price, attributes: p.attributes })))}
        `,
        config: {
          systemInstruction: `
你是一个专业的决策辅助 AI。

任务目标：
1. 从列表中挑选 EXACTLY 2 个最符合用户需求的商品 ID 存入 candidates。
2. 在这 2 个中指定 1 个作为最佳推荐，ID 存入 recommendationId。
3. 撰写一段深度权衡分析 (analysis)。

内容规范：
- analysis 第一句必须固定为：“我在平台上比较了 ${objectCount} 款商品”。
- 紧接着提供 2-3 句专业分析，描述对比各个选项在价格、参数、核心优势等维度的过程，并解释为何这两个是胜出的备选。
- 严禁在 analysis 中使用商品 ID（如 d5_0），必须使用商品全名。
- recommendationSlogan 是一句简短的口号。

技术约束：
- 必须返回严格的 JSON 格式。
- 严禁包含任何 JSON 块以外的解释性文字。
          `,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              analysis: { type: Type.STRING },
              candidates: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              recommendationId: { type: Type.STRING },
              recommendationSlogan: { type: Type.STRING }
            },
            required: [
              "analysis",
              "candidates",
              "recommendationId",
              "recommendationSlogan"
            ]
          },
          temperature: 0.1, // 保持极高的确定性
          maxOutputTokens: 600
        }
      });

      const rawText = response.text?.trim();
      if (!rawText) throw new Error("EMPTY_RESPONSE");

      let parsed: any;
      try {
        parsed = JSON.parse(rawText);
      } catch {
        // JSON 解析容错：尝试从字符串中提取第一个 JSON 结构
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error("JSON_PARSE_FAILED");
        }
      }

      // ---------------------------------------------------------
      // 稳态数据修正逻辑：确保返回内容严格符合前端展示需求
      // ---------------------------------------------------------
      
      // 1. 确保 candidates 是数组且唯一，并修复隐式 any 错误
      if (!Array.isArray(parsed.candidates)) parsed.candidates = [];
      parsed.candidates = [...new Set(parsed.candidates as string[])].filter((id: string) => products.some(p => p.id === id));
      
      // 2. 数量修正：必须为 2 个
      if (parsed.candidates.length < 2) {
        const fallbacks = products.map(p => p.id).filter(id => !parsed.candidates.includes(id));
        parsed.candidates = [...parsed.candidates, ...fallbacks.slice(0, 2 - parsed.candidates.length)];
      } else if (parsed.candidates.length > 2) {
        parsed.candidates = parsed.candidates.slice(0, 2);
      }

      // 3. 推荐 ID 校验
      if (!parsed.candidates.includes(parsed.recommendationId)) {
        parsed.recommendationId = parsed.candidates[0];
      }

      // 4. 分析开头修正 (兜底检查)
      const expectedPrefix = `我在平台上比较了 ${objectCount} 款商品`;
      if (typeof parsed.analysis !== "string" || !parsed.analysis.includes(expectedPrefix)) {
         const topProducts = (parsed.candidates as string[]).map((id: string) => products.find(p => p.id === id)).filter(Boolean) as Product[];
         const nameA = topProducts[0]?.name || "选项A";
         const nameB = topProducts[1]?.name || "选项B";
         
         const baseAnalysis = typeof parsed.analysis === "string" ? parsed.analysis : "由于数据筛选逻辑，我为您锁定了这两款最具竞争力的商品。";
         parsed.analysis = `我在平台上比较了 ${objectCount} 款商品。通过对各选项的性能规格、市场反馈及价格维度的综合扫描，我发现 ${nameA} 与 ${nameB} 展现出了明显的优势。以下是为您进行的深度筛选：\n\n${baseAnalysis}`;
      }

      return parsed;

    } catch (err: any) {
      lastError = err;
      console.warn(`Gemini API 尝试次数 ${attempt + 1} 失败:`, err.message);
    }
  }

  // 如果所有尝试均失败，返回 null，ChatInterface 会触发“抱歉”提示语
  console.error("Gemini API 所有重试机会已耗尽:", lastError);
  return null;
};
