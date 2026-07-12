import { cn } from '../../lib/cn';

interface TabsProps {
  tabs: Array<{ label: string; value: string }>;
  active: string;
  variant?: 'segmented' | 'underline';
}

export function Tabs({ tabs, active, variant = 'segmented' }: TabsProps) {
  if (variant === 'underline') {
    return (
      <div className="flex border-b border-line">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.value}
            className={cn(
              'relative h-12 px-5 text-sm font-medium text-gray-600 transition-colors hover:text-ink',
              active === tab.value && 'text-ink',
            )}
          >
            {tab.label}
            {active === tab.value ? (
              <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-ink" />
            ) : null}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex rounded-md border border-line bg-gray-50 p-1">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.value}
          className={cn(
            'h-8 rounded px-3 text-sm font-medium text-gray-600 transition-colors',
            active === tab.value && 'bg-white text-ink shadow-sm',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
