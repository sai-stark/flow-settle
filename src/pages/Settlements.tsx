import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-media-query';
import { DollarSign, Clock, CheckCircle, XCircle } from 'lucide-react';

const Settlements = () => {
  const isMobile = useIsMobile();

  const pendingSettlements = [
    { id: 1, tsp: 'TSP Partner A', period: 'Nov 2024', amount: 15420, transactions: 234, status: 'pending' },
    { id: 2, tsp: 'TSP Partner B', period: 'Nov 2024', amount: 12300, transactions: 187, status: 'pending' },
    { id: 3, tsp: 'TSP Partner C', period: 'Nov 2024', amount: 18750, transactions: 312, status: 'pending' },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">TSP Settlements</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? 'Partner settlements' : 'Manage partner settlements and approvals'}
          </p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-3 md:space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="text-xs md:text-sm">Pending</TabsTrigger>
          <TabsTrigger value="completed" className="text-xs md:text-sm">Completed</TabsTrigger>
          <TabsTrigger value="rejected" className="text-xs md:text-sm">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-3">
          {pendingSettlements.map((settlement) => (
            <Card key={settlement.id} className="transition-smooth active:scale-[0.98]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>{settlement.tsp}</CardTitle>
                    <p className="text-xs text-muted-foreground md:text-sm">{settlement.period}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    Pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Amount</p>
                    <p className="text-base font-bold financial-number md:text-lg">
                      ${settlement.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Transactions</p>
                    <p className="text-base font-bold md:text-lg">{settlement.transactions}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-success text-success-foreground" size={isMobile ? 'sm' : 'default'}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button variant="destructive" className="flex-1" size={isMobile ? 'sm' : 'default'}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>Completed Settlements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Completed settlements will be displayed here...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>Rejected Settlements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Rejected settlements will be displayed here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settlements;
