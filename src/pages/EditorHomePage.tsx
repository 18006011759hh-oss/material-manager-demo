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
  const demoStats = stats.map((stat) => stat.label === '不可用素材' ? { ...stat, value: state.synced ? '1' : '0', trend: state.synced ? '刚刚同步' : '暂无待处理' } : stat);
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
            <span className="font-medium">1 条素材状态更新</span>
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
