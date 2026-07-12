import {
  ArrowDownCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Folder,
  Info,
  List,
  MinusCircle,
  MoreHorizontal,
  Play,
  Search,
  SlidersHorizontal,
  TableCellsSplit,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { IconButton } from '../components/common/IconButton';
import { Tabs } from '../components/common/Tabs';
import { PageHeader } from '../components/layout/PageHeader';
import {
  unavailableAssets,
  unavailableTabs,
  type UnavailableAsset,
  type UnavailableStatus,
} from '../data/mockUnavailableAssets';

const summaryStats: Array<{ label: string; value: string; unit: string; icon: LucideIcon }> = [
  { label: '已过期', value: '8', unit: '个素材', icon: Clock },
  { label: '已下架', value: '6', unit: '个素材', icon: ArrowDownCircle },
  { label: '不推荐使用', value: '5', unit: '个素材', icon: MinusCircle },
];

const statusTone: Record<UnavailableStatus, 'red' | 'amber' | 'blue'> = {
  expired: 'red',
  offline: 'amber',
  notRecommended: 'blue',
};

function SummaryStatCard({ label, value, unit, icon: Icon }: (typeof summaryStats)[number]) {
  return (
    <Card className="flex h-[114px] items-center gap-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white">
        <Icon className="h-6 w-6 text-ink" />
      </span>
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <div className="mt-4 flex items-end gap-3">
          <span className="text-4xl font-semibold leading-none text-ink">{value}</span>
          <span className="pb-1 text-sm text-ink">{unit}</span>
        </div>
      </div>
    </Card>
  );
}

function AssetThumbnail() {
  return (
    <div className="grid h-14 w-[62px] shrink-0 place-items-center rounded border border-gray-300 bg-gray-100">
      <Play className="h-5 w-5 fill-gray-400 text-gray-400" />
    </div>
  );
}

function AssetInfo({ asset }: { asset: UnavailableAsset }) {
  return (
    <div className="flex min-w-[260px] items-center gap-3">
      <input type="checkbox" aria-label={`选择 ${asset.fileName}`} className="h-4 w-4 rounded border-line" />
      <AssetThumbnail />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink">{asset.fileName}</p>
        <p className="mt-1 text-xs text-gray-600">{asset.meta}</p>
      </div>
    </div>
  );
}

function SuggestionCell({ suggestion }: { suggestion: string }) {
  const [title, folder] = suggestion.split(' ');

  return (
    <div className="flex min-w-[185px] items-start gap-2 text-sm">
      <Folder className="mt-0.5 h-4 w-4 shrink-0 text-gray-600" />
      <div>
        <p className="font-medium text-ink">{title}</p>
        <p className="mt-1 text-gray-700">{folder}</p>
      </div>
    </div>
  );
}

function AssetActions() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">移动</Button>
      <Button size="sm">暂不处理</Button>
      <Button size="sm">移至回收站</Button>
      <IconButton icon={<MoreHorizontal className="h-4 w-4" />} label="更多操作" className="h-8 w-8" />
    </div>
  );
}

