import {
  ChevronRight,
  CircleHelp,
  FileVideo,
  Folder,
  Pause,
  Pencil,
  Play,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { PageHeader } from '../components/layout/PageHeader';
import { cn } from '../lib/cn';
import {
  aiSuggestions,
  classifySteps,
  downloadAssets,
  downloadStatusIcon,
  newFolders,
  organizeRules,
  previewFiles,
  type DownloadAsset,
} from '../data/mockDownloadAiClassify';
import { useDemoState } from '../context/DemoStateContext';

function Stepper() {
  return (
    <Card className="grid grid-cols-4 overflow-hidden p-0" padded={false}>
      {classifySteps.map((step, index) => {
        const Icon = step.icon;
        const isCurrent = step.state === 'current';
        const isDone = step.state === 'done';

        return (
          <div
            key={step.label}
            className={cn(
              'relative flex h-[68px] items-center gap-4 border-r border-line px-7 last:border-r-0',
              isCurrent && 'bg-blue-50/30',
            )}
          >
            {index < classifySteps.length - 1 ? (
              <span className="absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 rotate-45 border-r border-t border-line bg-white" />
            ) : null}
            <span
              className={cn(
                'grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-semibold',
                isDone && 'border-gray-500 bg-white text-ink',
                isCurrent && 'border-brand bg-blue-50 text-brand',
                step.state === 'upcoming' && 'border-gray-500 bg-white text-ink',
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : step.number}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{step.label}</p>
              <p className="mt-1 text-xs text-gray-600">{step.description}</p>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

function VideoThumbnail() {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded border border-line bg-gray-100">
      <Play className="h-4 w-4 fill-gray-400 text-gray-400" />
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="flex min-w-[120px] items-center gap-3">
      <div className="h-2 w-20 rounded-full bg-gray-200">
        <div className="h-2 rounded-full bg-brand" style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-gray-600">{value}%</span>
    </div>
  );
}

function DownloadStatusCell({ asset }: { asset: DownloadAsset }) {
  if (asset.status === 'downloading' && asset.progress) {
    return <ProgressBar value={asset.progress} />;
  }

  const StatusIcon = downloadStatusIcon[asset.status];
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <StatusIcon className="h-4 w-4 text-gray-600" />
      <span>等待下载</span>
    </div>
  );
}

function DownloadList() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <div className="flex h-12 items-center justify-between border-b border-line px-4">
        <h3 className="text-base font-semibold text-ink">新素材下载列表（12）</h3>
        <div className="flex items-center gap-4">
          <button type="button" className="text-sm font-medium text-brand hover:text-blue-700">
            全部开始
          </button>
          <Button size="sm" icon={<Pause className="h-4 w-4" />}>
            暂停全部
          </Button>
        </div>
      </div>

      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-b border-line">
            <th className="w-[42%] px-4 py-3 font-medium">素材信息</th>
            <th className="w-[13%] px-4 py-3 font-medium">大小</th>
            <th className="w-[13%] px-4 py-3 font-medium">来源</th>
            <th className="w-[22%] px-4 py-3 font-medium">下载状态</th>
            <th className="w-[10%] px-4 py-3 font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {downloadAssets.map((asset) => (
            <tr key={asset.id} className="border-b border-line last:border-b-0">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-line" />
                  <VideoThumbnail />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{asset.fileName}</p>
                    <p className="mt-1 text-xs text-gray-600">{asset.meta}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-ink">{asset.size}</td>
              <td className="px-4 py-3 text-ink">{asset.source}</td>
              <td className="px-4 py-3">
                <DownloadStatusCell asset={asset} />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {asset.status === 'downloading' ? (
                    <Pause className="h-4 w-4 text-gray-700" />
                  ) : (
                    <Play className="h-4 w-4 text-gray-700" />
                  )}
                  <Folder className="h-4 w-4 text-gray-700" />
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-4 py-3 text-center text-gray-600">...</td>
            <td className="px-4 py-3 text-center text-gray-600">...</td>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <div className="flex h-14 items-center justify-between border-t border-line px-4 text-sm">
        <span className="text-ink">已选择 12 个素材</span>
        <Button size="sm">重新选择</Button>
      </div>
    </Card>
  );
}

function AiSuggestionTable() {
  return (
    <Card className="overflow-hidden" padded={false}>
      <div className="flex h-12 items-center justify-between border-b border-line px-4">
        <h3 className="text-base font-semibold text-ink">AI 分类建议（基于文件内容识别）</h3>
        <button type="button" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-brand">
          <CircleHelp className="h-4 w-4" />
          <span>规则说明</span>
        </button>
      </div>

      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-b border-line">
            <th className="w-[22%] px-4 py-3 font-medium">文件名</th>
            <th className="w-[30%] px-4 py-3 font-medium">AI 识别结果（类型 / 场景 / 标签）</th>
            <th className="w-[36%] px-4 py-3 font-medium">建议移动路径（本地）</th>
            <th className="w-[12%] px-4 py-3 font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {aiSuggestions.map((suggestion) => (
            <tr key={suggestion.id} className="border-b border-line last:border-b-0">
              <td className="px-4 py-3 text-ink">{suggestion.fileName}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {suggestion.tags.map((tag) => (
                    <Badge key={tag} className="h-6 rounded-md border-gray-200 bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-ink">
                  <Folder className="h-4 w-4 shrink-0 text-gray-600" />
                  <span className="truncate">
                    {suggestion.pathParts.map((part, index) => (
                      <span key={part}>
                        {index > 0 ? <ChevronRight className="mx-1 inline h-3 w-3 text-gray-500" /> : null}
                        {part}
                      </span>
                    ))}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Button size="sm">修改</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-4 py-3 text-gray-600">...</td>
            <td className="px-4 py-3 text-center text-gray-600">...</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <div className="flex h-12 items-center justify-between border-t border-line px-4 text-sm">
        <span className="text-ink">分类置信度：平均 92%</span>
        <span className="inline-flex items-center gap-2 text-gray-700">
          如分类不准确，可手动修改
          <Pencil className="h-4 w-4" />
        </span>
      </div>
    </Card>
  );
}

function BlueTip() {
  return (
    <div className="mt-2 flex items-center gap-3 rounded-md border border-blue-100 bg-blue-50 px-4 py-3">
      <CircleHelp className="h-5 w-5 text-gray-700" />
      <div>
        <p className="text-sm font-semibold text-ink">下载完成后生成 AI 分类建议</p>
        <p className="mt-1 text-xs text-gray-700">剪辑师确认整理后，文件才会移动到对应本地文件夹。</p>
      </div>
    </div>
  );
}

function LocalPreview() {
  return (
    <Card className="mt-4 overflow-hidden" padded={false}>
      <div className="grid grid-cols-[1.2fr_1fr_1.1fr_1fr]">
        <div className="border-r border-line p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink">本地文件夹变化预览（确认后将按以下规则在本地执行）</h3>
            <button type="button" className="inline-flex items-center gap-1 text-sm text-ink hover:text-brand">
              <span>查看全部</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mb-2 text-xs font-medium text-gray-700">将更新的文件夹（4 个）</p>
          <div className="space-y-2 text-xs text-ink">
            {newFolders.map((folder) => (
              <p key={folder} className="truncate">
                <Folder className="mr-2 inline h-4 w-4 text-gray-600" />
                {folder}
              </p>
            ))}
          </div>
        </div>

        <div className="border-r border-line p-4">
          <p className="mb-4 text-xs font-medium text-gray-700">将更新的文件（6 个）</p>
          <p className="mb-4 text-xs text-gray-600">确认整理后，文件才会移动到对应目录</p>
          <div className="flex gap-2">
            {previewFiles.map((file) => (
              <div key={file.id} className="grid h-12 w-16 place-items-center rounded border border-line bg-gray-100">
                <Play className="h-4 w-4 fill-gray-300 text-gray-300" />
              </div>
            ))}
            <div className="grid h-12 w-12 place-items-center rounded border border-line bg-gray-100 text-xs text-gray-700">
              +2
            </div>
          </div>
        </div>

        <div className="border-r border-line p-4">
          <p className="mb-3 text-xs font-semibold text-ink">整理规则</p>
          <div className="space-y-2 text-xs text-ink">
            {organizeRules.map((rule) => (
              <p key={rule}>✓ {rule}</p>
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="rounded-lg border border-dashed border-gray-400 p-5">
            <h4 className="text-sm font-semibold text-ink">执行说明</h4>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              下载完成后生成 AI 分类建议，剪辑师确认整理后，文件才会移动到对应本地文件夹。
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function DownloadAiClassifyPage() {
  const navigate = useNavigate();
  const [organized, setOrganized] = useState(false);
  const { state, confirmAiClassification } = useDemoState();

  const handleOrganize = () => {
    setOrganized(true);
    confirmAiClassification();
  };

  return (
    <section>
      <PageHeader
        title="下载与 AI 分类"
        description="下载完成后生成AI分类建议，剪辑师确认整理后，文件才会移动到对应本地文件夹。"
      />

      {state.guideActive && state.guideStep === 5 ? <div className="mb-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-ink">已全选 6 个素材。AI 只提供标签、分类和路径建议；请人工确认或修改后再批量整理，系统不会自动移动或删除文件。</div> : null}

      <Stepper />

      <div className="mt-5 grid grid-cols-[45%_55%] gap-4">
        <div>
          <DownloadList />
          <BlueTip />
        </div>
        <AiSuggestionTable />
      </div>

      <LocalPreview />

      <div className="mt-4 flex items-center justify-end gap-4">
        <Button className="min-w-[172px]" size="lg">
          暂不整理，稍后处理
        </Button>
        <Button data-guide-target="5" onClick={handleOrganize} className={`min-w-[278px] scroll-mt-[128px] ${state.guideActive && state.guideStep === 5 ? 'ring-2 ring-brand ring-offset-2' : ''}`} size="lg" variant="primary" icon={<RefreshCw className="h-5 w-5" />}>
          {organized || state.classified ? '6 个素材已完成整理' : '确认并批量处理6个素材'}
        </Button>
      </div>
      <div className="mt-3 flex items-center justify-end gap-2 text-sm text-gray-700">
        <ShieldCheck className="h-4 w-4" />
        <span>移动操作安全可靠，您可以在“本地素材库”中查看整理结果</span>
      </div>
      {organized ? (
        <div role="status" className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-lg bg-ink px-5 py-4 text-sm text-white shadow-xl">
          <span>整理成功，素材已按分类建议处理</span>
          <button type="button" onClick={() => navigate('/local-library')} className="font-medium text-blue-200 hover:text-white">前往本地素材库 →</button>
        </div>
      ) : null}
    </section>
  );
}
