import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface RecentUpdate {
  type: string;
  content: string;
  updatedAt: string;
  source: string;
  action: string;
  icon: LucideIcon;
}

interface RecentUpdateTableProps {
  updates: RecentUpdate[];
}

export function RecentUpdateTable({ updates }: RecentUpdateTableProps) {
  return (
    <Card padded={false}>
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-base font-semibold text-ink">最近更新</h3>
        <button type="button" className="inline-flex items-center gap-1 text-sm text-ink hover:text-brand">
          <span>查看更多</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-y border-line bg-gray-50 text-gray-700">
          <tr>
            <th className="w-[19%] px-5 py-3 font-medium">类型</th>
            <th className="w-[22%] px-5 py-3 font-medium">内容</th>
            <th className="w-[22%] px-5 py-3 font-medium">更新时间</th>
            <th className="w-[18%] px-5 py-3 font-medium">来源</th>
            <th className="px-5 py-3 font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update) => {
            const Icon = update.icon;
            return (
              <tr key={`${update.type}-${update.content}`} className="border-b border-line last:border-b-0">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-600" />
                    <span className="font-medium text-gray-800">{update.type}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-gray-800">{update.content}</td>
                <td className="px-5 py-3.5 text-gray-800">{update.updatedAt}</td>
                <td className="px-5 py-3.5 text-gray-800">{update.source}</td>
                <td className="px-5 py-3.5">
                  <Button size="sm">{update.action}</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
