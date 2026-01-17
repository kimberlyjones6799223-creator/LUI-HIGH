
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [
 {
  id: 1,type: 'GIFT',objectCount: 2,dimensionCount: 5,
  instruction: '马上快要过年了，你想给自己的老师买一个新年礼物，你的老师非常喜欢喝咖啡。请选择价格在300-600元、深度烘培、销量最高的咖啡豆。',
  reminder: '300-600元，深烘，高销量。',
  products: [
    {
      id: 'd1_0',name: '皮爷 Peets',price: 458,rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      summary: '迪克森上校，浓烈烟草香',
      attributes: [
        { label: '烘培', value: '深度' },
        { label: '销量', value: '12万+' },
        { label: '产地', value: '巴西/哥伦比亚' },
        { label: '风味', value: '烟草/可可' },
        { label: '保质期', value: '12个月' }
      ]
    },
    {
      id: 'd1_1',name: '星巴克 臻选',price: 388,rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400',
      summary: '单一产区，黑巧克力风味',
      attributes: [
        { label: '烘培', value: '中度' },
        { label: '销量', value: '5万+' },
        { label: '产地', value: '哥斯达黎加' },
        { label: '风味', value: '黑巧克力/焦糖' },
        { label: '保质期', value: '18个月' }
      ]
    }
  ]
},
{
  id: 2,type: 'GADGET',objectCount: 2,dimensionCount: 5,
  instruction: '你要选一家全自动意式咖啡机。请选择压力稳定在15bar以上、必须是不锈钢双锅炉、价格在8000-10000元的咖啡机。',
  reminder: '压力15bar+，双锅炉，价格8k-10k。',
  products: [
    {
      id: 'd2_0',name: '德龙 EC9155',price: 6999,rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
      summary: '全自动一体，简单操作',
      attributes: [
        { label: '压力', value: '19bar' },
        { label: '锅炉', value: '双锅炉' },
        { label: '材质', value: '不锈钢' },
        { label: '温控精度', value: '±2°C' },
        { label: '萃取方式', value: '传统高压' }
      ]
    },
    {
      id: 'd2_1',name: 'Breville 920',price: 9500,rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
      summary: '精准温控，商用级萃取',
      attributes: [
        { label: '压力', value: '15bar' },
        { label: '锅炉', value: '双锅炉' },
        { label: '材质', value: '不锈钢' },
        { label: '温控精度', value: '±1°C' },
        { label: '萃取方式', value: '预浸泡+可变压力' }
      ]
    }
  ]
},
{
  id: 3,type: 'PHONE',objectCount: 4,dimensionCount: 3,
  instruction: '你现在在选一个新手机，选择一个价格在3000-5000元范围内、内存≥512G，续航能力强的手机。',
  reminder: '3000-5000元，内存≥512G，续航最强。',
  products: [
    {
      id: 'd3_0',name: '华为 Mate 50E',price: 3999,rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      summary: '昆仑玻璃，应急模式，信号强',
      attributes: [
        { label: '内存', value: '256GB' },
        { label: '电池', value: '4460mAh' }
      ]
    },
    {
      id: 'd3_1', name: '小米 13',price: 3299,rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
      summary: '徕卡光学镜头，小屏手感佳',
      attributes: [
        { label: '内存', value: '256GB' },
        { label: '电池', value: '4500mAh' }
      ]
    },
    {
      id: 'd3_2',name: 'iPhone 13',price: 4699,rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
      summary: 'A15芯片，色彩还原真实',
      attributes: [
        { label: '内存', value: '128GB' },
        { label: '电池', value: '3227mAh' }
      ]
    },
    {
      id: 'd3_3',name: '一加 11',price: 3899,rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400',
      summary: '哈苏影像，顶级震感马达',
      attributes: [
        { label: '内存', value: '512GB' },
        { label: '电池', value: '5000mAh' }
      ]
    }
  ]
},
{
  id: 4,type: 'LAPTOP', objectCount: 4,dimensionCount: 3,
  instruction: '你是大学电竞社社长，需要买一台极致性能的游戏本参加全国大赛。请选择价格15000左右、显卡必须是RTX 4080以上、屏幕刷新率必须超过240Hz的电脑。',
  reminder: '1.5万左右，4080显卡，屏幕刷新率240Hz+。',
  products: [
    {
      id: 'd4_0',name: 'ROG 枪神7 P',price: 15999,rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      summary: '败家之眼，光效拉满',
      attributes: [
        { label: '显卡', value: 'RTX 4080' },
        { label: '刷新率', value: '240Hz' }
      ]
    },
    {
      id: 'd4_1',name: '拯救者 Y9000P',price: 14500,rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      summary: '冰魄散热，满血性能',
      attributes: [
        { label: '显卡', value: 'RTX 4080' },
        { label: '刷新率', value: '120Hz' }
      ]
    },
    {
      id: 'd4_2',name: '外星人 m18',price: 23999,rating: 5.0,
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      summary: '极致信仰，堆料机皇',
      attributes: [
        { label: '显卡', value: 'RTX 4090' },
        { label: '刷新率', value: '480Hz' }
      ]
    },
    {
      id: 'd4_3', name: '暗影精灵 10',price: 11000,rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      summary: '主流大作通杀，高性价比',
      attributes: [
        { label: '显卡', value: 'RTX 4070' },
        { label: '刷新率', value: '165Hz' }
      ]
    }
  ]
},
{
  id: 5,
  type: 'HOTEL',objectCount: 6,dimensionCount: 5,
  instruction: "假如你现在在选一个备考酒店，选择一个价格在300-500元范围内、环境相对安静、同时满足大床房、评分在4.8分以上的酒店。",
  reminder: "备考酒店，300-500元，安静，大床房，评分4.8+。",
  products: [
    { id: "d5_0", name: "汉庭酒店 (海淀黄庄店)", price: 378, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", summary: "商务地段，交通便利，性价比之选", attributes: [{ label: "环境", value: "临街，略有杂音" }, { label: "早餐", value: "包含基础早餐" }, { label: "位置", value: "需打车10分钟" }, { label: "房型", value: "高级大床" }, { label: "隔音", value: "普通单层" }] },
    { id: "d5_1", name: "全季酒店 (学院路店)", price: 488, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", summary: "设计感强，读书区舒适", attributes: [{ label: "环境", value: "安静" }, { label: "早餐", value: "中西式可选" }, { label: "位置", value: "步行15分钟" }, { label: "房型", value: "双床" }, { label: "隔音", value: "中等" }] },
    { id: "d5_2", name: "亚朵酒店 (清华店)", price: 598, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400", summary: "服务好，有免费夜宵", attributes: [{ label: "环境", value: "非常安静" }, { label: "早餐", value: "高端自助" }, { label: "位置", value: "步行8分钟" }, { label: "房型", value: "超大床" }, { label: "隔音", value: "优秀" }] },
    { id: "d5_3", name: "桔子酒店 (中关村店)", price: 424, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400", summary: "距考场100米，双层隔音玻璃，深度睡眠系统", attributes: [{ label: "环境", value: "非常安静" }, { label: "早餐", value: "丰富自助" }, { label: "位置", value: "考场旁" }, { label: "房型", value: "高级大床" }, { label: "隔音", value: "双层玻璃" }] },
    { id: "d5_4", name: "如家精选 (五道口店)", price: 289, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", summary: "经济实惠，学生首选", attributes: [{ label: "环境", value: "楼下餐饮街" }, { label: "早餐", value: "简餐" }, { label: "位置", value: "步行20分钟" }, { label: "房型", value: "大床" }, { label: "隔音", value: "较差" }] },
    { id: "d5_5", name: "丽枫酒店 (北航店)", price: 458, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", summary: "薰衣草香氛助眠，智能控制", attributes: [{ label: "环境", value: "安静" }, { label: "早餐", value: "包含" }, { label: "位置", value: "步行12分钟" }, { label: "房型", value: "双床" }, { label: "隔音", value: "中等" }] }
  ]
},
{
  id: 6,
  type: "LAPTOP",objectCount: 6,dimensionCount: 5,
  instruction: "你是一名即将毕业的研究生，需要写长达数万字的论文并运行复杂的模拟数据，因此计划买一台笔记本电脑。请选择性能可靠，双风扇，内存超过15G，价格在12000左右，可上门售后的电脑。",
  reminder: "价格在1.2万左右，性能稳定，内存≥15G，可上门售后，双风扇。",
  products: [
    { id: "d6_0", name: "MBP 14 M3", price: 12999, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", summary: "Mac系统稳定，Retina屏幕", attributes: [{ label: "内存", value: "18G" }, { label: "稳定性", value: "极高" }, { label: "售后", value: "店面保修" }, { label: "散热", value: "双风扇" }, { label: "重量", value: "1.6kg" }] },
    { id: "d6_1", name: "ROG 幻14", price: 13500, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", summary: "游戏性能强，高刷屏幕", attributes: [{ label: "内存", value: "24G" }, { label: "稳定性", value: "中等" }, { label: "售后", value: "上门服务" }, { label: "散热", value: "三风扇" }, { label: "重量", value: "2.0kg" }] },
    { id: "d6_2", name: "Surface Laptop", price: 9500, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", summary: "全铝机身，触控交互", attributes: [{ label: "内存", value: "16G" }, { label: "稳定性", value: "一般" }, { label: "售后", value: "寄修服务" }, { label: "散热", value: "无风扇" }, { label: "重量", value: "1.3kg" }] },
    { id: "d6_3", name: "戴尔XPS 13", price: 12500, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", summary: "微边框设计，颜值出众", attributes: [{ label: "内存", value: "12G" }, { label: "稳定性", value: "高" }, { label: "售后", value: "全球上门" }, { label: "散热", value: "单风扇" }, { label: "重量", value: "1.2kg" }] },
    { id: "d6_4", name: "ThinkPad X1", price: 11500, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", summary: "商务典范，极致键盘手感", attributes: [{ label: "内存", value: "32G" }, { label: "稳定性", value: "极高" }, { label: "售后", value: "全球上门" }, { label: "散热", value: "双风扇" }, { label: "重量", value: "1.1kg" }] },
    { id: "d6_5", name: "华为MateBook X Pro", price: 11999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", summary: "全面屏设计，轻薄便携", attributes: [{ label: "内存", value: "16G" }, { label: "稳定性", value: "较高" }, { label: "售后", value: "寄修服务" }, { label: "散热", value: "双风扇" }, { label: "重量", value: "1.3kg" }] }
  ]
},
{
  id: 7,
  type: "FINANCE",
  objectCount: 8,
  dimensionCount: 3,
  instruction: "现在你计划为父母购置一份退休年金险。请选择收益率超过3.0%、起领年龄≥60岁、包含身故保险金评估的保险。",
  reminder: "收益>3.0%，起领≥60岁，含身故评估。",
  products: [
    { id: "d7_0", name: "新华 颐养金生", price: 100000, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "养老年金与健康保障结合", attributes: [{ label: "年化", value: "3.0%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_1", name: "泰康 幸福年", price: 100000, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "养老社区权益，稳健收益", attributes: [{ label: "年化", value: "3.5%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_2", name: "太平 乐享人生", price: 100000, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国企背景，稳健增长", attributes: [{ label: "年化", value: "2.8%" }, { label: "起领", value: "65岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_3", name: "友邦 充裕", price: 100000, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "全球配置，美元收益", attributes: [{ label: "年化", value: "4.2%" }, { label: "起领", value: "65岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_4", name: "平安 尊享", price: 100000, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国民大品牌，理赔有保障", attributes: [{ label: "年化", value: "3.0%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_5", name: "光大 永明", price: 100000, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "银行系保险，灵活可选", attributes: [{ label: "年化", value: "3.2%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_6", name: "中宏 乐享", price: 100000, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "灵活支取，高流动性", attributes: [{ label: "年化", value: "3.1%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_7", name: "人寿 鑫裕", price: 100000, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国资背景，安全第一", attributes: [{ label: "年化", value: "2.5%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "含" }] }
  ]
},
{
  id: 8,
  type: "FINANCE",
  objectCount: 8,
  dimensionCount: 3,
  instruction: "你现在想要定投实物黄金作为避险资产。请选择纯度为99.99%、价格在550/g以内。",
  reminder: "99.99%纯度，＜550/g。",
  products: [
    { id: "d8_0", name: "建设银行 龙鼎金", price: 545, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "银行托管，纯度极高", attributes: [{ label: "纯度", value: "99.99%" }, { label: "价格", value: "615元/g" }, { label: "重量", value: "10g" }] },
    { id: "d8_1", name: "中国黄金 投资条", price: 550, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "官定投资条，权威背书", attributes: [{ label: "纯度", value: "99.99%" }, { label: "价格", value: "510元/g" }, { label: "重量", value: "50g" }] },
    { id: "d8_2", name: "周大福 饰品金", price: 635, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "精美设计，品牌价值高", attributes: [{ label: "纯度", value: "99.9%" }, { label: "价格", value: "530元/g" }, { label: "重量", value: "5g" }] },
    { id: "d8_3", name: "金雅福 压制金", price: 538, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "低门槛，适合初学者", attributes: [{ label: "纯度", value: "99.9%" }, { label: "价格", value: "500元/g" }, { label: "重量", value: "1g" }] },
    { id: "d8_4", name: "老凤祥 金砖", price: 565, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "传统名店，保值力强", attributes: [{ label: "纯度", value: "99.99%" }, { label: "价格", value: "680元/g" }, { label: "重量", value: "100g" }] },
    { id: "d8_5", name: "工商银行 如意金", price: 540, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "国有大行，安全可靠", attributes: [{ label: "纯度", value: "99.99%" }, { label: "价格", value: "580元/g" }, { label: "重量", value: "20g" }] },
    { id: "d8_6", name: "深圳珠宝 标准金", price: 530, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "深圳水贝市场，价格透明", attributes: [{ label: "纯度", value: "99.95%" }, { label: "价格", value: "520元/g" }, { label: "重量", value: "500g" }] },
    { id: "d8_7", name: "招商银行 一卡通金", price: 555, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400", summary: "银行品牌，回购便利", attributes: [{ label: "纯度", value: "99.99%" }, { label: "价格", value: "545元/g" }, { label: "重量", value: "30g" }] }
  ]
},

{
    id: 9,
    type: 'SAFETY',
    objectCount: 4,
    dimensionCount: 5,
    instruction: "你刚刚搬进新房。担心室内空气污染问题，想选购一台高品质的空气净化器，请选择价格3000-5000、HEPA等级13以上、CADR值超过800、具备5年质保、噪音低于30分贝。",
    reminder: "3-5k，HEPA 13+，CADR > 800，5年质保，噪音<30分贝。",
    products: [
      { id: 'd9_0', name: '飞利浦 尊享', price: 4200, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '静音专利，医用净化', attributes: [{ label: '滤网', value: 'HEPA 14' }, { label: 'CADR', value: '900' }, { label: '质保', value: '5年' }, { label: '分贝', value: '32dB' }] },
      { id: 'd9_1', name: '霍尼韦尔 H9', price: 4800, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '气态污染物克星', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '850' }, { label: '质保', value: '5年' }, { label: '分贝', value: '29dB' }] },
      { id: 'd9_2', name: '小米 4 Max', price: 2999, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '超大面积净化，智能控制', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '810' }, { label: '质保', value: '2年' }, { label: '分贝', value: '35dB' }] },
      { id: 'd9_3', name: '布鲁雅尔 尊享', price: 5800, rating: 5.0, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '无臭氧技术，纯净空气', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '700' }, { label: '质保', value: '10年' }, { label: '分贝', value: '30dB' }] }
    ]
  },
{
    id: 10,
    type: 'CLOTHING',
    objectCount: 4,
    dimensionCount: 5,
    instruction: "你现在在准备一个求职面试，需要购置合适的服装。请选择价格区间在2000-3000以内，面料为羊毛，款式为修身，颜色为暗灰，3日内可到货的西装。",
    reminder: "面试西装，2000-3000元，暗灰色，羊毛面料，修身版型，3日内可到货。",
    products: [
      { id: 'd10_0', name: 'G2000 商务款', price: 2199, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '抗皱面料，职场新人首选', attributes: [{ label: '面料', value: '聚酯纤维混纺' }, { label: '剪裁', value: '修身' }, { label: '发货', value: '次日达' }, { label: '颜色', value: '暗灰色' }, { label: '厚度', value: '中等' }] },
      { id: 'd10_1', name: '报喜鸟 尊享款', price: 2899, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '精纺羊毛，透气舒爽', attributes: [{ label: '面料', value: '100%羊毛' }, { label: '剪裁', value: '修身' }, { label: '发货', value: '48h发货' }, { label: '颜色', value: '暗灰色' }, { label: '厚度', value: '轻薄' }] },
      { id: 'd10_2', name: '威可多 VICUTU', price: 2550, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '意式风格，高级垂感', attributes: [{ label: '面料', value: '80%羊毛' }, { label: '剪裁', value: '直筒' }, { label: '发货', value: '3-5天发货' }, { label: '颜色', value: '深灰色' }, { label: '厚度', value: '加厚' }] },
      { id: 'd10_3', name: '优衣库 基础款', price: 1299, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '可机洗，快时尚', attributes: [{ label: '面料', value: '仿毛化纤' }, { label: '剪裁', value: '宽松' }, { label: '发货', value: '次日达' }, { label: '颜色', value: '浅灰色' }, { label: '厚度', value: '轻薄' }] }
    ]
  },

  {
    id: 11,
    type: 'EDUCATION',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你正在寻求职业转型，准备报考一项昂贵的计算机高级认证培训。这项投资关乎你未来 10 年的职业薪资。请选择价格 2 万左右、学员通过率高于 85%、并提供行业认可证书的课程。",
    reminder: "价格2万左右，>85%通过率，含行业认可证书。",
    products: [
      { id: 'd11_0', name: 'Udacity 架构师', price: 19800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', summary: '硅谷前沿技术，项目实战驱动', attributes: [{ label: '通过率', value: '88%' }, { label: '认可度', value: '行业认可' }] },
      { id: 'd11_1', name: '国内机构 训练营', price: 21000, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', summary: '全中文讲解，1对1辅导', attributes: [{ label: '通过率', value: '76%' }, { label: '认可度', value: '行业认可' }] }
    ]
  },
{
    id: 12,
    type: 'GADGET',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你打算买一辆竞速公路自行车。请选择碳纤维车架、必须搭配Shimano 105以上套件、价格在10000-15000元的竞速自行车。",
    reminder: "碳架，Shimano 105+套件，1-1.5万。",
    products: [
      { id: 'd12_0', name: 'Giant TCR', price: 12800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '几何平衡，爬坡神器', attributes: [{ label: '材质', value: '碳纤维' }, { label: '套件', value: 'Shimano 105' }] },
      { id: 'd12_1', name: 'Specialized Allez', price: 11500, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '气动造型，巡航稳定', attributes: [{ label: '材质', value: '铝合金' }, { label: '套件', value: 'Shimano 105' }] }
    ]
  },
{
  id: 13,
  type: "GADGET",
  objectCount: 8,
  dimensionCount: 5,
  instruction: "现在母亲节还有7天就要到了，你想给母亲购置一条项链。请选择价格在10000-20000之间，材质为黄金，包含免费清洗的售后服务，店铺为官方旗舰店，在5日内可送达的项链。",
  reminder: "1-2万，黄金，免费清洗，旗舰店，5日达。",
  products: [
    { id: "d13_0", name: "Tiffany & Co.", price: 12500, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400", summary: "时尚前卫，国际大牌", attributes: [{ label: "材质", value: "18K黄金" }, { label: "售后", value: "有偿清洗" }, { label: "店铺", value: "品牌旗舰店" }, { label: "物流", value: "7-10天" }, { label: "品牌", value: "国际一线" }] },
    { id: "d13_1", name: "周大福 传承", price: 13800, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400", summary: "古法工艺，厚重典雅", attributes: [{ label: "材质", value: "合金镀金" }, { label: "售后", value: "终身免洗" }, { label: "店铺", value: "品牌旗舰店" }, { label: "物流", value: "3天" }, { label: "品牌", value: "香港品牌" }] },
    { id: "d13_2", name: "Cartier Love", price: 22000, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400", summary: "经典螺丝设计，极具辨识度", attributes: [{ label: "材质", value: "合金镀金" }, { label: "售后", value: "无偿保养" }, { label: "店铺", value: "品牌旗舰店" }, { label: "物流", value: "2天" }, { label: "品牌", value: "法国奢华" }] },
    { id: "d13_3", name: "六福珠宝 龙凤呈祥", price: 15800, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400", summary: "传统设计，寓意美好", attributes: [{ label: "材质", value: "24K足金" }, { label: "售后", value: "终身免费清洗" }, { label: "店铺", value: "授权经销商" }, { label: "物流", value: "3天" }, { label: "品牌", value: "港资珠宝" }] },
    { id: "d13_4", name: "VCA 梵克雅宝", price: 19800, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400", summary: "四叶草经典，名媛首选", attributes: [{ label: "材质", value: "18K黄金" }, { label: "售后", value: "品牌免费养护" }, { label: "店铺", value: "品牌旗舰店" }, { label: "物流", value: "5天" }, { label: "品牌", value: "法国高级" }] },
    { id: "d13_5", name: "老凤祥 福禄寿", price: 8800, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400", summary: "中华老字号，工艺精湛", attributes: [{ label: "材质", value: "千足金" }, { label: "售后", value: "免费清洗" }, { label: "店铺", value: "官方旗舰店" }, { label: "物流", value: "4天" }, { label: "品牌", value: "百年老店" }] },
    { id: "d13_6", name: "施华洛世奇", price: 2800, rating: 4.2, imageUrl: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400", summary: "亮眼仿水晶，多变造型", attributes: [{ label: "材质", value: "合金镀金" }, { label: "售后", value: "无清洗服务" }, { label: "店铺", value: "官方自营" }, { label: "物流", value: "次日达" }, { label: "品牌", value: "奥地利水晶" }] },
    { id: "d13_7", name: "宝格丽 Serpenti", price: 21500, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400", summary: "灵蛇设计，大胆前卫", attributes: [{ label: "材质", value: "18K黄金" }, { label: "售后", value: "专属保养" }, { label: "店铺", value: "品牌旗舰店" }, { label: "物流", value: "10-15天" }, { label: "品牌", value: "意大利奢侈" }] }
  ]
},
{
  id: 14,
  type: "GADGET",
  objectCount: 8,
  dimensionCount: 5,
  instruction: "你是一个职业博主，需要买一台性能极致的旗舰手机来拍摄视频。请选择价格8000以上、存储1TB、支持8K录制、必须是钛金属机身、续航需支持使用24小时。",
  reminder: "8k+价格，1TB，8K摄影，钛金属，24h续航。",
  products: [
    { id: "d14_0", name: "iPhone 15 Pro Max", price: 10999, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400", summary: "ProRes视频拍摄，钛金属机身", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "1TB" }, { label: "视频", value: "4K/60fps" }, { label: "续航", value: "29h视频" }, { label: "系统", value: "iOS" }] },
    { id: "d14_1", name: "小米 14 Ultra", price: 8299, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "徕卡光学镜头，专业相机模式", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "512GB" }, { label: "视频", value: "8K/24fps" }, { label: "续航", value: "24h+" }, { label: "系统", value: "Android" }] },
    { id: "d14_2", name: "一加 12 Pro", price: 8999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", summary: "哈苏影像，超光影引擎", attributes: [{ label: "机身", value: "钛合金" }, { label: "存储", value: "512GB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "26h" }, { label: "系统", value: "Android" }] },
    { id: "d14_3", name: "Samsung S24 Ultra", price: 9299, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400", summary: "8K视频，10倍光学变焦", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "1TB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "30h通话" }, { label: "系统", value: "Android" }] },
    { id: "d14_4", name: "华为 Pura 70 U", price: 10999, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "伸缩摄像头，卫星通讯", attributes: [{ label: "机身", value: "高分子材料" }, { label: "存储", value: "1TB" }, { label: "视频", value: "4K全焦段" }, { label: "续航", value: "26h" }, { label: "系统", value: "HarmonyOS" }] },
    { id: "d14_5", name: "OPPO Find X7 U", price: 6999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", summary: "双潜望长焦，哈苏影调", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "512GB" }, { label: "视频", value: "4K/60fps" }, { label: "续航", value: "22h" }, { label: "系统", value: "Android" }] },
    { id: "d14_6", name: "荣耀 Magic 6", price: 8599, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "巨犀玻璃，鹰眼相机", attributes: [{ label: "机身", value: "航空铝" }, { label: "存储", value: "1TB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "20h" }, { label: "系统", value: "Android" }] },
    { id: "d14_7", name: "vivo X100 Pro+", price: 7999, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", summary: "蔡司镜头，V3影像芯片", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "256GB" }, { label: "视频", value: "8K/24fps" }, { label: "续航", value: "25h" }, { label: "系统", value: "Android" }] }
  ]
},
{
    id: 15,
    type: 'GIFT',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你需要买一瓶顶级红酒送给你的重要合作伙伴。请选择评分95分以上、价格超过3000元、并且年份在2015年之后（含2015年）的红酒。",
    reminder: "评分95分+，价格3k+，年份2015+。",
    products: [
      { id: 'd15_0', name: '拉菲古堡 2018', price: 8800, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', summary: '名庄之首，极具收藏价值', attributes: [{ label: '专家分', value: '94' }, { label: '年份', value: '2018' }] },
      { id: 'd15_1', name: '作品一号 Opus', price: 3850, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', summary: '纳帕谷顶尖跨界佳作', attributes: [{ label: '专家分', value: '97' }, { label: '年份', value: '2014' }] }
    ]
  },
{
  id: 16,
  type: "EDUCATION",
  objectCount: 6,
  dimensionCount: 3,
  instruction: "你准备利用晚间时间提升AI编程能力，现在需要选一个性价比最高的课程。请选择学费1000-2000元、通过率超过90%、提供行业认证证书。",
  reminder: "1-2k学费，>90%通过率，行业证书。",
  products: [
    { id: "d16_0", name: "Udemy 深度学习", price: 1200, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", summary: "实操为主，终身访问", attributes: [{ label: "通过率", value: "95%" }, { label: "证书", value: "内部证明" }] },
    { id: "d16_1", name: "极客时间 训练营", price: 1800, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", summary: "大厂架构师，实战点评", attributes: [{ label: "通过率", value: "91%" }, { label: "证书", value: "内部证书" }] },
    { id: "d16_2", name: "网易云课堂 进阶", price: 900, rating: 4.3, imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", summary: "零基础友好，配套练习", attributes: [{ label: "通过率", value: "78%" }, { label: "证书", value: "内部证书" }] },
    { id: "d16_3", name: "GitHub 原创课", price: 2500, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", summary: "开源社区项目，硬核代码", attributes: [{ label: "通过率", value: "85%" }, { label: "证书", value: "行业证书" }] },
    { id: "d16_4", name: "AWS AI认证课程", price: 1900, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400", summary: "云厂商官方认证，就业导向", attributes: [{ label: "通过率", value: "88%" }, { label: "证书", value: "行业证书" }] },
    { id: "d16_5", name: "Coursera AI专项", price: 1500, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", summary: "斯坦福教授，权威认证", attributes: [{ label: "通过率", value: "92%" }, { label: "证书", value: "行业证书" }] }
  ]
}
];
