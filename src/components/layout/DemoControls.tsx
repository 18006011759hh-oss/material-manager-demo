import { FlaskConical, RotateCcw } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDemoState } from '../../context/DemoStateContext';

export function DemoControls() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.startsWith('/admin');
  const { resetDemo } = useDemoState();

  return (
    <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
      <span className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 text-xs font-medium text-amber-800" title="当前使用模拟数据，不连接真实本地文件系统">
        <FlaskConical className="h-3.5 w-3.5" />
        演示环境 · 模拟数据
      </span>
      <button type="button" onClick={() => { if (window.confirm('确认重置全部演示数据并回到初始状态吗？')) resetDemo(); }} className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2 text-xs text-gray-600 hover:bg-gray-100 hover:text-ink">
        <RotateCcw className="h-3.5 w-3.5" />
        重置演示数据
      </button>
      <div className="inline-flex shrink-0 rounded-md border border-line bg-gray-50 p-1 text-sm">
        <button type="button" onClick={() => navigate('/')} className={`h-8 rounded px-3 font-medium transition-colors ${!isAdmin ? 'bg-white text-ink shadow-sm' : 'text-gray-600 hover:text-ink'}`}>
          剪辑师模式
        </button>
        <button type="button" onClick={() => navigate('/admin/material-status')} className={`h-8 rounded px-3 font-medium transition-colors ${isAdmin ? 'bg-white text-ink shadow-sm' : 'text-gray-600 hover:text-ink'}`}>
          管理员模式
        </button>
      </div>
    </div>
  );
}
