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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Invoices = () => {
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

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage all your invoices in one place
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <FileText className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold financial-number">
              ${getTotalByStatus('paid').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-warning" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold financial-number">
              ${getTotalByStatus('pending').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-error" />
              Overdue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold financial-number text-error">
              ${getTotalByStatus('overdue').toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold financial-number">
              ${invoices.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Invoices</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell>{invoice.issueDate}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell className="financial-number font-semibold">
                      ${invoice.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" title="Download PDF">
                          <Download className="h-4 w-4" />
                        </Button>
                        {invoice.status === 'pending' && (
                          <Button variant="ghost" size="icon" title="Send Reminder">
                            <Send className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;
