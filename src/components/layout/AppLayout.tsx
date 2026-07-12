import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopbar } from './AdminTopbar';
import { FooterStatusBar } from './FooterStatusBar';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen min-w-[1280px] bg-canvas">
      <div className="mx-auto flex min-h-screen w-full max-w-[1536px] border-x border-line bg-canvas">
        {isAdmin ? <AdminSidebar /> : <Sidebar />}
        <div className="flex min-w-0 flex-1 flex-col">
          {isAdmin ? <AdminTopbar /> : <Topbar />}
          <main className="min-h-0 flex-1 overflow-auto px-8 py-6">{children}</main>
          {isAdmin ? null : <FooterStatusBar />}
        </div>
      </div>
    </div>
  );
}
