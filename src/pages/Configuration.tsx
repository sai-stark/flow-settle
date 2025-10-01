import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ResponsiveTable } from '@/components/responsive-table';
import { useIsMobile } from '@/hooks/use-media-query';

const Configuration = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useIsMobile();

  const pricingConfigs = [
    { id: 1, customer: 'Acme Corp', type: 'Bank', model: 'Tiered', rate: '2.5% - 3.5%', status: 'Active', effectiveDate: '2024-01-01' },
    { id: 2, customer: 'TechStart Inc', type: 'E-Commerce', model: 'Flat Rate', rate: '3.0%', status: 'Active', effectiveDate: '2024-02-15' },
    { id: 3, customer: 'Global Finance', type: 'Bank', model: 'Volume-based', rate: '1.8% - 2.8%', status: 'Active', effectiveDate: '2024-01-20' },
    { id: 4, customer: 'Swift Pay', type: 'E-Commerce', model: 'Tiered', rate: '2.0% - 3.0%', status: 'Pending', effectiveDate: '2024-12-01' },
  ];

  const tspConfigs = [
    { id: 1, tsp: 'TSP Partner A', commission: '15%', tier: 'Volume-based', status: 'Active' },
    { id: 2, tsp: 'TSP Partner B', commission: '12%', tier: 'Flat', status: 'Active' },
    { id: 3, tsp: 'TSP Partner C', commission: '10% - 18%', tier: 'Tiered', status: 'Active' },
  ];

  const pricingColumns = [
    { key: 'customer', header: 'Customer', mobileLabel: 'Customer', className: 'font-medium' },
    { key: 'type', header: 'Type', mobileLabel: 'Type', hideOnMobile: true },
    { key: 'model', header: 'Pricing Model', mobileLabel: 'Model' },
    { key: 'rate', header: 'Rate', mobileLabel: 'Rate', className: 'financial-number' },
    { key: 'effectiveDate', header: 'Effective Date', mobileLabel: 'Effective', hideOnMobile: true },
    { key: 'status', header: 'Status', mobileLabel: 'Status' },
    { key: 'actions', header: 'Actions', mobileLabel: '', className: 'text-right' },
  ];

  const tspColumns = [
    { key: 'tsp', header: 'TSP Partner', mobileLabel: 'TSP', className: 'font-medium' },
    { key: 'commission', header: 'Commission', mobileLabel: 'Commission', className: 'financial-number' },
    { key: 'tier', header: 'Tier Structure', mobileLabel: 'Tier' },
    { key: 'status', header: 'Status', mobileLabel: 'Status' },
    { key: 'actions', header: 'Actions', mobileLabel: '', className: 'text-right' },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Configuration</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? 'Pricing & revenue' : 'Manage customer pricing and partner revenue sharing'}
          </p>
        </div>
      </div>

      <Tabs defaultValue="pricing" className="space-y-3 md:space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pricing" className="text-xs md:text-sm">
            {isMobile ? 'Pricing' : 'Customer Pricing'}
          </TabsTrigger>
          <TabsTrigger value="tsp" className="text-xs md:text-sm">
            {isMobile ? 'TSP Share' : 'TSP Revenue Share'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pricing" className="space-y-3 md:space-y-4">
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>Pricing Configurations</CardTitle>
                  <CardDescription className={isMobile ? 'text-xs' : 'text-sm'}>
                    {isMobile ? 'Manage pricing models' : 'Set up and manage customer pricing models'}
                  </CardDescription>
                </div>
                <Button className="bg-gradient-primary w-full sm:w-auto" size={isMobile ? 'default' : 'default'}>
                  <Plus className="mr-2 h-4 w-4" />
                  {isMobile ? 'New' : 'New Pricing'}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-3 md:space-y-4 md:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={isMobile ? 'Search...' : 'Search by customer name...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 h-9"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[140px] h-9">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-popover">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="bank">Bank</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ResponsiveTable
                columns={pricingColumns}
                data={pricingConfigs}
                keyExtractor={(item) => item.id.toString()}
                mobileCardTitle={(config) => (
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{config.customer}</span>
                    <Badge variant={config.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                      {config.status}
                    </Badge>
                  </div>
                )}
                renderCell={(config, column) => {
                  switch (column.key) {
                    case 'customer':
                      return config.customer;
                    case 'type':
                      return config.type;
                    case 'model':
                      return config.model;
                    case 'rate':
                      return config.rate;
                    case 'effectiveDate':
                      return config.effectiveDate;
                    case 'status':
                      return (
                        <Badge variant={config.status === 'Active' ? 'default' : 'secondary'}>
                          {config.status}
                        </Badge>
                      );
                    case 'actions':
                      return (
                        <div className="flex justify-end gap-1 md:gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                            <Edit className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                            <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          </Button>
                        </div>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tsp" className="space-y-3 md:space-y-4">
          <Card>
            <CardHeader className="pb-3 md:pb-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>TSP Revenue Sharing</CardTitle>
                  <CardDescription className={isMobile ? 'text-xs' : 'text-sm'}>
                    {isMobile ? 'Commission structures' : 'Configure commission structures for TSP partners'}
                  </CardDescription>
                </div>
                <Button className="bg-gradient-primary w-full sm:w-auto" size={isMobile ? 'default' : 'default'}>
                  <Plus className="mr-2 h-4 w-4" />
                  {isMobile ? 'New' : 'New Configuration'}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-3 md:px-6">
              <ResponsiveTable
                columns={tspColumns}
                data={tspConfigs}
                keyExtractor={(item) => item.id.toString()}
                mobileCardTitle={(config) => (
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{config.tsp}</span>
                    <Badge variant="default" className="text-xs">{config.status}</Badge>
                  </div>
                )}
                renderCell={(config, column) => {
                  switch (column.key) {
                    case 'tsp':
                      return config.tsp;
                    case 'commission':
                      return config.commission;
                    case 'tier':
                      return config.tier;
                    case 'status':
                      return <Badge variant="default">{config.status}</Badge>;
                    case 'actions':
                      return (
                        <div className="flex justify-end gap-1 md:gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                            <Edit className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                            <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                          </Button>
                        </div>
                      );
                    default:
                      return null;
                  }
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Configuration;
