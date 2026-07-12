import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  action: string;
  actionPath?: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, trend, action, actionPath, icon: Icon }: StatCardProps) {
  const actionContent = (
    <>
      <span>{action}</span>
      <ChevronRight className="h-4 w-4" />
    </>
  );

  return (
    <Card className="flex min-h-[168px] flex-col items-center justify-center text-center" padded>
      <div className="mb-3 flex items-center justify-center gap-3">
        <Icon className="h-7 w-7 text-gray-600" />
        <h3 className="text-sm font-medium text-ink">{label}</h3>
      </div>
      <p className="text-4xl font-semibold leading-none text-ink">{value}</p>
      <p className="mt-4 min-h-5 text-sm text-gray-600">{trend ?? ''}</p>
      {actionPath ? (
        <Link to={actionPath} className="mt-2 inline-flex items-center gap-1 text-sm text-ink hover:text-brand">
          {actionContent}
        </Link>
      ) : (
        <button type="button" className="mt-2 inline-flex items-center gap-1 text-sm text-ink hover:text-brand">
          {actionContent}
        </button>
      )}
    </Card>
  );
}
