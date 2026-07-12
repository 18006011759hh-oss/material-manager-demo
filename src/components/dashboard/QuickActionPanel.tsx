import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';

interface QuickAction {
  label: string;
  icon: LucideIcon;
  path?: string;
}

interface QuickActionPanelProps {
  actions: QuickAction[];
}

export function QuickActionPanel({ actions }: QuickActionPanelProps) {
  return (
    <Card className="p-4">
      <h3 className="mb-4 text-base font-semibold text-ink">快捷操作</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          const className =
            'flex h-[76px] flex-col items-center justify-center gap-2 rounded-md border border-line bg-white text-sm font-medium text-ink transition hover:border-gray-400 hover:bg-gray-50';
          const content = (
            <>
              <Icon className="h-7 w-7 text-gray-600" />
              <span>{action.label}</span>
            </>
          );

          if (action.path) {
            return (
              <Link key={action.label} to={action.path} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <button key={action.label} type="button" className={className}>
              {content}
            </button>
          );
        })}
      </div>
    </Card>
  );
}