export function UnavailableAssetsPage() {
  return (
    <section>
      <PageHeader
        title="不可用素材提醒"
        description="以下素材已过期、已下架或不推荐使用，建议处理后避免误用"
      />

      <div className="grid grid-cols-[minmax(0,1fr)_398px] gap-11">
        <div className="grid grid-cols-3 gap-7">
          {summaryStats.map((stat) => (
            <SummaryStatCard key={stat.label} {...stat} />
          ))}
        </div>

        <Card className="h-[156px]">
          <h3 className="text-sm font-semibold text-ink">说明</h3>
          <ul className="mt-4 space-y-2 text-sm leading-5 text-ink">
            <li>· 这些素材在云端已被标记为不可用</li>
            <li>· 建议移动到“不可用素材”文件夹统一管理</li>
            <li>· 不会删除原文件，可随时恢复</li>
            <li>· 如不确定可先“暂不处理”</li>
          </ul>
        </Card>
      </div>

      <div className="mt-5">
        <Tabs tabs={unavailableTabs} active="all" variant="underline" />
      </div>

      <div className="flex h-[66px] items-center justify-between gap-4 border-b border-line">
        <div className="flex items-center gap-5 text-sm text-gray-700">
          <label className="inline-flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 rounded border-line" />
            <span>全选</span>
          </label>
          <span className="h-5 w-px bg-line" />
          <span>已选择 0 个素材</span>
        </div>

        <div className="flex items-center gap-3">
          <Button size="md" icon={<SlidersHorizontal className="h-4 w-4" />}>
            按更新时间
          </Button>
          <label className="relative block w-[302px]">
            <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              className="h-10 w-full rounded-md border border-line bg-white pl-4 pr-10 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
              placeholder="搜索文件名 / 备注"
            />
          </label>
          <div className="flex overflow-hidden rounded-md border border-line">
            <IconButton icon={<List className="h-4 w-4" />} label="列表视图" className="h-10 w-10 rounded-none bg-gray-50" />
            <IconButton icon={<TableCellsSplit className="h-4 w-4" />} label="网格视图" className="h-10 w-10 rounded-none border-l border-line" />
          </div>
        </div>
      </div>

      <Card className="mt-0 overflow-hidden" padded={false}>
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <thead className="bg-white text-gray-700">
            <tr className="border-b border-line">
              <th className="w-[25%] px-5 py-4 font-medium">素材信息</th>
              <th className="w-[8%] px-5 py-4 font-medium">状态</th>
              <th className="w-[18%] px-5 py-4 font-medium">原路径（当前位置）</th>
              <th className="w-[15%] px-5 py-4 font-medium">原因 / 备注</th>
              <th className="w-[15%] px-5 py-4 font-medium">建议处理方式</th>
              <th className="w-[19%] px-5 py-4 font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {unavailableAssets.map((asset) => (
              <tr key={asset.id} className="border-b border-line last:border-b-0">
                <td className="px-5 py-4">
                  <AssetInfo asset={asset} />
                </td>
                <td className="px-5 py-4">
                  <Badge tone={statusTone[asset.status]} className="rounded-md">
                    {asset.statusLabel}
                  </Badge>
                </td>
                <td className="px-5 py-4">
                  <p className="line-clamp-2 text-sm leading-6 text-ink">{asset.originalPath}</p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-ink">{asset.reason}</p>
                  <p className="mt-2 text-sm text-gray-700">{asset.note}</p>
                </td>
                <td className="px-5 py-4">
                  <SuggestionCell suggestion={asset.suggestion} />
                </td>
                <td className="px-5 py-4">
                  <AssetActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex h-14 items-center justify-between border-t border-line px-5 text-sm text-gray-700">
          <span>共 19 条</span>
          <div className="flex items-center gap-2">
            <Button size="sm" icon={<ChevronLeft className="h-4 w-4" />}>
              上一页
            </Button>
            <button type="button" className="grid h-8 min-w-8 place-items-center rounded-md border border-brand bg-blue-50 px-3 text-brand">
              1
            </button>
            <button type="button" className="grid h-8 min-w-8 place-items-center rounded-md border border-line bg-white px-3">
              2
            </button>
            <Button size="sm" icon={<ChevronRight className="h-4 w-4" />}>
              下一页
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <select className="h-9 rounded-md border border-line bg-white px-3 outline-none">
              <option>10 条/页</option>
            </select>
            <span>跳至</span>
            <input className="h-9 w-16 rounded-md border border-line bg-white px-2 text-center outline-none" />
            <span>页</span>
          </div>
        </div>
      </Card>

      <Card className="mt-5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line">
            <Info className="h-5 w-5 text-ink" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">温馨提示</p>
            <p className="mt-1 text-sm text-gray-700">
              移动操作不会删除原文件，仅改变文件位置。您可以在“不可用素材”文件夹中查看和恢复。
            </p>
          </div>
        </div>
        <Button icon={<Folder className="h-4 w-4" />}>打开不可用素材文件夹</Button>
      </Card>
    </section>
  );
}
