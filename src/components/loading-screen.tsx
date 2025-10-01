import { DollarSign } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <DollarSign className="h-12 w-12 text-primary opacity-75" />
          </div>
          <div className="animate-coin-flip">
            <DollarSign className="h-12 w-12 text-primary" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">Loading...</h3>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
            <div className="animate-shimmer h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
