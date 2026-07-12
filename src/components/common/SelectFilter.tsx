import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface SelectFilterProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ label: string; value: string }>;
}

export function SelectFilter({ options, className, ...props }: SelectFilterProps) {
  return (
    <select
      className={cn(
        'h-10 rounded-md border border-line bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-brand focus:ring-2 focus:ring-blue-100',
        className,
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
