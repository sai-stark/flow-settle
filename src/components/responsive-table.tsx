import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useIsMobile } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

interface Column {
  key: string;
  header: string;
  className?: string;
  mobileLabel?: string; // Custom label for mobile view
  hideOnMobile?: boolean;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  renderCell: (item: any, column: Column) => ReactNode;
  onRowClick?: (item: any) => void;
  keyExtractor?: (item: any) => string;
  mobileCardTitle?: (item: any) => ReactNode;
}

export function ResponsiveTable({
  columns,
  data,
  renderCell,
  onRowClick,
  keyExtractor = (item) => item.id,
  mobileCardTitle,
}: ResponsiveTableProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Card-based layout for mobile
    return (
      <div className="space-y-3">
        {data.map((item) => (
          <Card
            key={keyExtractor(item)}
            className={cn(
              'transition-smooth',
              onRowClick && 'cursor-pointer hover:shadow-md active:scale-[0.98]'
            )}
            onClick={() => onRowClick?.(item)}
          >
            <CardContent className="p-4">
              {mobileCardTitle && (
                <div className="mb-3 border-b border-border pb-2">
                  {mobileCardTitle(item)}
                </div>
              )}
              <div className="space-y-2">
                {columns
                  .filter((col) => !col.hideOnMobile)
                  .map((column) => (
                    <div key={column.key} className="flex justify-between gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {column.mobileLabel || column.header}:
                      </span>
                      <div className="text-sm font-medium text-right">
                        {renderCell(item, column)}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
        {data.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              No data available
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Table layout for tablet and desktop
  return (
    <div className="rounded-md border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key} className={column.className}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={keyExtractor(item)}
                className={cn(onRowClick && 'cursor-pointer')}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map((column) => (
                  <TableCell key={column.key} className={column.className}>
                    {renderCell(item, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
