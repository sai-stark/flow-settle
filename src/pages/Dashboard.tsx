import { 
  Grid,
  Card, 
  CardContent, 
  Typography, 
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';
import { 
  TrendingUp, 
  Schedule, 
  Warning, 
  Analytics,
  AttachMoney,
  Person,
  CreditCard,
  ArrowUpward,
  ArrowDownward
} from '@mui/icons-material';
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
];

const settlementData = [
  { name: 'Completed', value: 234, color: '#10B981' },
  { name: 'Pending', value: 45, color: '#F59E0B' },
  { name: 'Rejected', value: 12, color: '#EF4444' },
  { name: 'In Review', value: 28, color: '#0066CC' },
];

const topCustomers = [
  { name: 'Acme Corp', volume: 125000 },
  { name: 'TechStart Inc', volume: 98000 },
  { name: 'Global Finance', volume: 87000 },
  { name: 'Swift Pay', volume: 76000 },
  { name: 'Digital Bank', volume: 65000 },
];

const recentActivity = [
  { action: 'Settlement approved', entity: 'TSP Partner A', amount: '$15,420', time: '2 min ago', icon: AttachMoney, color: 'success' },
  { action: 'Invoice generated', entity: 'Acme Corp', amount: '$8,750', time: '15 min ago', icon: CreditCard, color: 'primary' },
  { action: 'Dispute raised', entity: 'TechStart Inc', amount: '$3,200', time: '1 hour ago', icon: Warning, color: 'error' },
  { action: 'New customer added', entity: 'Global Finance', amount: '-', time: '2 hours ago', icon: Person, color: 'default' },
  { action: 'Settlement completed', entity: 'Swift Pay', amount: '$12,300', time: '3 hours ago', icon: AttachMoney, color: 'success' },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Welcome back! Here's what's happening with your settlements today.
        </Typography>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 3 }}>
        <Grid xs={12} sm={6} lg={3}>
          <Card sx={{ transition: 'all 0.3s', '&:hover': { boxShadow: 4 } }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Total Revenue
                  </Typography>
                  <Typography variant="h4" fontWeight={700} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                    $791,000
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <ArrowUpward sx={{ fontSize: 16, color: 'success.main', mr: 0.5 }} />
                    <Typography variant="caption" color="success.main">
                      +12.5% from last month
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <AttachMoney />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} lg={3}>
          <Card sx={{ transition: 'all 0.3s', '&:hover': { boxShadow: 4 } }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Pending Settlements
                  </Typography>
                  <Typography variant="h4" fontWeight={700} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                    $125,400
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    45 settlements awaiting
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <Schedule />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} lg={3}>
          <Card sx={{ transition: 'all 0.3s', '&:hover': { boxShadow: 4 } }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Active Disputes
                  </Typography>
                  <Typography variant="h4" fontWeight={700} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                    8
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <ArrowUpward sx={{ fontSize: 16, color: 'error.main', mr: 0.5 }} />
                    <Typography variant="caption" color="error.main">
                      +2 from yesterday
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: 'error.main' }}>
                  <Warning />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} lg={3}>
          <Card sx={{ transition: 'all 0.3s', '&:hover': { boxShadow: 4 } }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    API Consumption
                  </Typography>
                  <Typography variant="h4" fontWeight={700} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                    1.2M
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    78% of monthly limit
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <Analytics />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 3 }}>
        <Grid xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue Trends
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Monthly revenue vs expenses (last 6 months)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stroke="#0066CC" fill="#0066CC" fillOpacity={0.3} name="Revenue" />
                  <Area type="monotone" dataKey="expenses" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="Expenses" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Settlement Status
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Current settlement breakdown
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
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
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Top Customers */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 3 }}>
        <Grid xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top 5 Customers by Volume
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Highest transaction volumes this month
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topCustomers} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                  <Bar dataKey="volume" fill="#0066CC" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Latest transactions and events
          </Typography>
          <List>
            {recentActivity.map((activity, idx) => {
              const IconComponent = activity.icon;
              return (
                <ListItem key={idx} divider={idx < recentActivity.length - 1}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: `${activity.color}.main` }}>
                      <IconComponent />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.action}
                    secondary={activity.entity}
                  />
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" fontWeight={600} sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {activity.amount}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {activity.time}
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
