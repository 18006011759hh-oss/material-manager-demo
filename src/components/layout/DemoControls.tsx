import { FlaskConical } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function DemoControls() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-3 text-xs font-medium text-amber-800" title="当前使用模拟数据，不连接真实本地文件系统">
        <FlaskConical className="h-3.5 w-3.5" />
        演示环境
      </span>
      <div className="inline-flex rounded-md border border-line bg-gray-50 p-1 text-sm">
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
