import { Card } from '../components/common/Card';
import { NotificationPanel } from '../components/dashboard/NotificationPanel';
import { QuickActionPanel } from '../components/dashboard/QuickActionPanel';
import { RecentUpdateTable } from '../components/dashboard/RecentUpdateTable';
import { StatCard } from '../components/dashboard/StatCard';
import { SuggestionCard } from '../components/dashboard/SuggestionCard';
import { UploadDropzone } from '../components/dashboard/UploadDropzone';
import { PageHeader } from '../components/layout/PageHeader';
import {
  notifications,
  quickActions,
  recentUpdates,
  stats,
  suggestions,
} from '../data/mockDashboard';
import { useDemoState } from '../context/DemoStateContext';
import { AlertTriangle } from 'lucide-react';

export function EditorHomePage() {
  const { state } = useDemoState();
  const demoStats = stats.map((stat) => {
    if (!state.synced) return ['今日新增素材', '重点素材', '不可用素材', '待分类素材'].includes(stat.label) ? { ...stat, value: '0', trend: '等待同步' } : stat;
    const values: Record<string, string> = { 今日新增素材: '10', 重点素材: '3', 不可用素材: '4', 待分类素材: '6' };
    return values[stat.label] ? { ...stat, value: values[stat.label], trend: '刚刚同步' } : stat;
  });
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_318px] gap-6">
      <section className="min-w-0">
        <PageHeader
          title={
            <>
              欢迎回来，剪辑师小A <span aria-hidden="true">👋</span>
            </>
          }
          description="同步云端更新，管理本地素材，让剪辑更高效"
        />

        {state.published && !state.synced ? (
          <div className="mb-5 flex items-center gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-medium">10 条素材更新待同步</span>
            <span>请点击顶部“同步更新”获取最新状态</span>
          </div>
        ) : null}

        <div className="grid grid-cols-5 gap-4">
          {demoStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-7">
          <RecentUpdateTable updates={recentUpdates} />
        </div>

        <Card className="mt-7">
          <h3 className="mb-4 text-base font-semibold text-ink">工作建议</h3>
          <div className="grid grid-cols-3 gap-6">
            {suggestions.map((suggestion) => (
              <SuggestionCard key={suggestion.title} {...suggestion} />
            ))}
          </div>
        </Card>
      </section>

      <aside className="space-y-5">
        <NotificationPanel notifications={notifications} />
        <QuickActionPanel actions={quickActions} />
        <UploadDropzone />
      </aside>
    </div>
  );
}
