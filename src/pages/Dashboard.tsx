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
  return (
    <div className="flex-1 space-y-4 sm:space-y-6 p-3 sm:p-4 md:p-6 animate-fade-in max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
            Welcome back! Here's what's happening with your settlements today.
          </p>
        </div>
      </div>

      {/* KPI Cards - Responsive Grid */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="transition-smooth hover:shadow-lg touch-manipulation active:scale-[0.98]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 py-3 sm:p-6 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
          </CardHeader>
          <CardContent className="px-4 py-3 pt-0 sm:p-6 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold financial-number">$791K</div>
            <div className="flex items-center text-[10px] sm:text-xs text-success mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth hover:shadow-lg touch-manipulation active:scale-[0.98]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 py-3 sm:p-6 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-warning flex-shrink-0" />
          </CardHeader>
          <CardContent className="px-4 py-3 pt-0 sm:p-6 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold financial-number">$125K</div>
            <div className="flex items-center text-[10px] sm:text-xs text-muted-foreground mt-1">
              <span className="truncate">45 awaiting</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth hover:shadow-lg touch-manipulation active:scale-[0.98]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 py-3 sm:p-6 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Disputes</CardTitle>
            <AlertCircle className="h-4 w-4 text-error flex-shrink-0" />
          </CardHeader>
          <CardContent className="px-4 py-3 pt-0 sm:p-6 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold financial-number">8</div>
            <div className="flex items-center text-[10px] sm:text-xs text-error mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">+2 today</span>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-smooth hover:shadow-lg touch-manipulation active:scale-[0.98]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 px-4 py-3 sm:p-6 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">API Usage</CardTitle>
            <Activity className="h-4 w-4 text-primary flex-shrink-0" />
          </CardHeader>
          <CardContent className="px-4 py-3 pt-0 sm:p-6 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold financial-number">1.2M</div>
            <div className="flex items-center text-[10px] sm:text-xs text-muted-foreground mt-1">
              <span className="truncate">78% used</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row - Responsive Stacking */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="touch-manipulation">
          <CardHeader className="px-4 py-3 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Revenue Trends</CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">Monthly revenue vs expenses</p>
          </CardHeader>
          <CardContent className="px-2 sm:px-6 pb-4">
            <ResponsiveContainer width="100%" height={250}>
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
          </CardContent>
        </Card>

        <Card className="touch-manipulation">
          <CardHeader className="px-4 py-3 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Settlement Status</CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">Current settlement breakdown</p>
          </CardHeader>
          <CardContent className="px-2 sm:px-6 pb-4">
            <ResponsiveContainer width="100%" height={250}>
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
          </CardContent>
        </Card>
      </div>

      {/* Top Customers - Responsive */}
      <Card className="touch-manipulation">
        <CardHeader className="px-4 py-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Top 5 Customers by Volume</CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">Highest transaction volumes this month</p>
        </CardHeader>
        <CardContent className="px-2 sm:px-6 pb-4">
          <ResponsiveContainer width="100%" height={280}>
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
        </CardContent>
      </Card>

      {/* Recent Activity - Touch Optimized */}
      <Card className="touch-manipulation">
        <CardHeader className="px-4 py-3 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">Latest transactions and events</p>
        </CardHeader>
        <CardContent className="px-4 py-3 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {[
              { action: 'Settlement approved', entity: 'TSP Partner A', amount: '$15,420', time: '2 minutes ago', icon: DollarSign, color: 'text-success' },
              { action: 'Invoice generated', entity: 'Acme Corp', amount: '$8,750', time: '15 minutes ago', icon: CreditCard, color: 'text-primary' },
              { action: 'Dispute raised', entity: 'TechStart Inc', amount: '$3,200', time: '1 hour ago', icon: AlertCircle, color: 'text-error' },
              { action: 'New customer added', entity: 'Global Finance', amount: '-', time: '2 hours ago', icon: Users, color: 'text-muted-foreground' },
              { action: 'Settlement completed', entity: 'Swift Pay', amount: '$12,300', time: '3 hours ago', icon: DollarSign, color: 'text-success' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 last:pb-0 border-b last:border-0 touch-manipulation hover:bg-accent/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-2 rounded-lg transition-colors">
                <div className={`rounded-full p-2 bg-muted ${activity.color} flex-shrink-0`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">{activity.action}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{activity.entity}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs sm:text-sm font-semibold financial-number">{activity.amount}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{activity.time}</p>
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
