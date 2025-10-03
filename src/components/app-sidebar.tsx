import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  SettingOutlined,
  FileTextOutlined,
  WalletOutlined,
  WarningOutlined,
  SwapOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

interface AppSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const menuItems = [
  { key: '/', label: 'Dashboard', icon: <DashboardOutlined /> },
  { key: '/configuration', label: 'Configuration', icon: <SettingOutlined /> },
  { key: '/settlements', label: 'Settlements', icon: <SwapOutlined /> },
  { key: '/invoices', label: 'Invoices', icon: <FileTextOutlined /> },
  { key: '/balance', label: 'Balance', icon: <WalletOutlined /> },
  { key: '/disputes', label: 'Disputes', icon: <WarningOutlined /> },
];

export function AppSidebar({ collapsed, onCollapse }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={240}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{ 
        padding: collapsed ? '16px 8px' : '16px 24px', 
        textAlign: collapsed ? 'center' : 'left',
        borderBottom: '1px solid rgba(227, 232, 238, 0.2)'
      }}>
        <Title 
          level={4} 
          style={{ 
            margin: 0, 
            color: '#635BFF',
            fontSize: collapsed ? '16px' : '20px',
            fontWeight: 700
          }}
        >
          {collapsed ? 'BS' : 'BillSettle'}
        </Title>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{ borderRight: 0, marginTop: 8 }}
      />
    </Sider>
  );
}
