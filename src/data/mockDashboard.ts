import {
  AlertTriangle,
  Clock3,
  CloudDownload,
  Download,
  Folder,
  FolderOpen,
  Star,
  Tags,
} from 'lucide-react';

export const stats = [
  {
    label: '今日新增素材',
    value: '12',
    trend: '较昨日 +4',
    action: '去下载',
    actionPath: '/download-ai-classify',
    icon: CloudDownload,
  },
  {
    label: '重点素材',
    value: '8',
    trend: '较昨日 +2',
    action: '去查看',
    actionPath: '/important-assets',
    icon: Star,
  },
  {
    label: '不可用素材',
    value: '15',
    trend: '较昨日 +3',
    action: '去处理',
    actionPath: '/unavailable-assets',
    icon: AlertTriangle,
  },
  {
    label: '待分类素材',
    value: '26',
    trend: '较昨日 +6',
    action: '去分类',
    actionPath: '/download-ai-classify',
    icon: Folder,
  },
  {
    label: '近期使用素材',
    value: '20',
    action: '去查看',
    actionPath: '/usage-history',
    icon: Clock3,
  },
];

export const recentUpdates = [
  {
    type: '新增素材',
    content: '新增 12 个素材文件',
    updatedAt: '2024-06-15 09:30',
    source: '管理员发布',
    action: '去下载',
    icon: Folder,
  },
  {
    type: '重点素材',
    content: '新增 2 个重点素材',
    updatedAt: '2024-06-15 09:30',
    source: '管理员标记',
    action: '去查看',
    icon: Star,
  },
  {
    type: '不可用素材',
    content: '新增 3 个不可用素材',
    updatedAt: '2024-06-15 09:30',
    source: '状态更新',
    action: '去处理',
    icon: AlertTriangle,
  },
  {
    type: '待分类素材',
    content: '新增 6 个待分类素材',
    updatedAt: '2024-06-15 09:30',
    source: '下载完成',
    action: '去分类',
    icon: Folder,
  },
];

export const suggestions = [
  {
    title: '同步更新',
    description: '建议每天开始剪辑前先同步，获取最新素材和状态。',
    action: '立即同步',
    icon: CloudDownload,
  },
  {
    title: '分类整理',
    description: '有 26 个素材待分类，整理后更方便查找和使用。',
    action: '去分类',
    icon: FolderOpen,
  },
  {
    title: '处理不可用素材',
    description: '有 15 个不可用素材未处理，建议及时处理避免误用。',
    action: '去处理',
    icon: AlertTriangle,
  },
];

export const notifications = [
  {
    title: '管理员发布了一批素材',
    description: '包含 12 个新素材',
    time: '09:30',
  },
  {
    title: '有 3 个素材已更新为不可用',
    description: '其中 2 个已过期，1 个已下架',
    time: '09:30',
  },
  {
    title: '重点素材新增 2 个',
    description: '建议优先使用',
    time: '09:30',
  },
];

export const quickActions = [
  { label: '同步更新', icon: CloudDownload, path: '/download-ai-classify' },
  { label: '下载新素材', icon: Download, path: '/download-ai-classify' },
  { label: '打开本地素材库', icon: FolderOpen, path: '/local-library' },
  { label: '查看不可用素材', icon: AlertTriangle, path: '/unavailable-assets' },
  { label: '查看重点素材', icon: Star, path: '/important-assets' },
  { label: '标签管理', icon: Tags, path: '/settings' },
];
