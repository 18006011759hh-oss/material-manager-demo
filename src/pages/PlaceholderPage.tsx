import { useLocation } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { PageHeader } from '../components/layout/PageHeader';

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  const location = useLocation();

  return (
    <section>
      <PageHeader title={title} description="该页面将在后续实现" />
      <Card className="flex min-h-[360px] flex-col justify-center">
        <p className="text-sm font-medium text-gray-600">当前路径</p>
        <p className="mt-3 text-2xl font-semibold text-ink">{location.pathname}</p>
        <p className="mt-6 text-sm text-gray-700">该页面将在后续实现</p>
      </Card>
    </section>
  );
}
