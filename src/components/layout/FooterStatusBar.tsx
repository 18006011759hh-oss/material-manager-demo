import { CircleHelp } from 'lucide-react';

export function FooterStatusBar() {
  return (
    <footer className="flex h-14 items-center justify-between border-t border-line bg-white px-8 text-sm text-gray-700">
      <span>本地素材库路径：D:\短视频素材库</span>
      <button type="button" className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-gray-100">
        <CircleHelp className="h-4 w-4" />
        <span>帮助中心</span>
      </button>
    </footer>
  );
}
