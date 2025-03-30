import { supabase } from '@core/services/supabase-client.ts';
import { TAuthForm } from '@core/types';
import { AuthResponse, AuthTokenResponsePassword } from '@supabase/supabase-js';

export class AuthService {
  static async login(data: TAuthForm): Promise<AuthTokenResponsePassword> {
    return await supabase.auth.signInWithPassword(data);
  }

  static async register(data: TAuthForm): Promise<AuthResponse> {
    return await supabase.auth.signUp(data);
  }
}
