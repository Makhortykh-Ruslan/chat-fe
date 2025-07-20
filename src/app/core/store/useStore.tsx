import { createUserSlice, UserSlice } from '@core/store/slices';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = UserSlice;

export const useStore = create<StoreState>()(
  devtools((...rest) => ({
    ...createUserSlice(...rest),
  })),
);
