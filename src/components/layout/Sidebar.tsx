import {
  AlertTriangle,
  Download,
  Folder,
  Home,
  MoreHorizontal,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { Button } from '../common/Button';

const navItems = [
  { label: '首页', icon: Home, path: '/' },
  { label: '下载与 AI 分类', icon: Download, path: '/download-ai-classify' },
  { label: '不可用素材提醒', icon: AlertTriangle, path: '/unavailable-assets' },
  { label: '本地素材库', icon: Folder, path: '/local-library' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative z-10 flex w-[230px] shrink-0 flex-col border-r border-line bg-white">
      <div className="flex h-[78px] w-[460px] items-center gap-6 border-b border-line bg-white px-5">
        <div className="grid h-[52px] w-[52px] shrink-0 place-items-center border border-gray-400 bg-gray-50 text-xs text-gray-700">
          LOGO
        </div>
        <div className="flex min-w-0 items-center gap-8">
          <h1 className="whitespace-nowrap text-lg font-semibold tracking-normal text-ink">
            AI 本地素材管理助手
          </h1>
          <p className="whitespace-nowrap text-sm text-gray-600">剪辑师模式</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-7">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : item.path
                ? location.pathname.startsWith(item.path)
                : false;
          const className = cn(
            'flex h-12 w-full items-center gap-3 rounded-md px-4 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100',
            isActive && 'bg-gray-100 text-ink',
          );
          const content = (
            <>
              <Icon className="h-5 w-5 shrink-0" />
              <span className="flex-1 whitespace-nowrap">{item.label}</span>
            </>
          );

          if (item.path) {
            return (
              <Link key={item.label} to={item.path} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <button key={item.label} type="button" className={className}>
              {content}
            </button>
          );
        })}
      </nav>

      <div className="px-5 pb-7">
        <div className="rounded-lg border border-line bg-white p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-ink">本地素材库</p>
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </div>
          <p className="truncate text-xs text-gray-600">D:\短视频素材库</p>
          <div className="mt-5 h-2 rounded-full bg-gray-200">
            <div className="h-2 w-1/4 rounded-full bg-gray-600" />
          </div>
          <p className="mt-3 text-xs text-gray-700">已使用 256GB / 1TB (25%)</p>
          <Button className="mt-4 w-full" size="sm">
            更换路径
          </Button>
        </div>
      </div>

      <div className="border-t border-line px-8 py-5 text-xs text-gray-700">版本：v1.0.0</div>
    </aside>
  );
}
