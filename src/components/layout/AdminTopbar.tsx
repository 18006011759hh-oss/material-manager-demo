import { Bell, ChevronDown, CircleHelp, UserRound } from 'lucide-react';
import { IconButton } from '../common/IconButton';
import { DemoControls } from './DemoControls';
import { useDemoState } from '../../context/DemoStateContext';

export function AdminTopbar() {
  const { state } = useDemoState();
  return (
    <header className={`sticky z-[70] flex h-[78px] items-center justify-between gap-4 border-b border-line bg-white px-6 ${state.guideActive ? 'top-[44px]' : 'top-0'}`}>
      <DemoControls />
      <div className="flex shrink-0 items-center gap-4">
        <IconButton icon={<Bell className="h-5 w-5" />} label="通知" badge={3} />
        <span className="-ml-5 text-sm text-ink">通知</span>
        <div className="h-7 w-px bg-line" />
        <IconButton icon={<CircleHelp className="h-5 w-5" />} label="帮助" />
        <span className="-ml-5 text-sm text-ink">帮助</span>
        <div className="h-7 w-px bg-line" />
        <button type="button" className="flex items-center gap-3 rounded-md px-2 py-1.5 hover:bg-gray-100">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-200">
            <UserRound className="h-5 w-5 text-gray-700" />
          </span>
          <span className="text-sm font-medium text-ink">管理员</span>
          <ChevronDown className="h-4 w-4 text-ink" />
        </button>
      </div>
    </header>
  );
}
