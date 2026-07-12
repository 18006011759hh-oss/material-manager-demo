export type AdminAssetStatus = 'available' | 'offline' | 'expired' | 'notRecommended';

export interface AdminMaterialAsset {
  id: string;
  name: string;
  meta: string;
  type: '视频' | '图片';
  status: AdminAssetStatus;
  statusLabel: string;
  important: boolean;
  tags: string[];
  createdAt: string;
}

export const adminStatusTabs = [
  { label: '全部素材（2,568）', value: 'all' },
  { label: '可用（2,102）', value: 'available' },
  { label: '重点（156）', value: 'important' },
  { label: '下架（86）', value: 'offline' },
  { label: '过期（72）', value: 'expired' },
  { label: '不推荐（152）', value: 'notRecommended' },
];

export const adminMaterialAssets: AdminMaterialAsset[] = [
  {
    id: 'A001',
    name: '口红上嘴试色视频.mp4',
    meta: 'MP4 · 1920×1080 · 128.6MB',
    type: '视频',
    status: 'available',
    statusLabel: '可用',
    important: true,
    tags: ['口红', '上嘴试色', '夏日'],
    createdAt: '2024-06-15\n10:30',
  },
  {
    id: 'A002',
    name: '粉底遮瑕对比测评.mp4',
    meta: 'MP4 · 1920×1080 · 96.3MB',
    type: '视频',
    status: 'available',
    statusLabel: '可用',
    important: false,
    tags: ['粉底', '遮瑕', '测评'],
    createdAt: '2024-06-15\n09:45',
  },
  {
    id: 'A003',
    name: '新品功能展示.mov',
    meta: 'MOV · 1920×1080 · 210.4MB',
    type: '视频',
    status: 'offline',
    statusLabel: '下架',
    important: false,
    tags: ['新品', '功能', '科技'],
    createdAt: '2024-06-14\n16:20',
  },
  {
    id: 'A004',
    name: '夏日促销海报.psd',
    meta: 'PSD · 1080×1920 · 82.1MB',
    type: '图片',
    status: 'expired',
    statusLabel: '过期',
    important: false,
    tags: ['海报', '促销', '夏日'],
    createdAt: '2024-05-20\n11:10',
  },
  {
    id: 'A005',
    name: '节日氛围_烟花.mp4',
    meta: 'MP4 · 1920×1080 · 74.5MB',
    type: '视频',
    status: 'available',
    statusLabel: '可用',
    important: true,
    tags: ['节日', '氛围', '烟花'],
    createdAt: '2024-06-13\n14:05',
  },
  {
    id: 'A006',
    name: '转场特效_光效.mp4',
    meta: 'MP4 · 1920×1080 · 32.7MB',
    type: '视频',
    status: 'notRecommended',
    statusLabel: '不推荐',
    important: false,
    tags: ['转场', '特效', '光效'],
    createdAt: '2024-06-12\n10:00',
  },
  {
    id: 'A007',
    name: '产品包装展示.jpg',
    meta: 'JPG · 2000×1333 · 5.6MB',
    type: '图片',
    status: 'available',
    statusLabel: '可用',
    important: false,
    tags: ['包装', '产品', '展示'],
    createdAt: '2024-06-11\n15:30',
  },
  {
    id: 'A008',
    name: '旧包装对比图.jpg',
    meta: 'JPG · 2000×1333 · 4.9MB',
    type: '图片',
    status: 'offline',
    statusLabel: '下架',
    important: false,
    tags: ['包装', '对比', '旧版'],
    createdAt: '2024-06-10\n09:20',
  },
];

export const statusOverview = [
  { label: '可用', value: '2,102', percent: '81.8%', color: '#22c55e' },
  { label: '下架', value: '86', percent: '3.3%', color: '#f97316' },
  { label: '过期', value: '72', percent: '2.8%', color: '#f87171' },
  { label: '不推荐', value: '152', percent: '5.9%', color: '#facc15' },
  { label: '其他', value: '156', percent: '6.1%', color: '#a3a3a3' },
];

export const publishChanges = [
  { label: '新增素材', count: '12 个', icon: 'download' },
  { label: '设为重点', count: '3 个', icon: 'star' },
  { label: '下架素材', count: '2 个', icon: 'offline' },
  { label: '标记过期', count: '1 个', icon: 'expired' },
  { label: '不推荐素材', count: '3 个', icon: 'notRecommended' },
];
