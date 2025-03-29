import { supabase } from '@core/services/supabaseClient.ts';
import type {
  AuthResponse,
  AuthTokenResponsePassword,
} from '@supabase/auth-js/src/lib/types.ts';

import { TLoginForm } from '../../pages/auth/hooks/useLoginHooks.tsx';

export const authSupabase = async (
  data: TLoginForm,
): Promise<AuthTokenResponsePassword> =>
  await supabase.auth.signInWithPassword(data);

export const registrationSupabase = async (
  data: TLoginForm,
): Promise<AuthResponse> => await supabase.auth.signUp(data);
