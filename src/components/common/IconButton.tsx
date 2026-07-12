import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  badge?: string | number;
}

export function IconButton({ icon, label, badge, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100',
        className,
      )}
      {...props}
    >
      {icon}
      {badge ? (
        <span className="absolute right-1 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-500 px-1 text-xs font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </button>
  );
}
