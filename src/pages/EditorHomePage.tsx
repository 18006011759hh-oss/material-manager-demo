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

export function EditorHomePage() {
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

        <div className="grid grid-cols-5 gap-4">
          {stats.map((stat) => (
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
