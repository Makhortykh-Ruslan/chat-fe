import { StateCreator } from 'zustand/index';

export interface ChatSlice {
  currentChat: any;
  setCurrenChat: (data: any) => void;
}

export const createChatSlice: StateCreator<ChatSlice> = (set) => ({
  currentChat: null,
  setCurrenChat: (currentChat): void => {
    console.log('currentChat', currentChat);
    set({ currentChat });
  },
});
