export type LibraryStatus = 'available' | 'important' | 'notRecommended' | 'offline';

export interface LibraryAsset {
  id: string;
  fileName: string;
  previewTag: string;
  type: string;
  category: string;
  status: LibraryStatus;
  statusLabel: string;
  duration: string;
  size: string;
  localPath: string;
  resolution: string;
  frameRate: string;
  createdAt: string;
}

export interface CategoryNode {
  name: string;
  children?: CategoryNode[];
}

export const categoryTree: CategoryNode[] = [
  {
    name: '短视频素材库（D:）',
    children: [
      {
        name: '01_口播素材',
        children: ['上嘴试色', '知识讲解', '产品测评', '生活分享'].map((name) => ({ name })),
      },
      {
        name: '02_产品素材',
        children: ['产品展示', '功能演示', '使用场景'].map((name) => ({ name })),
      },
      {
        name: '03_活动素材',
        children: ['节日氛围', '促销活动'].map((name) => ({ name })),
      },
      {
        name: '04_影视素材',
        children: ['B-roll', '转场特效', '背景环境'].map((name) => ({ name })),
      },
      {
        name: '05_其他素材',
        children: ['音频', '图片'].map((name) => ({ name })),
      },
    ],
  },
];

export const libraryAssets: LibraryAsset[] = [
  {
    id: 'L001',
    fileName: '口红上嘴试色视频_01.mp4',
    previewTag: '上嘴试色',
    type: '口播素材',
    category: '上嘴试色',
    status: 'available',
    statusLabel: '可用',
    duration: '00:15',
    size: '128.6 MB',
    localPath: 'D:\\短视频素材库\\01_口播素材\\上嘴试色\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-15 09:30',
  },
  {
    id: 'L002',
    fileName: '粉底遮瑕对比测评.mp4',
    previewTag: '测评',
    type: '口播素材',
    category: '测评',
    status: 'important',
    statusLabel: '重点',
    duration: '00:32',
    size: '96.3 MB',
    localPath: 'D:\\短视频素材库\\01_口播素材\\测评\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-14 16:20',
  },
  {
    id: 'L003',
    fileName: '防晒效果演示.mp4',
    previewTag: '使用演示',
    type: '产品素材',
    category: '使用演示',
    status: 'available',
    statusLabel: '可用',
    duration: '00:28',
    size: '118.2 MB',
    localPath: 'D:\\短视频素材库\\02_产品素材\\功能演示\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-14 13:05',
  },
  {
    id: 'L004',
    fileName: '夏日促销活动口播.mov',
    previewTag: '促销活动',
    type: '活动素材',
    category: '促销活动',
    status: 'available',
    statusLabel: '可用',
    duration: '00:20',
    size: '82.1 MB',
    localPath: 'D:\\短视频素材库\\03_活动素材\\促销活动\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-13 18:45',
  },
  {
    id: 'L005',
    fileName: '节日氛围_烟花.mp4',
    previewTag: '节日氛围',
    type: '活动素材',
    category: '节日氛围',
    status: 'important',
    statusLabel: '重点',
    duration: '00:18',
    size: '74.5 MB',
    localPath: 'D:\\短视频素材库\\03_活动素材\\节日氛围\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-12 11:10',
  },
  {
    id: 'L006',
    fileName: '城市夜景延时.mp4',
    previewTag: '背景环境',
    type: '影视素材',
    category: '背景环境',
    status: 'available',
    statusLabel: '可用',
    duration: '00:25',
    size: '210.4 MB',
    localPath: 'D:\\短视频素材库\\04_影视素材\\背景环境\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-12 09:00',
  },
  {
    id: 'L007',
    fileName: '转场特效_光效.mp4',
    previewTag: '转场特效',
    type: '影视素材',
    category: '转场特效',
    status: 'notRecommended',
    statusLabel: '不推荐',
    duration: '00:08',
    size: '32.7 MB',
    localPath: 'D:\\短视频素材库\\04_影视素材\\转场特效\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-11 15:12',
  },
  {
    id: 'L008',
    fileName: '产品包装展示.mp4',
    previewTag: '产品展示',
    type: '产品素材',
    category: '产品展示',
    status: 'offline',
    statusLabel: '已下架',
    duration: '00:22',
    size: '90.1 MB',
    localPath: 'D:\\短视频素材库\\02_产品素材\\产品展示\\',
    resolution: '1920 × 1080',
    frameRate: '25fps',
    createdAt: '2024-06-10 10:40',
  },
];

export const previewAsset = libraryAssets[0];

export const filterOptions = {
  status: [
    { label: '全部状态', value: 'all' },
    { label: '可用', value: 'available' },
    { label: '重点', value: 'important' },
    { label: '不推荐', value: 'notRecommended' },
    { label: '已下架', value: 'offline' },
  ],
  type: [
    { label: '全部类型', value: 'all' },
    { label: '口播素材', value: 'talking' },
    { label: '产品素材', value: 'product' },
    { label: '活动素材', value: 'campaign' },
    { label: '影视素材', value: 'film' },
  ],
  tag: [
    { label: '全部标签', value: 'all' },
    { label: '上嘴试色', value: 'lip' },
    { label: '测评', value: 'review' },
    { label: '重点', value: 'important' },
  ],
  time: [
    { label: '时间筛选', value: 'all' },
    { label: '最近 7 天', value: '7d' },
    { label: '最近 30 天', value: '30d' },
  ],
};
