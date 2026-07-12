import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileImage,
  FileVideo,
  MinusCircle,
  MoreHorizontal,
  Plus,
  Search,
  Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { IconButton } from '../components/common/IconButton';
import { SelectFilter } from '../components/common/SelectFilter';
import { Tag } from '../components/common/Tag';
import { PageHeader } from '../components/layout/PageHeader';
import { cn } from '../lib/cn';
import {
  adminMaterialAssets,
  adminStatusTabs,
  publishChanges,
  statusOverview,
  type AdminAssetStatus,
  type AdminMaterialAsset,
} from '../data/mockAdminMaterialStatus';

const statusTone: Record<AdminAssetStatus, 'green' | 'amber' | 'red' | 'gray'> = {
  available: 'green',
  offline: 'amber',
  expired: 'red',
  notRecommended: 'amber',
};

function SearchFilters() {
  return (
    <div className="mb-5 flex items-center gap-4">
      <label className="relative block w-[306px]">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          className="h-10 w-full rounded-md border border-line bg-white px-10 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-blue-100"
          placeholder="搜索文件名 / 关键词 / 标签"
        />
      </label>
      <SelectFilter className="w-[118px]" options={[{ label: '全部类型', value: 'all' }]} />
      <SelectFilter className="w-[118px]" options={[{ label: '全部状态', value: 'all' }]} />
      <SelectFilter className="w-[130px]" options={[{ label: '全部标签', value: 'all' }]} />
      <Button className="w-40 justify-between" icon={<Calendar className="h-4 w-4" />}>
        创建时间
      </Button>
      <Button className="w-20">重置</Button>
    </div>
  );
}

function StatusTabs() {
  return (
    <div className="mb-5 flex border-b border-line">
      {adminStatusTabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={cn(
            'relative h-11 px-4 text-sm font-medium text-gray-700',
            tab.value === 'all' && 'text-brand',
          )}
        >
          {tab.label}
          {tab.value === 'all' ? <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-brand" /> : null}
        </button>
      ))}
    </div>
  );
}

function BatchActions() {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="mr-3 text-sm text-gray-700">已选择 0 项</span>
      {['批量设为可用', '批量设为重点', '批量下架', '批量标记过期', '批量不推荐'].map((label) => (
        <Button key={label} className="min-w-[124px] text-gray-400" disabled>
          {label}
        </Button>
      ))}
      <Button className="min-w-[112px] text-gray-500" disabled>
        更多操作
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
}

function VideoThumb() {
  return (
    <div className="grid h-11 w-[60px] shrink-0 place-items-center rounded border border-line bg-gray-100">
      <span className="h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-gray-500" />
    </div>
  );
}

function AssetType({ type }: { type: AdminMaterialAsset['type'] }) {
  const Icon = type === '视频' ? FileVideo : FileImage;
  return (
    <span className="inline-flex items-center gap-2 text-sm text-ink">
      <Icon className="h-4 w-4 text-gray-600" />
      {type}
    </span>
  );
}

function AssetRow({ asset }: { asset: AdminMaterialAsset }) {
  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="px-4 py-3">
        <input type="checkbox" className="h-4 w-4 rounded border-line" aria-label={`选择 ${asset.name}`} />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <VideoThumb />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">{asset.name}</p>
            <p className="mt-1 text-xs text-gray-600">{asset.meta}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <AssetType type={asset.type} />
      </td>
      <td className="px-4 py-3">
        <Badge tone={statusTone[asset.status]} className="rounded-md">
          {asset.statusLabel}
        </Badge>
      </td>
      <td className="px-4 py-3">
        <span className="inline-flex items-center gap-2 text-sm text-ink">
          <Star className={cn('h-5 w-5', asset.important ? 'fill-brand text-brand' : 'text-gray-600')} />
          {asset.important ? '重点' : '非重点'}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {asset.tags.map((tag) => (
            <Tag key={tag} className="h-7">
              {tag}
            </Tag>
          ))}
        </div>
      </td>
      <td className="whitespace-pre-line px-4 py-3 text-sm leading-6 text-ink">{asset.createdAt}</td>
      <td className="px-4 py-3">
        <IconButton icon={<MoreHorizontal className="h-4 w-4" />} label="更多操作" className="h-8 w-8 border border-line" />
      </td>
    </tr>
  );
}

