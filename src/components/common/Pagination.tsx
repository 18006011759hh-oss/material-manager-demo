import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface PaginationProps {
  current: number;
  total: number;
}

export function Pagination({ current, total }: PaginationProps) {
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
      <Button size="sm" icon={<ChevronLeft className="h-4 w-4" />}>
        上一页
      </Button>
      <span>
        {current} / {total}
      </span>
      <Button size="sm" icon={<ChevronRight className="h-4 w-4" />}>
        下一页
      </Button>
    </div>
  );
}
