import { ResponseMessagesData } from '@core/types';
import { StateCreator } from 'zustand/index';

export interface MessageSlice {
  messages: ResponseMessagesData | null;
  setMessages: (data: ResponseMessagesData) => void;
}

export const createMessageSlice: StateCreator<MessageSlice> = (set) => ({
  messages: null,
  setMessages: (messages) => set({ messages }),
});
