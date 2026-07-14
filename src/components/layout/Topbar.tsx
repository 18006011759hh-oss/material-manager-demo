import { useState } from 'react';
import { Bell, CheckCircle2, ChevronDown, CircleHelp, LoaderCircle, RefreshCw, UserRound } from 'lucide-react';
import { Button } from '../common/Button';
import { IconButton } from '../common/IconButton';
import { DemoControls } from './DemoControls';
import { useDemoState } from '../../context/DemoStateContext';

export function Topbar() {
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState('');
  const { state, syncUpdate } = useDemoState();

  const handleSync = () => {
    setSyncing(true);
    setMessage('');
    window.setTimeout(() => {
      setSyncing(false);
      syncUpdate();
      setMessage(state.published ? '同步成功：新增 10、重点 3、不可用 4、待分类 6' : '同步成功，当前已是最新状态');
      window.setTimeout(() => setMessage(''), 3000);
    }, 900);
  };

  return (
    <header className={`sticky z-[70] flex h-[78px] items-center justify-between gap-4 border-b border-line bg-white px-6 ${state.guideActive ? 'top-[44px]' : 'top-0'}`}>
      <DemoControls />
      <div className="flex shrink-0 items-center gap-4">
        <Button data-guide-target="3" className={`scroll-mt-[128px] ${state.guideActive && state.guideStep === 3 ? 'ring-2 ring-brand ring-offset-2' : ''}`} onClick={handleSync} disabled={syncing} icon={syncing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}>
          {syncing ? '同步中...' : '同步更新'}
        </Button>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle2 className="h-4 w-4 text-gray-500" />
          <span>{state.published && !state.synced ? '有 1 条更新待同步' : '已是最新状态'}</span>
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
      {message ? <div role="status" className="absolute right-8 top-[66px] z-50 rounded-md bg-ink px-4 py-2.5 text-sm text-white shadow-lg">{message}</div> : null}
    </header>
  );
}
