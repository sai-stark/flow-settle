import { Layout, Badge, Space } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { ThemeToggle } from './theme-toggle';

const { Header } = Layout;

export function PageHeader() {
  return (
    <Header 
      style={{ 
        padding: '0 24px',
        background: 'var(--ant-layout-header-bg)',
        borderBottom: '1px solid var(--ant-color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Space size="middle">
        <Badge count={3} size="small">
          <BellOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
        </Badge>
        <ThemeToggle />
      </Space>
    </Header>
  );
}
