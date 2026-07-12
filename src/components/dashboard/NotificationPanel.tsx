import { ChevronRight } from 'lucide-react';
import { Card } from '../common/Card';

interface Notification {
  title: string;
  description: string;
  time: string;
}

interface NotificationPanelProps {
  notifications: Notification[];
}

export function NotificationPanel({ notifications }: NotificationPanelProps) {
  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">系统通知</h3>
        <button type="button" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-brand">
          <span>查看更多</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <article key={notification.title} className="rounded-md border border-line bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-700" />
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-ink">{notification.title}</h4>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="truncate text-sm text-gray-700">{notification.description}</p>
                  <time className="shrink-0 text-sm text-gray-600">{notification.time}</time>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
