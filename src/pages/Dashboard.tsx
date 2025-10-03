import { Card, Typography, Row, Col, Tag, Statistic, List, Avatar, Space } from 'antd';
import {
  DollarOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  ApiOutlined,
  ArrowUpOutlined,
  UserOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import {
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
  ResponsiveContainer,
} from 'recharts';

const { Title, Text, Paragraph } = Typography;

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 28000 },
  { month: 'Feb', revenue: 52000, expenses: 31000 },
  { month: 'Mar', revenue: 48000, expenses: 29000 },
  { month: 'Apr', revenue: 61000, expenses: 35000 },
  { month: 'May', revenue: 58000, expenses: 33000 },
  { month: 'Jun', revenue: 67000, expenses: 38000 },
];

const settlementData = [
  { name: 'Completed', value: 234, color: '#00D924' },
  { name: 'Pending', value: 45, color: '#FFC043' },
  { name: 'Rejected', value: 12, color: '#DF1B41' },
  { name: 'In Review', value: 28, color: '#635BFF' },
];

const topCustomers = [
  { name: 'Acme Corp', volume: 125000 },
  { name: 'TechStart Inc', volume: 98000 },
  { name: 'Global Finance', volume: 87000 },
  { name: 'Swift Pay', volume: 76000 },
  { name: 'Digital Bank', volume: 65000 },
];

const recentActivity = [
  { action: 'Settlement approved', entity: 'TSP Partner A', amount: '$15,420', time: '2 min ago', icon: DollarOutlined, color: '#00D924' },
  { action: 'Invoice generated', entity: 'Acme Corp', amount: '$8,750', time: '15 min ago', icon: FileTextOutlined, color: '#635BFF' },
  { action: 'Dispute raised', entity: 'TechStart Inc', amount: '$3,200', time: '1 hour ago', icon: WarningOutlined, color: '#DF1B41' },
  { action: 'New customer added', entity: 'Global Finance', amount: '-', time: '2 hours ago', icon: UserOutlined, color: '#425466' },
  { action: 'Settlement completed', entity: 'Swift Pay', amount: '$12,300', time: '3 hours ago', icon: DollarOutlined, color: '#00D924' },
];

const Dashboard = () => {
  return (
    <div style={{ padding: '24px 32px' }}>
      <div style={{ marginBottom: 40 }}>
        <Title level={2} style={{ marginBottom: 4, fontWeight: 600 }}>
          Dashboard
        </Title>
        <Paragraph style={{ fontSize: 15, color: '#425466', margin: 0 }}>
          Welcome back! Here's what's happening with your settlements today.
        </Paragraph>
      </div>

      {/* KPI Cards */}
      <Row gutter={[20, 20]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 6, 
                background: '#635BFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <DollarOutlined style={{ fontSize: 20 }} />
              </div>
              <Tag color="success" style={{ border: 'none', background: 'rgba(0, 217, 36, 0.1)', color: '#00D924' }}>
                +12.5%
              </Tag>
            </div>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>
              Total Revenue
            </Text>
            <Title level={3} style={{ margin: 0, fontWeight: 600, letterSpacing: '-0.02em' }}>
              $791,000
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 6, 
                background: '#FFC043',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <ClockCircleOutlined style={{ fontSize: 20 }} />
              </div>
              <Tag style={{ border: 'none', background: 'rgba(255, 192, 67, 0.1)', color: '#FFC043' }}>
                45 pending
              </Tag>
            </div>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>
              Pending Settlements
            </Text>
            <Title level={3} style={{ margin: 0, fontWeight: 600, letterSpacing: '-0.02em' }}>
              $125,400
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 6, 
                background: '#DF1B41',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <WarningOutlined style={{ fontSize: 20 }} />
              </div>
              <Tag color="error" style={{ border: 'none', background: 'rgba(223, 27, 65, 0.1)', color: '#DF1B41' }}>
                +2 today
              </Tag>
            </div>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>
              Active Disputes
            </Text>
            <Title level={3} style={{ margin: 0, fontWeight: 600, letterSpacing: '-0.02em' }}>
              8
            </Title>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 6, 
                background: '#635BFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <ApiOutlined style={{ fontSize: 20 }} />
              </div>
              <Tag style={{ border: 'none', background: 'rgba(99, 91, 255, 0.1)', color: '#635BFF' }}>
                78%
              </Tag>
            </div>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 4 }}>
              API Consumption
            </Text>
            <Title level={3} style={{ margin: 0, fontWeight: 600, letterSpacing: '-0.02em' }}>
              1.2M
            </Title>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[20, 20]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={12}>
          <Card>
            <Title level={5} style={{ marginBottom: 4, fontWeight: 600 }}>
              Revenue Trends
            </Title>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 24 }}>
              Monthly revenue vs expenses (last 6 months)
            </Text>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E3E8EE" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: 13, fill: '#425466' }} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: 13, fill: '#425466' }} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E3E8EE', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)' }} />
                <Area type="monotone" dataKey="revenue" stroke="#635BFF" fill="#635BFF" fillOpacity={0.1} strokeWidth={2} name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#DF1B41" fill="#DF1B41" fillOpacity={0.1} strokeWidth={2} name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card>
            <Title level={5} style={{ marginBottom: 4, fontWeight: 600 }}>
              Settlement Status
            </Title>
            <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 24 }}>
              Current settlement breakdown
            </Text>
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
          </Card>
        </Col>
      </Row>

      {/* Top Customers */}
      <Card style={{ marginBottom: 20 }}>
        <Title level={5} style={{ marginBottom: 4, fontWeight: 600 }}>
          Top 5 Customers by Volume
        </Title>
        <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 24 }}>
          Highest transaction volumes this month
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topCustomers} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E3E8EE" horizontal={false} />
            <XAxis type="number" axisLine={false} tickLine={false} style={{ fontSize: 13, fill: '#425466' }} />
            <YAxis dataKey="name" type="category" width={120} axisLine={false} tickLine={false} style={{ fontSize: 13, fill: '#425466' }} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} contentStyle={{ borderRadius: 8, border: '1px solid #E3E8EE', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11)' }} />
            <Bar dataKey="volume" fill="#635BFF" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Activity */}
      <Card>
        <Title level={5} style={{ marginBottom: 4, fontWeight: 600 }}>
          Recent Activity
        </Title>
        <Text type="secondary" style={{ fontSize: 13, display: 'block', marginBottom: 24 }}>
          Latest transactions and events
        </Text>
        <List
          itemLayout="horizontal"
          dataSource={recentActivity}
          renderItem={(item) => {
            const Icon = item.icon;
            return (
              <List.Item
                style={{
                  padding: '16px 0',
                  transition: 'background-color 0.15s ease',
                  borderRadius: 6,
                }}
              >
                <List.Item.Meta
                  avatar={
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 6,
                      background: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}>
                      <Icon style={{ fontSize: 20 }} />
                    </div>
                  }
                  title={<Text style={{ fontWeight: 500, fontSize: 15 }}>{item.action}</Text>}
                  description={<Text type="secondary" style={{ fontSize: 13 }}>{item.entity}</Text>}
                />
                <div style={{ textAlign: 'right' }}>
                  <Text strong style={{ display: 'block', fontSize: 15 }}>{item.amount}</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>{item.time}</Text>
                </div>
              </List.Item>
            );
          }}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
