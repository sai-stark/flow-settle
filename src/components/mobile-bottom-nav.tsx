import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  DollarSign,
  FileText,
  Wallet
} from 'lucide-react';

const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Settlements', url: '/settlements', icon: DollarSign },
  { title: 'Invoices', url: '/invoices', icon: FileText },
  { title: 'Balance', url: '/balance', icon: Wallet },
  { title: 'Settings', url: '/configuration', icon: Settings },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border backdrop-blur-sm bg-background/95 md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.url === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[60px] h-12 px-2 rounded-lg transition-all touch-manipulation ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-[10px] mt-1 font-medium">{item.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
