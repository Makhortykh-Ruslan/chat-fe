import { StateCreator } from 'zustand/index';

export interface ChatSlice {
  currentChat: any;
  activeCurrentChat: (data: any) => void;
}

export const createChatSlice: StateCreator<ChatSlice> = (set) => ({
  currentChat: null,
  activeCurrentChat: (currentChat): void => {
    set({ currentChat });
  },
});
