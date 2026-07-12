import { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Database,
  Download,
  Info,
  Plus,
  Star,
  Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { PageHeader } from '../components/layout/PageHeader';
import {
  addedAssets,
  importantAssets,
  publishSummary,
  unavailableAssetsForPublish,
  type PublishAssetRow,
} from '../data/mockAdminPublishConfirm';

function ImpactCard() {
  return (
    <Card className="flex h-[70px] items-center justify-between">
      <div className="flex items-center gap-4">
        <Users className="h-7 w-7 text-gray-700" />
        <div>
          <p className="text-base font-semibold text-ink">
            本次更新将影响 <span className="text-brand">126</span> 位剪辑师
          </p>
          <p className="mt-1 text-sm text-gray-700">覆盖所有活跃剪辑师，预计同步完成时间：1–2 分钟</p>
        </div>
      </div>
      <Button>查看剪辑师列表</Button>
    </Card>
  );
}

function PreviewThumb() {
  return (
    <div className="grid h-7 w-12 place-items-center rounded border border-line bg-gray-100">
      <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-gray-500" />
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  tone: 'green' | 'blue' | 'amber';
}) {
  const toneClasses = {
    green: 'border-l-green-500 text-green-700',
    blue: 'border-l-brand text-brand',
    amber: 'border-l-amber-500 text-amber-700',
  };

  return (
    <div className={`flex h-11 items-center gap-3 border-l-2 px-4 ${toneClasses[tone]}`}>
      {icon}
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      {tone === 'green' ? (
        <Badge tone="green" className="h-6 rounded-md">
          新增
        </Badge>
      ) : null}
    </div>
  );
}

function AddedAssetsTable() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <SectionHeader icon={<Plus className="h-4 w-4" />} title="本次新增素材（12 个）" tone="green" />
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-y border-line">
            <th className="w-[12%] px-5 py-2 font-medium">素材预览</th>
            <th className="w-[24%] px-5 py-2 font-medium">文件名</th>
            <th className="w-[10%] px-5 py-2 font-medium">类型</th>
            <th className="w-[10%] px-5 py-2 font-medium">大小</th>
            <th className="w-[22%] px-5 py-2 font-medium">标签</th>
            <th className="w-[12%] px-5 py-2 font-medium">来源</th>
            <th className="w-[10%] px-5 py-2 font-medium">添加时间</th>
          </tr>
        </thead>
        <tbody>
          {addedAssets.map((asset) => (
            <tr key={asset.id} className="border-b border-line last:border-b-0">
              <td className="px-5 py-2"><PreviewThumb /></td>
              <td className="px-5 py-2 font-medium text-ink">{asset.name}</td>
              <td className="px-5 py-2"><Tag className="h-6">{asset.type}</Tag></td>
              <td className="px-5 py-2 text-ink">{asset.size}</td>
              <td className="px-5 py-2">
                <div className="flex flex-wrap gap-2">
                  {asset.tags?.map((tag) => <Tag key={tag} className="h-6">{tag}</Tag>)}
                </div>
              </td>
              <td className="px-5 py-2 text-ink">{asset.source}</td>
              <td className="px-5 py-2 text-ink">{asset.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter text="共 12 个新增素材" />
    </Card>
  );
}

function ImportantAssetsTable() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <SectionHeader icon={<Star className="h-4 w-4 fill-brand text-brand" />} title="本次重点素材（3 个）" tone="blue" />
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-y border-line">
            <th className="w-[12%] px-5 py-2 font-medium">素材预览</th>
            <th className="w-[24%] px-5 py-2 font-medium">文件名</th>
            <th className="w-[12%] px-5 py-2 font-medium">类型</th>
            <th className="w-[22%] px-5 py-2 font-medium">标签</th>
            <th className="w-[12%] px-5 py-2 font-medium">重点标记</th>
            <th className="w-[18%] px-5 py-2 font-medium">说明</th>
          </tr>
        </thead>
        <tbody>
          {importantAssets.map((asset) => (
            <tr key={asset.id} className="border-b border-line last:border-b-0">
              <td className="px-5 py-2"><PreviewThumb /></td>
              <td className="px-5 py-2 font-medium text-ink">{asset.name}</td>
              <td className="px-5 py-2"><Tag className="h-6">{asset.type}</Tag></td>
              <td className="px-5 py-2">
                <div className="flex flex-wrap gap-2">
                  {asset.tags?.map((tag) => <Tag key={tag} className="h-6">{tag}</Tag>)}
                </div>
              </td>
              <td className="px-5 py-2">
                <span className="inline-flex items-center gap-2 text-sm text-brand">
                  <Star className="h-4 w-4 fill-brand" />
                  重点
                </span>
              </td>
              <td className="px-5 py-2 text-ink">{asset.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter text="共 3 个重点素材" />
    </Card>
  );
}

function UnavailableAssetsTable() {
  const statusTone = {
    offline: 'amber',
    expired: 'red',
    notRecommended: 'amber',
  } as const;

  return (
    <Card className="overflow-hidden" padded={false}>
      <SectionHeader icon={<AlertTriangle className="h-4 w-4" />} title="本次不可用素材（5 个）" tone="amber" />
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-y border-line">
            <th className="w-[12%] px-5 py-2 font-medium">素材预览</th>
            <th className="w-[24%] px-5 py-2 font-medium">文件名</th>
            <th className="w-[12%] px-5 py-2 font-medium">类型</th>
            <th className="w-[12%] px-5 py-2 font-medium">当前状态</th>
            <th className="w-[22%] px-5 py-2 font-medium">原因</th>
            <th className="w-[18%] px-5 py-2 font-medium">处理建议</th>
          </tr>
        </thead>
        <tbody>
          {unavailableAssetsForPublish.map((asset) => (
            <tr key={asset.id} className="border-b border-line last:border-b-0">
              <td className="px-5 py-2"><PreviewThumb /></td>
              <td className="px-5 py-2 font-medium text-ink">{asset.name}</td>
              <td className="px-5 py-2"><Tag className="h-6">{asset.type}</Tag></td>
              <td className="px-5 py-2">
                <Badge tone={statusTone[asset.status ?? 'offline']} className="rounded-md">
                  {asset.statusLabel}
                </Badge>
              </td>
              <td className="px-5 py-2 text-ink">{asset.reason}</td>
              <td className="px-5 py-2 text-ink">{asset.suggestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter text="共 5 个不可用素材" />
    </Card>
  );
}

function TableFooter({ text }: { text: string }) {
  return (
    <div className="flex h-10 items-center justify-between border-t border-line px-5 text-sm text-gray-700">
      <span>{text}</span>
      <button type="button" className="inline-flex items-center gap-1 text-ink hover:text-brand">
        查看全部
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function SummaryCard() {
  const iconMap = {
    green: Plus,
    blue: Star,
    amber: AlertTriangle,
    gray: Users,
  };

  return (
    <Card>
      <h3 className="mb-5 text-base font-semibold text-ink">更新摘要</h3>
      <div className="space-y-6">
        {publishSummary.map((item) => {
          const Icon = iconMap[item.tone as keyof typeof iconMap];
          return (
            <div key={item.label} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-gray-50">
                  <Icon className="h-5 w-5 text-gray-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <span className="whitespace-nowrap text-base font-semibold text-ink">{item.value}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function PublishNote() {
  return (
    <Card>
      <h3 className="mb-4 text-base font-semibold text-ink">发布说明（可选）</h3>
      <textarea
        className="h-[150px] w-full resize-none rounded-md border border-line bg-white p-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-blue-100"
        placeholder="请输入本次更新说明（剪辑师端可见）..."
      />
      <div className="mt-2 text-right text-xs text-gray-500">0 / 200</div>
    </Card>
  );
}

export function AdminPublishConfirmPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section>
      {showSuccess ? (
        <div className="fixed left-1/2 top-24 z-50 flex -translate-x-1/2 items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 shadow-soft">
          <CheckCircle2 className="h-5 w-5" />
          发布成功，更新已开始同步给所有剪辑师
        </div>
      ) : null}

      <PageHeader title="发布更新确认" description="请确认本次更新内容，发布后将同步给所有剪辑师" />

      <div className="grid grid-cols-[minmax(0,1fr)_344px] gap-5">
        <div className="min-w-0 space-y-3">
          <ImpactCard />
          <AddedAssetsTable />
          <ImportantAssetsTable />
          <UnavailableAssetsTable />
        </div>

        <aside className="space-y-4">
          <SummaryCard />
          <PublishNote />
        </aside>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <Button className="min-w-[194px]" size="lg" onClick={() => navigate('/admin/material-status')}>
          上一步：选择更新内容
        </Button>
        <div className="flex items-center gap-4">
          <Button className="min-w-[112px]" size="lg" onClick={() => navigate('/admin/material-status')}>
            取消发布
          </Button>
          <Button className="min-w-[200px]" size="lg" variant="primary" onClick={() => setShowSuccess(true)}>
            确认发布更新
          </Button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-2 text-sm text-gray-700">
        <Info className="h-4 w-4" />
        <span>发布后将无法撤回，请确认信息无误</span>
      </div>
    </section>
  );
}
