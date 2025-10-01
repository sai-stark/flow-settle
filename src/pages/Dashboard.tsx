import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  Activity,
  DollarSign,
  Users,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useIsMobile, useIsTablet } from '@/hooks/use-media-query';
import { ResponsiveChartContainer } from '@/components/responsive-chart-container';

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 28000 },
  { month: 'Feb', revenue: 52000, expenses: 31000 },
  { month: 'Mar', revenue: 48000, expenses: 29000 },
  { month: 'Apr', revenue: 61000, expenses: 35000 },
  { month: 'May', revenue: 58000, expenses: 33000 },
  { month: 'Jun', revenue: 67000, expenses: 38000 },
  { month: 'Jul', revenue: 72000, expenses: 41000 },
  { month: 'Aug', revenue: 69000, expenses: 39000 },
  { month: 'Sep', revenue: 75000, expenses: 42000 },
  { month: 'Oct', revenue: 81000, expenses: 45000 },
  { month: 'Nov', revenue: 78000, expenses: 44000 },
  { month: 'Dec', revenue: 85000, expenses: 48000 },
];

const settlementData = [
  { name: 'Completed', value: 234, color: 'hsl(var(--success))' },
  { name: 'Pending', value: 45, color: 'hsl(var(--warning))' },
  { name: 'Rejected', value: 12, color: 'hsl(var(--error))' },
  { name: 'In Review', value: 28, color: 'hsl(var(--primary))' },
];

const topCustomers = [
  { name: 'Acme Corp', volume: 125000 },
  { name: 'TechStart Inc', volume: 98000 },
  { name: 'Global Finance', volume: 87000 },
  { name: 'Swift Pay', volume: 76000 },
  { name: 'Digital Bank', volume: 65000 },
];

const Dashboard = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className="flex-1 space-y-4 p-4 animate-fade-in md:space-y-6 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            {isMobile ? "Today's overview" : "Welcome back! Here's what's happening with your settlements today."}
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
        <Card className="transition-smooth active:scale-[0.98] md:hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium md:text-sm">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary md:h-5 md:w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold financial-number md:text-2xl">$791,000</div>
            <div className="flex items-center text-xs text-success mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+12.5%{!isMobile && ' from last month'}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98] md:hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium md:text-sm">Pending Settlements</CardTitle>
            <Clock className="h-4 w-4 text-warning md:h-5 md:w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold financial-number md:text-2xl">$125,400</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <span>45 {!isMobile && 'settlements'} awaiting</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98] md:hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium md:text-sm">Active Disputes</CardTitle>
            <AlertCircle className="h-4 w-4 text-error md:h-5 md:w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold financial-number md:text-2xl">8</div>
            <div className="flex items-center text-xs text-error mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+2 {!isMobile && 'from yesterday'}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth active:scale-[0.98] md:hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium md:text-sm">API Consumption</CardTitle>
            <Activity className="h-4 w-4 text-primary md:h-5 md:w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold financial-number md:text-2xl">1.2M</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <span>78% {!isMobile && 'of monthly limit'}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-3 grid-cols-1 md:gap-4 lg:grid-cols-2">
        <ResponsiveChartContainer
          title="Revenue Trends"
          description={isMobile ? "Revenue vs expenses" : "Monthly revenue vs expenses (last 12 months)"}
          mobileHeight={250}
          desktopHeight={300}
        >
          <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--error))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--error))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)"
                  name="Revenue"
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="hsl(var(--error))" 
                  fillOpacity={1} 
                  fill="url(#colorExpenses)"
                  name="Expenses"
                />
              </AreaChart>
            </ResponsiveContainer>
        </ResponsiveChartContainer>

        <ResponsiveChartContainer
          title="Settlement Status"
          description={isMobile ? "Breakdown" : "Current settlement breakdown"}
          mobileHeight={250}
          desktopHeight={300}
        >
          <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={settlementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {settlementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
        </ResponsiveChartContainer>
      </div>

      {/* Top Customers */}
      <ResponsiveChartContainer
        title="Top 5 Customers by Volume"
        description={isMobile ? "Highest volumes" : "Highest transaction volumes this month"}
        mobileHeight={250}
        desktopHeight={300}
      >
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topCustomers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis type="number" className="text-xs" />
              <YAxis dataKey="name" type="category" width={120} className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Bar dataKey="volume" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
      </ResponsiveChartContainer>

      {/* Recent Activity */}
      <Card className="transition-smooth">
        <CardHeader>
          <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>Recent Activity</CardTitle>
          <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {isMobile ? 'Latest events' : 'Latest transactions and events'}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 md:space-y-4">
            {[
              { action: 'Settlement approved', entity: 'TSP Partner A', amount: '$15,420', time: '2 min ago', timeShort: '2m', icon: DollarSign, color: 'text-success' },
              { action: 'Invoice generated', entity: 'Acme Corp', amount: '$8,750', time: '15 min ago', timeShort: '15m', icon: CreditCard, color: 'text-primary' },
              { action: 'Dispute raised', entity: 'TechStart Inc', amount: '$3,200', time: '1 hour ago', timeShort: '1h', icon: AlertCircle, color: 'text-error' },
              { action: 'New customer added', entity: 'Global Finance', amount: '-', time: '2 hours ago', timeShort: '2h', icon: Users, color: 'text-muted-foreground' },
              { action: 'Settlement completed', entity: 'Swift Pay', amount: '$12,300', time: '3 hours ago', timeShort: '3h', icon: DollarSign, color: 'text-success' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 pb-3 last:pb-0 border-b last:border-0 md:gap-4 md:pb-4">
                <div className={`rounded-full p-1.5 bg-muted ${activity.color} md:p-2`}>
                  <activity.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate md:text-sm">{activity.action}</p>
                  <p className="text-[10px] text-muted-foreground truncate md:text-xs">{activity.entity}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-semibold financial-number md:text-sm">{activity.amount}</p>
                  <p className="text-[10px] text-muted-foreground md:text-xs">
                    {isMobile ? activity.timeShort : activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
