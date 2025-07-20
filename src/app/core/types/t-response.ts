import { AuthError } from '@supabase/supabase-js';
import { Session } from 'react-router-dom';

export type TSessionResponse = {
  data: {
    session: Session | null;
  };
  error: AuthError | null;
};
