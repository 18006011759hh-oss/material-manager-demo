import type { LucideIcon } from 'lucide-react';
import { Check, Circle, Folder, LoaderCircle } from 'lucide-react';

export type DownloadStatus = 'downloading' | 'waiting';

export interface DownloadAsset {
  id: string;
  fileName: string;
  meta: string;
  size: string;
  source: string;
  status: DownloadStatus;
  progress?: number;
}

export interface AiSuggestion {
  id: string;
  fileName: string;
  tags: string[];
  pathParts: string[];
}

export interface StepItem {
  label: string;
  description: string;
  state: 'done' | 'current' | 'upcoming';
  number?: string;
  icon?: LucideIcon;
}

export const classifySteps: StepItem[] = [
  {
    label: '选择新素材',
    description: '已选择 12 个素材',
    state: 'done',
    icon: Check,
  },
  {
    label: '下载素材',
    description: '正在下载（6/12）',
    state: 'current',
    number: '2',
  },
  {
    label: 'AI 分类建议',
    description: '分析完成，待确认',
    state: 'upcoming',
    number: '3',
  },
  {
    label: '确认整理',
    description: '将移动到本地文件夹',
    state: 'upcoming',
    number: '4',
  },
];

export const downloadAssets: DownloadAsset[] = [
  {
    id: 'N001',
    fileName: 'N001_夏日促销口播.mp4',
    meta: '1920×1080 · 00:15',
    size: '128.6 MB',
    source: '运营上传',
    status: 'downloading',
    progress: 92,
  },
  {
    id: 'N002',
    fileName: 'N002_新品功能展示.mp4',
    meta: '1920×1080 · 00:18',
    size: '96.3 MB',
    source: '素材网站',
    status: 'downloading',
    progress: 65,
  },
  {
    id: 'N003',
    fileName: 'N003_零食测评短视频.mp4',
    meta: '1080×1920 · 00:20',
    size: '152.7 MB',
    source: '运营上传',
    status: 'downloading',
    progress: 45,
  },
  {
    id: 'N004',
    fileName: 'N004_节日氛围视频.mp4',
    meta: '1920×1080 · 00:12',
    size: '82.1 MB',
    source: '素材网站',
    status: 'waiting',
  },
  {
    id: 'N005',
    fileName: 'N005_产品使用教程.mp4',
    meta: '1920×1080 · 00:25',
    size: '210.4 MB',
    source: '运营上传',
    status: 'waiting',
  },
  {
    id: 'N006',
    fileName: 'N006_搞笑片段合集.mp4',
    meta: '1080×1920 · 00:30',
    size: '185.6 MB',
    source: '素材网站',
    status: 'waiting',
  },
];

export const aiSuggestions: AiSuggestion[] = [
  {
    id: 'N001',
    fileName: 'N001_夏日促销口播.mp4',
    tags: ['口播', '促销', '夏日', '活动'],
    pathParts: ['促销活动', '2024_07夏日促销'],
  },
  {
    id: 'N002',
    fileName: 'N002_新品功能展示.mp4',
    tags: ['产品展示', '功能', '科技'],
    pathParts: ['产品素材', '功能展示', '新品功能'],
  },
  {
    id: 'N003',
    fileName: 'N003_零食测评短视频.mp4',
    tags: ['测评', '美食', '零食', '口播'],
    pathParts: ['测评素材', '零食测评'],
  },
  {
    id: 'N004',
    fileName: 'N004_节日氛围视频.mp4',
    tags: ['节日', '氛围', '通用'],
    pathParts: ['通用素材', '节日氛围', '2024_端午'],
  },
  {
    id: 'N005',
    fileName: 'N005_产品使用教程.mp4',
    tags: ['教程', '使用说明', '产品'],
    pathParts: ['教程素材', '产品教程'],
  },
  {
    id: 'N006',
    fileName: 'N006_搞笑片段合集.mp4',
    tags: ['搞笑', '娱乐', '合集'],
    pathParts: ['娱乐素材', '搞笑合集'],
  },
];

export const newFolders = [
  'D:\\短视频素材库\\口播素材\\促销活动\\2024_07夏日促销',
  'D:\\短视频素材库\\产品素材\\功能展示\\新品功能',
  'D:\\短视频素材库\\测评素材\\零食测评',
  'D:\\短视频素材库\\通用素材\\节日氛围\\2024_端午',
];

export const previewFiles = [
  { id: 'P001', icon: Folder },
  { id: 'P002', icon: Folder },
  { id: 'P003', icon: Folder },
  { id: 'P004', icon: Folder },
];

export const organizeRules = [
  '保持原文件名不变',
  '若目标文件夹不存在，则自动创建',
  '不删除原文件，仅移动到新位置',
  '如遇重名，将自动在文件名后加（1）',
];

export const downloadStatusIcon: Record<DownloadStatus, LucideIcon> = {
  downloading: LoaderCircle,
  waiting: Circle,
};
