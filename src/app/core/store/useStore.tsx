import {
  createMessageSlice,
  createUserSlice,
  MessageSlice,
  UserSlice,
} from '@core/store/slices';
import { ChatSlice, createChatSlice } from '@core/store/slices/chat-slice.ts';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoreState = UserSlice & MessageSlice & ChatSlice;

export const useStore = create<StoreState>()(
  devtools((...rest) => ({
    ...createUserSlice(...rest),
    ...createMessageSlice(...rest),
    ...createChatSlice(...rest),
  })),
);
