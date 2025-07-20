import {
  createMessageSlice,
  createUserSlice,
  MessageSlice,
  UserSlice,
} from '@core/store/slices';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = UserSlice & MessageSlice;

export const useStore = create<StoreState>()(
  devtools((...rest) => ({
    ...createUserSlice(...rest),
    ...createMessageSlice(...rest),
  })),
);
