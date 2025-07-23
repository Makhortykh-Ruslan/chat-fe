import { supabase } from '@core/supabase/supabase-client.ts';
import {
  SupabaseGetUserResponse,
  TAuthForm,
  TSessionResponse,
} from '@core/types';
import {
  AuthResponse,
  AuthTokenResponsePassword,
  SignUpWithPasswordCredentials,
  User,
} from '@supabase/supabase-js';

export class AuthService {
  static async login(data: TAuthForm): Promise<AuthTokenResponsePassword> {
    return await supabase.auth.signInWithPassword(data);
  }

  static async register(
    data: SignUpWithPasswordCredentials,
  ): Promise<AuthResponse> {
    return await supabase.auth.signUp(data);
  }

  static async getSession(): Promise<TSessionResponse> {
    return (await supabase.auth.getSession()) as TSessionResponse;
  }

  static async getUser(): Promise<SupabaseGetUserResponse> {
    return await supabase.auth.getUser();
  }

  static async updateUser(data: {
    data: { username: string };
  }): Promise<SupabaseGetUserResponse> {
    return await supabase.auth.updateUser(data);
  }

  static async getVerifiedUser(): Promise<User | null> {
    const { data } = await AuthService.getSession();
    if (!data.session) return null;

    const result = await AuthService.getUser();
    return result.data?.user ?? null;
  }
}
