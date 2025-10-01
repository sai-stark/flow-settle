import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-media-query';

interface ResponsiveChartContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  mobileHeight?: number;
  desktopHeight?: number;
}

export function ResponsiveChartContainer({
  title,
  description,
  children,
  mobileHeight = 250,
  desktopHeight = 300,
}: ResponsiveChartContainerProps) {
  const isMobile = useIsMobile();
  const height = isMobile ? mobileHeight : desktopHeight;

  return (
    <Card className="transition-smooth hover:shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>{title}</CardTitle>
        {description && (
          <p className={cn('text-muted-foreground', isMobile ? 'text-xs' : 'text-sm')}>
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent className={isMobile ? 'px-2' : ''}>
        <div style={{ height: `${height}px` }}>{children}</div>
      </CardContent>
    </Card>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
