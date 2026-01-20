
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Always initialize with the direct process.env.API_KEY variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  try {
    const response = await ai.models.generateContent({
      // 使用更轻量、极速的 Flash-Lite 模型降低延迟和失败率
      model: "gemini-flash-lite-latest",
      contents: `
任务背景：${taskInstruction}
用户需求：${query}
商品列表：${JSON.stringify(products)}
`,
      config: {
        systemInstruction: `
你是一个专业的决策助手。
指令：
1. 必须选出 EXACTLY 2 个商品 ID。
2. analysis 必须以“我在平台上比较了 ${objectCount} 款[商品类别]”开头。
3. analysis 中严禁出现商品 ID，仅使用名称。
4. 从 2 个备选中定一个 recommendationId。
输出必须是严格的 JSON。
`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { 
              type: Type.STRING 
            },
            candidates: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendationId: {
              type: Type.STRING
            },
            recommendationSlogan: {
              type: Type.STRING
            }
          },
          required: [
            "analysis",
            "candidates",
            "recommendationId",
            "recommendationSlogan"
          ]
        },
        // 降低随机性，使输出更确定、更快速
        temperature: 0,
        // 限制输出长度，减少生成时间
        maxOutputTokens: 300
      }
    });

    const jsonStr = response.text?.trim();
    return jsonStr ? JSON.parse(jsonStr) : null;

  } catch (error) {
    console.error("Gemini Lite API Error:", error);
    // 失败时返回 null，由 UI 处理错误提示
    return null;
  }
};
