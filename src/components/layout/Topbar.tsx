import { Bell, CheckCircle2, ChevronDown, CircleHelp, RefreshCw, UserRound } from 'lucide-react';
import { Button } from '../common/Button';
import { IconButton } from '../common/IconButton';

export function Topbar() {
  return (
    <header className="flex h-[78px] items-center justify-end border-b border-line bg-white px-8">
      <div className="flex items-center gap-6">
        <Button icon={<RefreshCw className="h-4 w-4" />}>同步更新</Button>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle2 className="h-4 w-4 text-gray-500" />
          <span>已是最新状态</span>
        </div>
        <div className="h-7 w-px bg-line" />
        <IconButton icon={<Bell className="h-5 w-5" />} label="通知" badge={3} />
        <IconButton icon={<CircleHelp className="h-5 w-5" />} label="帮助" />
        <div className="h-7 w-px bg-line" />
        <button type="button" className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-gray-100">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-200">
            <UserRound className="h-5 w-5 text-gray-700" />
          </span>
          <span className="text-sm font-medium text-ink">剪辑师小A</span>
          <ChevronDown className="h-4 w-4 text-ink" />
        </button>
      </div>
    </header>
  );
}
