import type { LucideIcon } from 'lucide-react';

export type UnavailableStatus = 'expired' | 'offline' | 'notRecommended';

export interface UnavailableAsset {
  id: string;
  fileName: string;
  meta: string;
  status: UnavailableStatus;
  statusLabel: string;
  originalPath: string;
  reason: string;
  note: string;
  suggestion: string;
}

export interface UnavailableStat {
  label: string;
  value: string;
  unit: string;
  icon: LucideIcon;
}

export const unavailableAssets: UnavailableAsset[] = [
  {
    id: 'M088',
    fileName: 'M088_7月促销口播.mp4',
    meta: '128.6 MB · MP4 · 1920×1080',
    status: 'expired',
    statusLabel: '已过期',
    originalPath: 'D:\\短视频素材库\\促销活动\\7月活动\\M088_7月促销口播.mp4',
    reason: '7月促销活动已结束',
    note: '已于昨天过期',
    suggestion: '移动到 不可用素材\\已过期',
  },
  {
    id: 'M056',
    fileName: 'M056_旧款粉底测评.mp4',
    meta: '96.3 MB · MP4 · 1920×1080',
    status: 'offline',
    statusLabel: '已下架',
    originalPath: 'D:\\短视频素材库\\美妆测评\\粉底类\\M056_旧款粉底测评.mp4',
    reason: '商品已下架',
    note: '昨天已下架',
    suggestion: '移动到 不可用素材\\已下架',
  },
  {
    id: 'M061',
    fileName: 'M061_赠品展示（活动版）.mp4',
    meta: '152.5 MB · MP4 · 1920×1080',
    status: 'notRecommended',
    statusLabel: '不推荐',
    originalPath: 'D:\\短视频素材库\\赠品素材\\活动赠品\\M061_赠品展示.mp4',
    reason: '赠品不再推荐使用',
    note: '备注：已更换新赠品',
    suggestion: '移动到 不可用素材\\不推荐使用',
  },
  {
    id: 'M039',
    fileName: 'M039_旧包装产品展示.mp4',
    meta: '88.1 MB · MP4 · 1920×1080',
    status: 'offline',
    statusLabel: '已下架',
    originalPath: 'D:\\短视频素材库\\产品展示\\旧包装\\M039_旧包装.mp4',
    reason: '旧包装已停用',
    note: '3 周前下架',
    suggestion: '移动到 不可用素材\\已下架',
  },
  {
    id: 'M072',
    fileName: 'M072_节日祝福片头.mp4',
    meta: '45.7 MB · MP4 · 1920×1080',
    status: 'expired',
    statusLabel: '已过期',
    originalPath: 'D:\\短视频素材库\\节日素材\\春节\\M072_节日祝福片头.mp4',
    reason: '春节活动已结束',
    note: '4 个月前过期',
    suggestion: '移动到 不可用素材\\已过期',
  },
];

export const unavailableTabs = [
  { label: '全部（19）', value: 'all' },
  { label: '已过期（8）', value: 'expired' },
  { label: '已下架（6）', value: 'offline' },
  { label: '不推荐使用（5）', value: 'notRecommended' },
];
