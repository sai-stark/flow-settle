import { LayoutDashboard, Settings, DollarSign, FileText, Wallet, MessageSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Config', url: '/configuration', icon: Settings },
  { title: 'Settle', url: '/settlements', icon: DollarSign },
  { title: 'Invoice', url: '/invoices', icon: FileText },
  { title: 'Balance', url: '/balance', icon: Wallet },
  { title: 'Dispute', url: '/disputes', icon: MessageSquare },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.url === '/'}
            className={({ isActive }) =>
              cn(
                'flex min-w-[60px] flex-col items-center justify-center gap-1 rounded-md px-2 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn('h-5 w-5', isActive && 'text-primary')} />
                <span className="truncate">{item.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
