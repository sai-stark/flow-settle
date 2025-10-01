import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  Send, 
  Search, 
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { ResponsiveTable } from '@/components/responsive-table';
import { useIsMobile } from '@/hooks/use-media-query';

const Invoices = () => {
  const isMobile = useIsMobile();
  
  const invoices = [
    { 
      id: 'INV-2024-001', 
      customer: 'Acme Corp', 
      amount: 8750, 
      status: 'paid', 
      dueDate: '2024-11-15',
      issueDate: '2024-11-01',
      paymentDate: '2024-11-12'
    },
    { 
      id: 'INV-2024-002', 
      customer: 'TechStart Inc', 
      amount: 15420, 
      status: 'pending', 
      dueDate: '2024-12-01',
      issueDate: '2024-11-15',
      paymentDate: null
    },
    { 
      id: 'INV-2024-003', 
      customer: 'Global Finance', 
      amount: 12300, 
      status: 'overdue', 
      dueDate: '2024-11-20',
      issueDate: '2024-11-05',
      paymentDate: null
    },
    { 
      id: 'INV-2024-004', 
      customer: 'Swift Pay', 
      amount: 9875, 
      status: 'paid', 
      dueDate: '2024-11-10',
      issueDate: '2024-10-28',
      paymentDate: '2024-11-08'
    },
    { 
      id: 'INV-2024-005', 
      customer: 'Digital Bank', 
      amount: 21450, 
      status: 'pending', 
      dueDate: '2024-12-05',
      issueDate: '2024-11-20',
      paymentDate: null
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      paid: { variant: 'default' as const, icon: CheckCircle, label: 'Paid', className: 'bg-success text-success-foreground' },
      pending: { variant: 'secondary' as const, icon: Clock, label: 'Pending', className: 'bg-warning/10 text-warning border-warning' },
      overdue: { variant: 'destructive' as const, icon: AlertTriangle, label: 'Overdue', className: '' },
      cancelled: { variant: 'outline' as const, icon: XCircle, label: 'Cancelled', className: '' },
    };
    
    const { icon: Icon, label, className } = config[status as keyof typeof config];
    
    return (
      <Badge variant={config[status as keyof typeof config].variant} className={className}>
        <Icon className="mr-1 h-3 w-3" />
        {label}
      </Badge>
    );
  };

  const getTotalByStatus = (status: string) => {
    return invoices
      .filter(inv => inv.status === status)
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  const columns = [
    { key: 'id', header: 'Invoice ID', mobileLabel: 'ID', className: 'font-medium' },
    { key: 'customer', header: 'Customer', mobileLabel: 'Customer' },
    { key: 'issueDate', header: 'Issue Date', mobileLabel: 'Issued', hideOnMobile: true },
    { key: 'dueDate', header: 'Due Date', mobileLabel: 'Due' },
    { key: 'amount', header: 'Amount', mobileLabel: 'Amount', className: 'financial-number font-semibold' },
    { key: 'status', header: 'Status', mobileLabel: 'Status' },
    { key: 'actions', header: 'Actions', mobileLabel: 'Actions', className: 'text-right' },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Invoices</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? 'Track invoices' : 'Track and manage all your invoices in one place'}
          </p>
        </div>
        <Button className="bg-gradient-primary w-full sm:w-auto" size={isMobile ? 'default' : 'default'}>
          <FileText className="mr-2 h-4 w-4" />
          {isMobile ? 'New' : 'Create Invoice'}
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-3 grid-cols-2 md:gap-4 lg:grid-cols-4">
        <Card className="transition-smooth active:scale-[0.98]">
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-xs font-medium flex items-center gap-2 md:text-sm">
              <CheckCircle className="h-3.5 w-3.5 text-success md:h-4 md:w-4" />
              Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold financial-number md:text-2xl">
              ${getTotalByStatus('paid').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98]">
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-xs font-medium flex items-center gap-2 md:text-sm">
              <Clock className="h-3.5 w-3.5 text-warning md:h-4 md:w-4" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold financial-number md:text-2xl">
              ${getTotalByStatus('pending').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98]">
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-xs font-medium flex items-center gap-2 md:text-sm">
              <AlertTriangle className="h-3.5 w-3.5 text-error md:h-4 md:w-4" />
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold financial-number text-error md:text-2xl">
              ${getTotalByStatus('overdue').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98]">
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-xs font-medium md:text-sm">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold financial-number md:text-2xl">
              ${invoices.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader className="pb-3 md:pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>All Invoices</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={isMobile ? 'Search...' : 'Search invoices...'}
                className="pl-9 h-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-3 md:px-6">
          <ResponsiveTable
            columns={columns}
            data={invoices}
            keyExtractor={(item) => item.id}
            mobileCardTitle={(invoice) => (
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{invoice.id}</span>
                {getStatusBadge(invoice.status)}
              </div>
            )}
            renderCell={(invoice, column) => {
              switch (column.key) {
                case 'id':
                  return invoice.id;
                case 'customer':
                  return invoice.customer;
                case 'issueDate':
                  return invoice.issueDate;
                case 'dueDate':
                  return invoice.dueDate;
                case 'amount':
                  return `$${invoice.amount.toLocaleString()}`;
                case 'status':
                  return getStatusBadge(invoice.status);
                case 'actions':
                  return (
                    <div className="flex justify-end gap-1 md:gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9" title="Download PDF">
                        <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                      {invoice.status === 'pending' && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9" title="Send Reminder">
                          <Send className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        </Button>
                      )}
                    </div>
                  );
                default:
                  return null;
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
