export interface PublishAssetRow {
  id: string;
  name: string;
  type: string;
  size?: string;
  tags?: string[];
  source?: string;
  time?: string;
  note?: string;
  status?: 'offline' | 'expired' | 'notRecommended';
  statusLabel?: string;
  reason?: string;
  suggestion?: string;
}

export const addedAssets: PublishAssetRow[] = [
  {
    id: 'P001',
    name: '夏日促销活动口播_01.mp4',
    type: '视频',
    size: '128.6 MB',
    tags: ['口播', '促销', '夏日'],
    source: '本地上传',
    time: '2024-06-15 10:30',
  },
  {
    id: 'P002',
    name: '产品功能演示_新版.mp4',
    type: '视频',
    size: '96.3 MB',
    tags: ['产品', '功能', '演示'],
    source: '本地上传',
    time: '2024-06-15 09:45',
  },
  {
    id: 'P003',
    name: '节日氛围_烟花夜景.mp4',
    type: '视频',
    size: '74.5 MB',
    tags: ['节日', '氛围', '烟花'],
    source: '本地上传',
    time: '2024-06-15 09:20',
  },
];

export const importantAssets: PublishAssetRow[] = [
  {
    id: 'I001',
    name: '新品功能展示.mp4',
    type: '视频',
    tags: ['新品', '功能', '科技'],
    note: '新品发布核心素材，建议优先使用',
  },
  {
    id: 'I002',
    name: '品牌宣传片_精华版.mp4',
    type: '视频',
    tags: ['品牌', '宣传', '企业'],
    note: '品牌宣传核心素材',
  },
  {
    id: 'I003',
    name: '用户案例_成功故事.mp4',
    type: '视频',
    tags: ['案例', '用户', '故事'],
    note: '用户案例精选，转化效果好',
  },
];

export const unavailableAssetsForPublish: PublishAssetRow[] = [
  {
    id: 'U001',
    name: '旧版产品演示.mp4',
    type: '视频',
    status: 'offline',
    statusLabel: '下架',
    reason: '产品已更新',
    suggestion: '建议替换为新版素材',
  },
  {
    id: 'U002',
    name: '过牌活动口播_春季.mp4',
    type: '视频',
    status: 'expired',
    statusLabel: '过期',
    reason: '活动已结束（过期时间：2024-05-31）',
    suggestion: '建议替换为最新活动素材',
  },
  {
    id: 'U003',
    name: '低质量素材_模糊画面.mp4',
    type: '视频',
    status: 'notRecommended',
    statusLabel: '不推荐',
    reason: '画质模糊，使用体验差',
    suggestion: '建议替换为高清素材',
  },
];

export const publishSummary = [
  { label: '新增素材', value: '12 个', description: '新增可用素材', tone: 'green' },
  { label: '重点素材', value: '3 个', description: '标记为重点推荐', tone: 'blue' },
  { label: '不可用素材', value: '5 个', description: '下架 / 过期 / 不推荐', tone: 'amber' },
  { label: '影响剪辑师', value: '126 位', description: '将同步本次更新内容', tone: 'gray' },
  { label: '预计同步时间', value: '1–2 分钟', description: '发布后自动同步', tone: 'gray' },
  { label: '素材库存变化', value: '+10 个', description: '可用素材净增数量', tone: 'gray' },
];
