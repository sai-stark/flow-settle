import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-media-query';

const Disputes = () => {
  const isMobile = useIsMobile();

  const disputes = [
    { 
      id: 'DSP-001', 
      type: 'Billing Error', 
      amount: 3200, 
      customer: 'TechStart Inc', 
      status: 'open', 
      priority: 'high',
      createdAt: '2024-11-25',
      description: 'Incorrect pricing applied to invoice'
    },
    { 
      id: 'DSP-002', 
      type: 'Service Issue', 
      amount: 1500, 
      customer: 'Acme Corp', 
      status: 'under-review', 
      priority: 'medium',
      createdAt: '2024-11-24',
      description: 'API downtime not reflected in billing'
    },
    { 
      id: 'DSP-003', 
      type: 'Pricing Discrepancy', 
      amount: 5800, 
      customer: 'Global Finance', 
      status: 'open', 
      priority: 'high',
      createdAt: '2024-11-23',
      description: 'Volume discount not applied correctly'
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      'open': { variant: 'default' as const, icon: AlertCircle, label: 'Open', className: 'bg-error text-error-foreground' },
      'under-review': { variant: 'secondary' as const, icon: Clock, label: 'Under Review', className: 'bg-warning/10 text-warning border-warning' },
      'resolved': { variant: 'default' as const, icon: CheckCircle, label: 'Resolved', className: 'bg-success text-success-foreground' },
    };
    
    const { icon: Icon, label, className } = config[status as keyof typeof config];
    
    return (
      <Badge variant={config[status as keyof typeof config].variant} className={className}>
        <Icon className="mr-1 h-3 w-3" />
        {label}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-error/10 text-error border-error',
      medium: 'bg-warning/10 text-warning border-warning',
      low: 'bg-muted text-muted-foreground',
    };
    
    return (
      <Badge variant="outline" className={colors[priority as keyof typeof colors]}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dispute Management</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? 'Track disputes' : 'Track and resolve billing disputes'}
          </p>
        </div>
        <Button className="bg-gradient-primary w-full sm:w-auto" size={isMobile ? 'default' : 'default'}>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          {isMobile ? 'New Dispute' : 'Raise Dispute'}
        </Button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {disputes.map((dispute) => (
          <Card key={dispute.id} className="transition-smooth active:scale-[0.98] md:hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>{dispute.id}</CardTitle>
                    {getPriorityBadge(dispute.priority)}
                  </div>
                  <p className="text-xs text-muted-foreground md:text-sm">{dispute.customer}</p>
                </div>
                {getStatusBadge(dispute.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-medium">{dispute.type}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="text-sm font-bold financial-number">
                    ${dispute.amount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Created</p>
                  <p className="text-sm font-medium">{dispute.createdAt}</p>
                </div>
              </div>
              
              <div className="rounded-md bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground mb-1">Description</p>
                <p className="text-sm">{dispute.description}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" size={isMobile ? 'sm' : 'default'}>
                  View Details
                </Button>
                <Button className="flex-1" size={isMobile ? 'sm' : 'default'}>
                  Take Action
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Disputes;
