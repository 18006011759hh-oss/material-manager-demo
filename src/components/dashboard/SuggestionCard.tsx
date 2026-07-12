import type { LucideIcon } from 'lucide-react';
import { Button } from '../common/Button';

interface SuggestionCardProps {
  title: string;
  description: string;
  action: string;
  icon: LucideIcon;
}

export function SuggestionCard({ title, description, action, icon: Icon }: SuggestionCardProps) {
  return (
    <article className="flex min-h-[140px] items-center gap-5 rounded-lg border border-line bg-white px-5 py-4">
      <Icon className="h-9 w-9 shrink-0 text-gray-600" />
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-ink">{title}</h4>
        <p className="mt-2 max-w-[270px] text-sm leading-6 text-gray-700">{description}</p>
        <Button className="mt-3 min-w-24" size="sm">
          {action}
        </Button>
      </div>
    </article>
  );
}
