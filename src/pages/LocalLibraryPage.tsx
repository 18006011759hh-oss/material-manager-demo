import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Folder,
  FolderOpen,
  Info,
  LayoutGrid,
  List,
  MoreVertical,
  Play,
  RefreshCw,
  Search,
  Volume2,
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { IconButton } from '../components/common/IconButton';
import { SearchInput } from '../components/common/SearchInput';
import { SelectFilter } from '../components/common/SelectFilter';
import { Tag } from '../components/common/Tag';
import { PageHeader } from '../components/layout/PageHeader';
import { cn } from '../lib/cn';
import { useDemoState } from '../context/DemoStateContext';
import {
  categoryTree,
  filterOptions,
  libraryAssets,
  previewAsset,
  type CategoryNode,
  type LibraryAsset,
  type LibraryStatus,
} from '../data/mockLocalLibrary';

const statusTone: Record<LibraryStatus, 'green' | 'blue' | 'amber' | 'gray'> = {
  available: 'green',
  important: 'blue',
  notRecommended: 'amber',
  offline: 'gray',
};

function CategoryTreeNode({ node, level = 0 }: { node: CategoryNode; level?: number }) {
  const hasChildren = Boolean(node.children?.length);

  return (
    <div>
      <div
        className="flex h-7 items-center gap-2 text-sm text-ink"
        style={{ paddingLeft: `${level * 18}px` }}
      >
        {hasChildren ? <ChevronDown className="h-4 w-4 shrink-0" /> : <span className="w-4 shrink-0" />}
        <Folder className="h-4 w-4 shrink-0 text-gray-600" />
        <span className="truncate">{node.name}</span>
      </div>
      {node.children ? (
        <div className="space-y-1">
          {node.children.map((child) => (
            <CategoryTreeNode key={`${node.name}-${child.name}`} node={child} level={level + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CategoryPanel() {
  const { state } = useDemoState();
  return (
    <Card className="overflow-hidden" padded={false}>
      <div className="flex h-12 items-center justify-between border-b border-line px-4">
        <h3 className="text-sm font-semibold text-ink">分类目录</h3>
        <RefreshCw className="h-4 w-4 text-gray-700" />
      </div>
      <div className="h-[620px] overflow-auto px-3 py-3">
        {categoryTree.map((node) => (
          <CategoryTreeNode key={node.name} node={node} />
        ))}
        {state.moved ? (
          <div className="mt-2 space-y-1 border-t border-line pt-2 text-sm text-ink">
            <p className="flex items-center gap-2"><ChevronDown className="h-4 w-4" /><Folder className="h-4 w-4 text-gray-600" />不可用素材</p>
            <p className="flex items-center gap-2 pl-6"><Folder className="h-4 w-4 text-gray-600" />已过期</p>
          </div>
        ) : null}
      </div>
      <div className="border-t border-line px-4 py-3 text-sm text-ink">共 82 个文件夹</div>
    </Card>
  );
}

function AssetThumbnail() {
  return (
    <div className="grid h-12 w-[72px] shrink-0 place-items-center rounded border border-line bg-gray-100">
      <Play className="h-5 w-5 fill-gray-500 text-gray-500" />
    </div>
  );
}

function AssetRow({ asset }: { asset: LibraryAsset }) {
  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="px-3 py-3">
        <input type="checkbox" className="h-4 w-4 rounded border-line" aria-label={`选择 ${asset.fileName}`} />
      </td>
      <td className="px-3 py-3">
        <p className="line-clamp-2 text-sm font-medium leading-5 text-ink">{asset.fileName}</p>
      </td>
      <td className="px-3 py-3">
        <AssetThumbnail />
      </td>
      <td className="px-3 py-3">
        <p className="text-sm text-ink">{asset.type}</p>
        <Tag className="mt-1 h-6">{asset.previewTag}</Tag>
      </td>
      <td className="px-3 py-3">
        <Badge tone={statusTone[asset.status]} className="rounded-md">
          {asset.statusLabel}
        </Badge>
      </td>
      <td className="px-3 py-3 text-sm text-ink">{asset.duration}</td>
      <td className="px-3 py-3 text-sm text-ink">{asset.size}</td>
      <td className="px-3 py-3">
        <p className="line-clamp-2 text-sm leading-6 text-ink">{asset.localPath}</p>
      </td>
      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <FolderOpen className="h-4 w-4 text-gray-700" />
          <MoreVertical className="h-4 w-4 text-gray-700" />
        </div>
      </td>
    </tr>
  );
}

function AssetListPanel() {
  const { state } = useDemoState();
  const movedAsset: LibraryAsset = {
    id: 'M088', fileName: 'M088_7月促销口播.mp4', previewTag: '已过期', type: '活动素材', category: '已过期',
    status: 'offline', statusLabel: '已处理', duration: '00:15', size: '128.6 MB',
    localPath: 'D:\\短视频素材库\\不可用素材\\已过期\\M088_7月促销口播.mp4', resolution: '1920 × 1080', frameRate: '25fps', createdAt: '刚刚',
  };
  const assets = state.moved ? [movedAsset, ...libraryAssets] : libraryAssets;
  return (
    <Card className="overflow-hidden" padded={false}>
      <div className="flex h-12 items-center justify-between border-b border-line px-4">
        <h3 className="text-base font-semibold text-ink">素材列表（共 2568 个素材）</h3>
      </div>
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-b border-line">
            <th className="w-[4%] px-3 py-3 font-medium" />
            <th className="w-[16%] px-3 py-3 font-medium">文件名</th>
            <th className="w-[12%] px-3 py-3 font-medium">预览</th>
            <th className="w-[12%] px-3 py-3 font-medium">类型</th>
            <th className="w-[10%] px-3 py-3 font-medium">状态</th>
            <th className="w-[8%] px-3 py-3 font-medium">时长</th>
            <th className="w-[10%] px-3 py-3 font-medium">大小</th>
            <th className="w-[21%] px-3 py-3 font-medium">本地路径</th>
            <th className="w-[7%] px-3 py-3 font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <AssetRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
      <div className="flex h-14 items-center justify-between border-t border-line px-4 text-sm text-gray-700">
        <span>共 2568 个素材</span>
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
        <div className="flex items-center gap-3">
          <SelectFilter className="h-9" options={[{ label: '30 条/页', value: '30' }]} />
          <span>跳至</span>
          <input className="h-9 w-12 rounded-md border border-line bg-white px-2 text-center outline-none" defaultValue="1" />
          <span>页</span>
        </div>
      </div>
    </Card>
  );
}

function PreviewVideo() {
  return (
    <div>
      <div className="grid aspect-video w-full place-items-center rounded-md border border-line bg-gray-100">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-gray-500 bg-white/70">
          <Play className="h-5 w-5 fill-gray-600 text-gray-600" />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-gray-600" />
        <div className="h-1 flex-1 rounded-full bg-gray-300" />
        <span className="text-xs text-gray-700">00:00 / 00:15</span>
        <Volume2 className="h-4 w-4 text-gray-700" />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[70px_1fr] gap-2 text-sm leading-6">
      <span className="text-gray-700">{label}：</span>
      <span className="min-w-0 break-words text-ink">{value}</span>
    </div>
  );
}

function PreviewPanel() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <div className="border-b border-line p-4">
        <h3 className="mb-4 text-base font-semibold text-ink">素材预览</h3>
        <PreviewVideo />
      </div>
      <div className="border-b border-line p-4">
        <h3 className="mb-4 text-base font-semibold text-ink">素材信息</h3>
        <div className="space-y-2">
          <InfoRow label="文件名" value={previewAsset.fileName} />
          <InfoRow label="类型" value={`${previewAsset.type} / ${previewAsset.previewTag}`} />
          <div className="grid grid-cols-[70px_1fr] gap-2 text-sm leading-6">
            <span className="text-gray-700">状态：</span>
            <Badge tone="green" className="h-6 w-fit rounded-md">
              可用
            </Badge>
          </div>
          <InfoRow label="时长" value={previewAsset.duration} />
          <InfoRow label="大小" value={previewAsset.size} />
          <InfoRow label="分辨率" value={previewAsset.resolution} />
          <InfoRow label="帧率" value={previewAsset.frameRate} />
          <InfoRow label="创建时间" value={previewAsset.createdAt} />
          <InfoRow label="本地路径" value={previewAsset.localPath} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 text-base font-semibold text-ink">快捷操作</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button size="sm" icon={<FolderOpen className="h-4 w-4" />}>
            打开文件夹
          </Button>
          <Button size="sm" icon={<Copy className="h-4 w-4" />}>
            复制路径
          </Button>
        </div>
        <Button className="mt-3 w-full">在资源管理器中定位</Button>
      </div>
    </Card>
  );
}

function FilterToolbar() {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <SearchInput className="w-[372px]" placeholder="搜索文件名 / 关键词 / 标签" />
      <div className="flex items-center gap-3">
        <SelectFilter className="w-32" options={filterOptions.status} />
        <SelectFilter className="w-32" options={filterOptions.type} />
        <SelectFilter className="w-32" options={filterOptions.tag} />
        <SelectFilter className="w-32" options={filterOptions.time} />
        <div className="flex overflow-hidden rounded-md border border-line bg-white">
          <IconButton icon={<List className="h-4 w-4" />} label="列表视图" className="h-10 w-10 rounded-none bg-gray-50" />
          <IconButton icon={<LayoutGrid className="h-4 w-4" />} label="网格视图" className="h-10 w-10 rounded-none border-l border-line" />
        </div>
      </div>
    </div>
  );
}

export function LocalLibraryPage() {
  return (
    <section>
      <PageHeader
        title="本地素材库"
        description="管理和查找本地已整理的素材，支持快速预览和打开"
        actions={
          <Button icon={<FolderOpen className="h-4 w-4" />}>
            打开本地文件夹
          </Button>
        }
      />
      <FilterToolbar />
      <div className="grid grid-cols-[220px_minmax(0,1fr)_252px] gap-3">
        <CategoryPanel />
        <AssetListPanel />
        <PreviewPanel />
      </div>
      <Card className="mt-4 flex h-12 items-center justify-between px-4 py-0">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <Info className="h-5 w-5 text-ink" />
          <span>提示：将素材直接拖拽到 PR / AE / 剪映 等剪辑软件时间线，即可快速使用（支持从本地素材库拖拽）</span>
        </div>
        <Button size="sm">查看支持的软件</Button>
      </Card>
    </section>
  );
}
