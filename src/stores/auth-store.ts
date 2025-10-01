import { create } from 'zustand';

export type UserRole = 'client-admin' | 'dot-admin' | 'tsp-admin' | 'client-viewer' | 'dot-viewer' | 'tsp-viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'client-admin',
  },
  isAuthenticated: true,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
