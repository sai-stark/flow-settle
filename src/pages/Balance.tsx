import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity, TrendingUp, AlertCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-media-query';

const Balance = () => {
  const isMobile = useIsMobile();

  const balance = {
    current: 45780,
    creditLimit: 100000,
    utilizationPercent: 45.78,
    daysUntilInvoice: 12,
  };

  const apiUsage = {
    current: 1234567,
    limit: 1500000,
    utilizationPercent: 82.3,
  };

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Balance & Consumption</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? 'Account overview' : 'Monitor your account balance and API usage'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        {/* Account Balance Card */}
        <Card className="transition-smooth">
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${isMobile ? 'text-base' : 'text-lg'}`}>
              <Activity className="h-5 w-5 text-primary" />
              Account Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground md:text-sm">Current Balance</p>
                  <p className="text-2xl font-bold financial-number md:text-3xl">
                    ${balance.current.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground md:text-sm">Credit Limit</p>
                  <p className="text-lg font-semibold financial-number md:text-xl">
                    ${balance.creditLimit.toLocaleString()}
                  </p>
                </div>
              </div>
              <Progress value={balance.utilizationPercent} className="h-2 md:h-3" />
              <p className="text-xs text-muted-foreground mt-2 md:text-sm">
                {balance.utilizationPercent}% utilization
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t md:gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Next Invoice</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-xl font-bold md:text-2xl">{balance.daysUntilInvoice}</p>
                  <p className="text-xs text-muted-foreground">days</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Trend</p>
                <div className="flex items-center gap-1 text-success">
                  <TrendingUp className="h-4 w-4" />
                  <p className="text-base font-semibold md:text-lg">+8.2%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Usage Card */}
        <Card className="transition-smooth">
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${isMobile ? 'text-base' : 'text-lg'}`}>
              <Activity className="h-5 w-5 text-primary" />
              API Consumption
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-xs text-muted-foreground md:text-sm">Current Usage</p>
                  <p className="text-2xl font-bold financial-number md:text-3xl">
                    {(apiUsage.current / 1000000).toFixed(2)}M
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground md:text-sm">Monthly Limit</p>
                  <p className="text-lg font-semibold financial-number md:text-xl">
                    {(apiUsage.limit / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
              <Progress 
                value={apiUsage.utilizationPercent} 
                className={`h-2 md:h-3 ${apiUsage.utilizationPercent > 80 ? '[&>div]:bg-warning' : ''}`}
              />
              <p className="text-xs text-muted-foreground mt-2 md:text-sm">
                {apiUsage.utilizationPercent}% of monthly limit
              </p>
            </div>

            {apiUsage.utilizationPercent > 80 && (
              <div className="flex gap-2 rounded-lg bg-warning-light p-3 md:gap-3 md:p-4">
                <AlertCircle className="h-4 w-4 text-warning shrink-0 md:h-5 md:w-5" />
                <div>
                  <p className="text-xs font-medium md:text-sm">High Usage Alert</p>
                  <p className="text-xs text-muted-foreground">
                    You've reached {apiUsage.utilizationPercent}% of your limit
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-4 border-t md:gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Avg Daily</p>
                <p className="text-lg font-bold financial-number md:text-xl">41K</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Peak Hour</p>
                <p className="text-lg font-bold md:text-xl">2:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Balance;
