import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Configuration = () => {
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="flex-1 space-y-6 p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
          <p className="text-muted-foreground mt-1">
            Manage customer pricing and partner revenue sharing
          </p>
        </div>
      </div>

      <Tabs defaultValue="pricing" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pricing">Customer Pricing</TabsTrigger>
          <TabsTrigger value="tsp">TSP Revenue Share</TabsTrigger>
        </TabsList>

        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pricing Configurations</CardTitle>
                  <CardDescription>Set up and manage customer pricing models</CardDescription>
                </div>
                <Button className="bg-gradient-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  New Pricing
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by customer name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="bank">Bank</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Pricing Model</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>Effective Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingConfigs.map((config) => (
                      <TableRow key={config.id}>
                        <TableCell className="font-medium">{config.customer}</TableCell>
                        <TableCell>{config.type}</TableCell>
                        <TableCell>{config.model}</TableCell>
                        <TableCell className="financial-number">{config.rate}</TableCell>
                        <TableCell>{config.effectiveDate}</TableCell>
                        <TableCell>
                          <Badge variant={config.status === 'Active' ? 'default' : 'secondary'}>
                            {config.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tsp" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>TSP Revenue Sharing</CardTitle>
                  <CardDescription>Configure commission structures for TSP partners</CardDescription>
                </div>
                <Button className="bg-gradient-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  New Configuration
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>TSP Partner</TableHead>
                      <TableHead>Commission</TableHead>
                      <TableHead>Tier Structure</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tspConfigs.map((config) => (
                      <TableRow key={config.id}>
                        <TableCell className="font-medium">{config.tsp}</TableCell>
                        <TableCell className="financial-number">{config.commission}</TableCell>
                        <TableCell>{config.tier}</TableCell>
                        <TableCell>
                          <Badge variant="default">{config.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Configuration;
