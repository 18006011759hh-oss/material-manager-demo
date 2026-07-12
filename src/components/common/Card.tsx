import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
}

export function Card({ children, className, padded = true, ...props }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-lg border border-line bg-white shadow-soft',
        padded && 'p-5',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
