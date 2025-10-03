import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { AppSidebar } from './app-sidebar';
import { PageHeader } from './page-header';

const { Content } = Layout;

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <PageHeader />
        <Content style={{ margin: 0, overflow: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
