import { supabase } from '@core/supabase/supabase-client.ts';
import { AuthResponse, AuthTokenResponsePassword } from '@supabase/supabase-js';

import { TAuthForm } from '../types';

export class AuthService {
  static async login(data: TAuthForm): Promise<AuthTokenResponsePassword> {
    return await supabase.auth.signInWithPassword(data);
  }

  static async register(data: TAuthForm): Promise<AuthResponse> {
    return await supabase.auth.signUp(data);
  }
}
