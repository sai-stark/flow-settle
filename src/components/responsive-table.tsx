import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronRight } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  mobileLabel?: string;
  className?: string;
  render?: (value: any, row: any) => ReactNode;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  onRowClick?: (row: any) => void;
  mobileCardRender?: (row: any, index: number) => ReactNode;
  className?: string;
}

export function ResponsiveTable({ 
  columns, 
  data, 
  onRowClick,
  mobileCardRender,
  className = ''
}: ResponsiveTableProps) {
  const isMobile = useIsMobile();

  // Mobile Card View
  if (isMobile) {
    return (
      <div className="space-y-3">
        {data.map((row, idx) => {
          if (mobileCardRender) {
            return mobileCardRender(row, idx);
          }

          return (
            <Card 
              key={idx} 
              className={`transition-all touch-manipulation active:scale-[0.98] ${
                onRowClick ? 'cursor-pointer hover:shadow-md' : ''
              } ${className}`}
              onClick={() => onRowClick?.(row)}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {columns.map((column) => {
                    const value = row[column.key];
                    const displayValue = column.render ? column.render(value, row) : value;

                    return (
                      <div key={column.key} className="flex items-start justify-between gap-4">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {column.mobileLabel || column.label}
                        </span>
                        <span className={`text-sm font-semibold text-right ${column.className || ''}`}>
                          {displayValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {onRowClick && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground mt-2 ml-auto" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

  // Desktop Table View
  return (
    <ScrollArea className="w-full">
      <div className="min-w-[800px]">
        <Table className={className}>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key} className={column.className}>
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow 
                key={idx}
                className={onRowClick ? 'cursor-pointer hover:bg-accent/50' : ''}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => {
                  const value = row[column.key];
                  const displayValue = column.render ? column.render(value, row) : value;

                  return (
                    <TableCell key={column.key} className={column.className}>
                      {displayValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ScrollArea>
  );
}
