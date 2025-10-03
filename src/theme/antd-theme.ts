import type { ThemeConfig } from 'antd';

export const getAntdTheme = (mode: 'light' | 'dark'): ThemeConfig => ({
  token: {
    colorPrimary: mode === 'light' ? '#635BFF' : '#7A73FF',
    colorSuccess: '#00D924',
    colorWarning: '#FFC043',
    colorError: '#DF1B41',
    colorInfo: '#635BFF',
    colorBgBase: mode === 'light' ? '#FFFFFF' : '#0A2540',
    colorBgLayout: mode === 'light' ? '#F6F9FC' : '#0A2540',
    colorBgContainer: mode === 'light' ? '#FFFFFF' : '#0E1C2E',
    colorBorder: mode === 'light' ? '#E3E8EE' : '#1A2F45',
    colorText: mode === 'light' ? '#0A2540' : '#F6F9FC',
    colorTextSecondary: mode === 'light' ? '#425466' : '#89A3B9',
    borderRadius: 6,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 15,
    fontSizeHeading1: 40,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 18,
    lineHeight: 1.6,
  },
  components: {
    Card: {
      boxShadowTertiary: mode === 'light' 
        ? '0 1px 3px rgba(50, 50, 93, 0.05), 0 1px 0 rgba(0, 0, 0, 0.02)'
        : '0 1px 3px rgba(0, 0, 0, 0.3)',
      borderRadiusLG: 8,
    },
    Button: {
      borderRadius: 6,
      controlHeight: 36,
      fontWeight: 500,
    },
    Layout: {
      headerBg: mode === 'light' ? '#FFFFFF' : '#0E1C2E',
      siderBg: mode === 'light' ? '#FFFFFF' : '#0A2540',
      bodyBg: mode === 'light' ? '#F6F9FC' : '#0A2540',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: mode === 'light' ? 'rgba(99, 91, 255, 0.08)' : 'rgba(122, 115, 255, 0.15)',
      itemSelectedColor: mode === 'light' ? '#635BFF' : '#7A73FF',
      itemHoverBg: mode === 'light' ? 'rgba(99, 91, 255, 0.04)' : 'rgba(122, 115, 255, 0.08)',
    },
    Table: {
      borderColor: mode === 'light' ? '#E3E8EE' : '#1A2F45',
    },
  },
});
