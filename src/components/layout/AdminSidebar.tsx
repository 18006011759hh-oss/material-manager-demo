import {
  BarChart3,
  CalendarClock,
  Download,
  FileText,
  PenLine,
  Settings,
  Users,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/cn';

const adminNavItems = [
  { label: '素材状态管理', icon: PenLine, path: '/admin/material-status' },
  { label: '发布更新', icon: Download, path: '/admin/publish-confirm' },
  { label: '使用数据', icon: BarChart3, path: '/admin/usage-data' },
  { label: '剪辑师管理', icon: Users, path: '/admin/editor-management' },
  { label: '系统设置', icon: Settings, path: '/admin/settings' },
  { label: '操作日志', icon: FileText, path: '/admin/logs' },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="relative z-10 flex w-[230px] shrink-0 flex-col border-r border-line bg-white">
      <div className="flex h-[78px] w-[520px] items-center gap-7 border-b border-line bg-white px-5">
        <div className="grid h-[52px] w-[60px] shrink-0 place-items-center border border-gray-400 bg-gray-50 text-xs text-gray-700">
          LOGO
        </div>
        <div className="flex min-w-0 items-center gap-7">
          <h1 className="whitespace-nowrap text-xl font-semibold tracking-normal text-ink">
            AI 本地素材管理系统
          </h1>
          <span className="whitespace-nowrap rounded-md bg-gray-100 px-3 py-1 text-sm text-ink">
            管理员模式
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-5">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex h-12 w-full items-center gap-4 rounded-md px-5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100',
                isActive && 'bg-blue-50 text-brand',
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-6">
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">本次未发布更新</p>
          <p className="mt-4 text-3xl font-semibold text-ink">8 <span className="text-sm font-normal">项变更</span></p>
          <div className="mt-5 space-y-3 text-sm text-ink">
            <div className="flex justify-between"><span>新增素材</span><span>12</span></div>
            <div className="flex justify-between"><span>重点素材</span><span>3</span></div>
            <div className="flex justify-between"><span>下架素材</span><span>2</span></div>
            <div className="flex justify-between"><span>过期素材</span><span>1</span></div>
            <div className="flex justify-between"><span>不推荐素材</span><span>3</span></div>
          </div>
          <Link to="/admin/publish-confirm" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
            查看详情
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
