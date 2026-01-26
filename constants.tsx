
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [

{
  id: 1,type: 'GADGET',objectCount: 2,dimensionCount: 5,
  instruction: '你要选一家全自动意式咖啡机。请选择压力稳定在15bar以上、必须是不锈钢双锅炉、温控精度为±1℃，萃取方式为预浸泡且可变压力，价格在8000-10000元的咖啡机。',
  reminder: '压力15bar+，双锅炉，材质为不锈钢，萃取方式为预浸泡+可变压力，价格8k-10k。',
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
  id: 2,type: 'PHONE',objectCount: 4,dimensionCount: 3,
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
  id: 3,
  type: 'HOTEL',objectCount: 6,dimensionCount: 5,
  instruction: "假如你现在在选一个备考酒店，选择一个价格在300-500元范围内、环境相对安静、同时满足大床房、评分在4.8分以上的酒店。",
  reminder: "备考酒店，300-500元，安静，大床房，评分4.8+。",
  products: [
    { id: "d5_0", name: "汉庭酒店 (海淀黄庄店)", price: 378, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", summary: "商务地段，交通便利，性价比之选", attributes: [{ label: "环境", value: "临街，略有杂音" }, { label: "早餐", value: "包含基础早餐" }, { label: "位置", value: "需打车10分钟" }, { label: "房型", value: "高级大床" }, { label: "隔音", value: "普通单层" }] },
    { id: "d5_1", name: "全季酒店 (学院路店)", price: 488, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", summary: "设计感强，读书区舒适", attributes: [{ label: "环境", value: "安静" }, { label: "早餐", value: "中西式可选" }, { label: "位置", value: "步行15分钟" }, { label: "房型", value: "双床" }, { label: "隔音", value: "中等" }] },
    { id: "d5_2", name: "亚朵酒店 (清华店)", price: 598, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400", summary: "服务好，有免费夜宵", attributes: [{ label: "环境", value: "非常安静" }, { label: "早餐", value: "高端自助" }, { label: "位置", value: "步行8分钟" }, { label: "房型", value: "超大床" }, { label: "隔音", value: "优秀" }] },
    { id: "d5_3", name: "桔子酒店 (中关村店)", price: 424, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400", summary: "距考场100米，双层隔音玻璃，深度睡眠系统", attributes: [{ label: "环境", value: "非常安静" }, { label: "早餐", value: "丰富自助" }, { label: "位置", value: "考场旁" }, { label: "房型", value: "高级大床" }, { label: "隔音", value: "双层玻璃" }] },
    { id: "d5_4", name: "如家精选 (五道口店)", price: 289, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", summary: "经济实惠，学生首选", attributes: [{ label: "环境", value: "楼下餐饮街" }, { label: "早餐", value: "简餐" }, { label: "位置", value: "步行20分钟" }, { label: "房型", value: "大床" }, { label: "隔音", value: "较差" }] },
    { id: "d5_5", name: "丽枫酒店 (北航店)", price: 458, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", summary: "薰衣草香氛助眠，智能控制", attributes: [{ label: "环境", value: "安静" }, { label: "早餐", value: "包含" }, { label: "位置", value: "步行12分钟" }, { label: "房型", value: "双床" }, { label: "隔音", value: "中等" }] }
  ]
},

{
  id: 4,
  type: "FINANCE",
  objectCount: 8,
  dimensionCount: 3,
  instruction: "现在你计划为父母购置一份退休年金险。请选择收益率超过3.0%、起领年龄≥60岁、包含身故保险金评估的保险。",
  reminder: "收益>3.0%，起领≥60岁，含身故评估。",
  products: [
    { id: "d7_0", name: "新华 颐养金生", price: 100000, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "养老年金与健康保障结合", attributes: [{ label: "年化", value: "3.0%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_1", name: "泰康 幸福年", price: 100000, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "养老社区权益，稳健收益", attributes: [{ label: "年化", value: "3.5%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_2", name: "太平 乐享人生", price: 100000, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国企背景，稳健增长", attributes: [{ label: "年化", value: "2.8%" }, { label: "起领", value: "65岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_3", name: "友邦 充裕", price: 100000, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "全球配置，美元收益", attributes: [{ label: "年化", value: "4.2%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_4", name: "平安 尊享", price: 100000, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国民大品牌，理赔有保障", attributes: [{ label: "年化", value: "3.5%" }, { label: "起领", value: "60岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_5", name: "光大 永明", price: 100000, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "银行系保险，灵活可选", attributes: [{ label: "年化", value: "3.2%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "含" }] },
    { id: "d7_6", name: "中宏 乐享", price: 100000, rating: 4.4, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "灵活支取，高流动性", attributes: [{ label: "年化", value: "3.1%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "不含" }] },
    { id: "d7_7", name: "人寿 鑫裕", price: 100000, rating: 4.5, imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400", summary: "国资背景，安全第一", attributes: [{ label: "年化", value: "2.5%" }, { label: "起领", value: "55岁" }, { label: "身故金", value: "含" }] }
  ]
},

{
    id: 5,
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
    id: 6,
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
  id: 7,
  type: "GADGET",
  objectCount: 8,
  dimensionCount: 5,
  instruction: "你是一个职业博主，需要买一台性能极致的旗舰手机来拍摄视频。请选择价格8000以上、存储1TB、支持8K录制、必须是钛金属机身、续航需支持使用24小时。",
  reminder: "8k+价格，1TB，8K摄影，钛金属，24h续航。",
  products: [
    { id: "d14_0", name: "iPhone 15 Pro Max", price: 10999, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "ProRes视频拍摄，钛金属机身", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "1TB" }, { label: "视频", value: "4K/60fps" }, { label: "续航", value: "29h视频" }, { label: "系统", value: "iOS" }] },
    { id: "d14_1", name: "小米 14 Ultra", price: 8299, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "徕卡光学镜头，专业相机模式", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "512GB" }, { label: "视频", value: "8K/24fps" }, { label: "续航", value: "24h+" }, { label: "系统", value: "Android" }] },
    { id: "d14_2", name: "一加 12 Pro", price: 8999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "哈苏影像，超光影引擎", attributes: [{ label: "机身", value: "钛合金" }, { label: "存储", value: "512GB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "26h" }, { label: "系统", value: "Android" }] },
    { id: "d14_3", name: "Samsung S24 Ultra", price: 9299, rating: 4.8, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "8K视频，10倍光学变焦", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "1TB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "30h通话" }, { label: "系统", value: "Android" }] },
    { id: "d14_4", name: "华为 Pura 70 U", price: 10999, rating: 4.9, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "伸缩摄像头，卫星通讯", attributes: [{ label: "机身", value: "高分子材料" }, { label: "存储", value: "1TB" }, { label: "视频", value: "4K全焦段" }, { label: "续航", value: "26h" }, { label: "系统", value: "HarmonyOS" }] },
    { id: "d14_5", name: "OPPO Find X7 U", price: 6999, rating: 4.6, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "双潜望长焦，哈苏影调", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "512GB" }, { label: "视频", value: "4K/60fps" }, { label: "续航", value: "22h" }, { label: "系统", value: "Android" }] },
    { id: "d14_6", name: "荣耀 Magic 6", price: 8599, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "巨犀玻璃，鹰眼相机", attributes: [{ label: "机身", value: "航空铝" }, { label: "存储", value: "1TB" }, { label: "视频", value: "8K/30fps" }, { label: "续航", value: "20h" }, { label: "系统", value: "Android" }] },
    { id: "d14_7", name: "vivo X100 Pro+", price: 7999, rating: 4.7, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", summary: "蔡司镜头，V3影像芯片", attributes: [{ label: "机身", value: "钛金属" }, { label: "存储", value: "256GB" }, { label: "视频", value: "8K/24fps" }, { label: "续航", value: "25h" }, { label: "系统", value: "Android" }] }
  ]
},

{
  id: 8,
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
