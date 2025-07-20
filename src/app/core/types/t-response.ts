import { AuthError, User } from '@supabase/supabase-js';
import { Session } from 'react-router-dom';

export type TSessionResponse = {
  data: {
    session: Session | null;
  };
  error: AuthError | null;
};

export type SupabaseGetUserResponse = {
  data: {
    user: User | null;
  };
  error: AuthError | null;
};
