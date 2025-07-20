import { User } from '@supabase/supabase-js';
import { StateCreator } from 'zustand';

export interface UserSlice {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
});
