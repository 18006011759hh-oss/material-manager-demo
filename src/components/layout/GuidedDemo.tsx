import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDemoState } from '../../context/DemoStateContext';
import { Button } from '../common/Button';

const steps = [
  '批量设置 4 个不可用素材，并标记 3 个重点素材',
  '核对 10 个更新汇总并确认发布',
  '同步更新：新增 10、重点 3、不可用 4、待分类 6',
  '全选 4 个不可用素材并批量移动',
  '确认 6 个 AI 分类建议并批量整理',
];

const paths = ['/', '/admin/material-status', '/admin/publish-confirm', '/', '/unavailable-assets', '/download-ai-classify'];

export function GuidedDemo() {
  const { state, startGuide, browseFreely, exitGuide, restartGuide } = useDemoState();
  const navigate = useNavigate();
  const location = useLocation();
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!state.guideActive || !state.guideStep) return;
    const target = state.guideComplete ? '/local-library' : paths[state.guideStep];
    if (location.pathname !== target) navigate(target);
    window.setTimeout(() => {
      const element = document.querySelector(`[data-guide-target="${state.guideStep}"]`) as HTMLElement | null;
      if (!element) return;
      element.style.scrollMarginTop = '128px';
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  }, [state.guideActive, state.guideStep, state.guideComplete, location.pathname, navigate]);

  return (
    <>
      {!state.guideWelcomeSeen ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/35 p-6">
          <div className="w-full max-w-[560px] rounded-xl border border-line bg-white p-7 shadow-2xl">
            <h2 className="text-2xl font-semibold text-ink">AI本地素材管理助手 · 交互演示</h2>
            <p className="mt-4 text-sm leading-7 text-gray-700">本Demo使用模拟数据，重点展示“素材状态发布 → 剪辑师同步 → 本地处理”的核心闭环。</p>
            <div className="mt-7 flex justify-end gap-3">
              <Button onClick={browseFreely}>自由浏览页面</Button>
              <Button variant="primary" onClick={startGuide}>开始60秒演示</Button>
            </div>
          </div>
        </div>
      ) : null}

      {state.guideActive ? (
        <>
          <div className="sticky top-0 z-[80] flex h-11 w-full items-center gap-3 overflow-visible border-b border-blue-200 bg-white px-5 shadow-sm">
            <span className="text-xs font-semibold text-brand">批量处理演示 {state.guideStep}/5</span>
            <div className="flex flex-1 gap-1">{steps.map((_, index) => <span key={index} className={`h-1.5 flex-1 rounded-full ${index < state.guideStep ? 'bg-brand' : 'bg-gray-200'}`} />)}</div>
            <button type="button" onClick={() => { if (!window.confirm('确定重新开始演示吗？当前操作进度将恢复为初始模拟数据。')) return; restartGuide(); setToast('演示数据已重置'); window.setTimeout(() => setToast(''), 3000); }} className="min-w-[120px] shrink-0 overflow-visible whitespace-nowrap rounded-md border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink hover:bg-gray-50">重新开始演示</button>
            <button type="button" onClick={exitGuide} className="inline-flex items-center gap-1 text-xs text-gray-600"><X className="h-3.5 w-3.5" />退出</button>
          </div>
          {state.guideStep !== 2 && state.guideStep !== 5 ? <div className="pointer-events-none fixed bottom-5 right-5 z-[60] w-[330px] rounded-lg border border-blue-200 bg-white p-4 shadow-xl">
            <p className="text-xs font-medium text-brand">步骤 {state.guideStep}/5</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink">{steps[state.guideStep - 1]}</p>
            <p className="mt-2 text-xs leading-5 text-gray-600">页面已自动定位，蓝色描边为当前操作目标。所有移动均需人工确认，不会永久删除文件。</p>
          </div> : null}
        </>
      ) : null}
      {toast ? <div role="status" className="fixed right-5 top-16 z-[110] rounded-md bg-ink px-4 py-2.5 text-sm text-white shadow-lg">{toast}</div> : null}

      {state.guideComplete ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/25 p-6">
          <div className="w-full max-w-[480px] rounded-xl border border-line bg-white p-7 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
            <h2 className="mt-4 text-2xl font-semibold text-ink">演示完成</h2>
            <p className="mt-3 text-sm leading-6 text-gray-700">6 个素材已进入分类文件夹，4 个已进入不可用素材文件夹，3 个保留重点标记。没有文件被永久删除。</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button onClick={browseFreely}>自由浏览</Button>
              <Button variant="primary" onClick={startGuide}>重新演示</Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
