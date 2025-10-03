import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
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
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ mb: 0.5, fontWeight: 600 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your settlements today.
        </Typography>
      </Box>

      {/* KPI Cards */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        gap: 2.5,
        mb: 4
      }}>
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
              <Box sx={{ p: 1.25, borderRadius: 1.5, bgcolor: 'primary.main', color: 'white', display: 'flex' }}>
                <AttachMoney sx={{ fontSize: 20 }} />
              </Box>
              <Chip label="+12.5%" size="small" sx={{ bgcolor: 'rgba(0, 217, 36, 0.1)', color: 'success.main', fontWeight: 500, border: 'none' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.8125rem' }}>
              Total Revenue
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
              $791,000
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
              <Box sx={{ p: 1.25, borderRadius: 1.5, bgcolor: 'warning.main', color: 'white', display: 'flex' }}>
                <Schedule sx={{ fontSize: 20 }} />
              </Box>
              <Chip label="45 pending" size="small" sx={{ bgcolor: 'rgba(255, 192, 67, 0.1)', color: 'warning.main', fontWeight: 500, border: 'none' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.8125rem' }}>
              Pending Settlements
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
              $125,400
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
              <Box sx={{ p: 1.25, borderRadius: 1.5, bgcolor: 'error.main', color: 'white', display: 'flex' }}>
                <Warning sx={{ fontSize: 20 }} />
              </Box>
              <Chip label="+2 today" size="small" sx={{ bgcolor: 'rgba(223, 27, 65, 0.1)', color: 'error.main', fontWeight: 500, border: 'none' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.8125rem' }}>
              Active Disputes
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
              8
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
              <Box sx={{ p: 1.25, borderRadius: 1.5, bgcolor: 'primary.main', color: 'white', display: 'flex' }}>
                <Analytics sx={{ fontSize: 20 }} />
              </Box>
              <Chip label="78%" size="small" sx={{ bgcolor: 'rgba(99, 91, 255, 0.1)', color: 'primary.main', fontWeight: 500, border: 'none' }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.8125rem' }}>
              API Consumption
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
              1.2M
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Charts Row */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
        gap: 2.5,
        mb: 4
      }}>
        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
              Revenue Trends
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.8125rem' }}>
              Monthly revenue vs expenses (last 6 months)
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E3E8EE" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '0.8125rem', fill: '#425466' }} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '0.8125rem', fill: '#425466' }} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E3E8EE', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)' }} />
                <Area type="monotone" dataKey="revenue" stroke="#635BFF" fill="#635BFF" fillOpacity={0.1} strokeWidth={2} name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#DF1B41" fill="#DF1B41" fillOpacity={0.1} strokeWidth={2} name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
              Settlement Status
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.8125rem' }}>
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
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={0}
                >
                  {settlementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E3E8EE', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Top Customers */}
      <Card sx={{ mb: 2.5 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
            Top 5 Customers by Volume
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.8125rem' }}>
            Highest transaction volumes this month
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCustomers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E3E8EE" horizontal={false} />
              <XAxis type="number" axisLine={false} tickLine={false} style={{ fontSize: '0.8125rem', fill: '#425466' }} />
              <YAxis dataKey="name" type="category" width={120} axisLine={false} tickLine={false} style={{ fontSize: '0.8125rem', fill: '#425466' }} />
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} contentStyle={{ borderRadius: 8, border: '1px solid #E3E8EE', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)' }} />
              <Bar dataKey="volume" fill="#635BFF" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.8125rem' }}>
            Latest transactions and events
          </Typography>
          <List sx={{ p: 0 }}>
            {recentActivity.map((activity, idx) => {
              const IconComponent = activity.icon;
              return (
                <ListItem 
                  key={idx} 
                  divider={idx < recentActivity.length - 1}
                  sx={{ 
                    px: 0, 
                    py: 2,
                    '&:hover': { bgcolor: 'rgba(99, 91, 255, 0.03)' },
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <ListItemAvatar>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: 1.5, 
                      bgcolor: `${activity.color}.main`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <IconComponent sx={{ fontSize: 20 }} />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.9375rem' }}>{activity.action}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>{activity.entity}</Typography>}
                  />
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" fontWeight={600} sx={{ fontVariantNumeric: 'tabular-nums', fontSize: '0.9375rem' }}>
                      {activity.amount}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
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
