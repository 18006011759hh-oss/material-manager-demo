import { Search } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function SearchInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={cn('relative block', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        className="h-10 w-full rounded-md border border-line bg-white pl-9 pr-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100"
        placeholder="搜索素材"
        {...props}
      />
    </label>
  );
}
