import { Info } from 'lucide-react';
import type { ReactNode } from 'react';

interface InfoTipProps {
  children: ReactNode;
}

export function InfoTip({ children }: InfoTipProps) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-gray-500" title={String(children)}>
      <Info className="h-4 w-4" />
      <span>{children}</span>
    </span>
  );
}