function MaterialsTable() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-white text-gray-700">
          <tr className="border-b border-line">
            <th className="w-[4%] px-4 py-3 font-medium" />
            <th className="w-[30%] px-4 py-3 font-medium">素材信息</th>
            <th className="w-[9%] px-4 py-3 font-medium">类型</th>
            <th className="w-[10%] px-4 py-3 font-medium">状态</th>
            <th className="w-[11%] px-4 py-3 font-medium">重点标记</th>
            <th className="w-[20%] px-4 py-3 font-medium">标签</th>
            <th className="w-[11%] px-4 py-3 font-medium">创建时间</th>
            <th className="w-[5%] px-4 py-3 font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {adminMaterialAssets.map((asset) => (
            <AssetRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
      <div className="flex h-14 items-center justify-between border-t border-line px-4 text-sm text-gray-700">
        <span>共 2,568 条</span>
        <div className="flex items-center gap-2">
          <IconButton icon={<ChevronLeft className="h-4 w-4" />} label="上一页" className="h-8 w-8" />
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              type="button"
              className={cn(
                'grid h-8 min-w-8 place-items-center rounded-md border px-2',
                page === 1 ? 'border-brand bg-blue-50 text-brand' : 'border-line bg-white text-gray-700',
              )}
            >
              {page}
            </button>
          ))}
          <span className="px-1">...</span>
          <button type="button" className="grid h-8 min-w-8 place-items-center rounded-md border border-line bg-white px-2">
            86
          </button>
          <IconButton icon={<ChevronRight className="h-4 w-4" />} label="下一页" className="h-8 w-8" />
        </div>
        <SelectFilter className="h-9 w-[100px]" options={[{ label: '30 条/页', value: '30' }]} />
      </div>
    </Card>
  );
}

function StatusOverviewCard() {
  return (
    <Card>
      <h3 className="mb-4 text-base font-semibold text-ink">状态概览</h3>
      <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#22c55e_0_81.8%,#f97316_81.8%_85.1%,#f87171_85.1%_87.9%,#facc15_87.9%_93.8%,#d4d4d4_93.8%_100%)]">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center">
          <span className="text-xl font-semibold leading-tight text-ink">2,568<br /><span className="text-xs font-normal">总素材</span></span>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {statusOverview.map((item) => (
          <div key={item.label} className="grid grid-cols-[1fr_auto] items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 text-ink">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
            <span className="text-gray-700">
              {item.value}（{item.percent}）
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function QuickActionCard() {
  const actions = [
    { label: '上传新素材', icon: Plus },
    { label: '设为重点素材', icon: Star },
    { label: '下架素材', icon: Download },
    { label: '标记过期', icon: Calendar },
    { label: '标记不推荐', icon: MinusCircle },
  ];

  return (
    <Card>
      <h3 className="mb-4 text-base font-semibold text-ink">快速操作</h3>
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button key={action.label} className="w-full justify-start" icon={<Icon className="h-4 w-4" />}>
              {action.label}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

function ExplainCard() {
  return (
    <Card>
      <h3 className="mb-4 text-base font-semibold text-ink">说明</h3>
      <ul className="space-y-2 text-sm leading-6 text-ink">
        <li>· 修改状态后需点击“发布更新”才会同步到剪辑师端</li>
        <li>· 下架：对剪辑师隐藏，不可下载</li>
        <li>· 过期：提示过期，不可下载</li>
        <li>· 不推荐：仍可用，但不在推荐列表显示</li>
        <li>· 重点素材会在剪辑师首页优先展示</li>
      </ul>
    </Card>
  );
}

function PendingChanges() {
  const iconMap = {
    download: Download,
    star: Star,
    offline: Download,
    expired: Calendar,
    notRecommended: MinusCircle,
  };

  return (
    <Card className="mt-4 flex h-[92px] items-center justify-between">
      <div>
        <h3 className="mb-5 text-base font-semibold text-ink">变更记录（待发布）</h3>
        <div className="flex items-center gap-9">
          {publishChanges.map((change) => {
            const Icon = iconMap[change.icon as keyof typeof iconMap];
            return (
              <div key={change.label} className="flex items-center gap-3 border-r border-line pr-9 last:border-r-0">
                <Icon className="h-6 w-6 text-gray-700" />
                <div className="text-sm">
                  <p className="text-ink">{change.label}</p>
                  <p className="mt-1 text-ink">{change.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="self-start text-right text-sm text-ink">
        <p>共 8 项变更</p>
        <button type="button" className="mt-7 inline-flex items-center gap-2 text-brand">
          查看详情
          <span>→</span>
        </button>
      </div>
    </Card>
  );
}

export function AdminMaterialStatusPage() {
  const navigate = useNavigate();

  return (
    <section>
      <PageHeader
        title="素材状态管理"
        description="管理素材状态、重点标记及可用性，修改后需发布更新，剪辑师端才会生效"
        actions={
          <Button
            className="h-11 min-w-[208px]"
            variant="primary"
            onClick={() => navigate('/admin/publish-confirm')}
          >
            发布更新（8 项变更）
          </Button>
        }
      />

      <div className="grid grid-cols-[minmax(0,1fr)_244px] gap-8">
        <div className="min-w-0">
          <SearchFilters />
          <StatusTabs />
          <BatchActions />
          <MaterialsTable />
          <PendingChanges />
        </div>

        <aside className="space-y-4">
          <StatusOverviewCard />
          <QuickActionCard />
          <ExplainCard />
        </aside>
      </div>
    </section>
  );
}
