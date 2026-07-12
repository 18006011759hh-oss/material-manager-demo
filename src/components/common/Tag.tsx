import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex h-7 items-center rounded-md border border-line bg-gray-50 px-2.5 text-xs text-gray-700',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
