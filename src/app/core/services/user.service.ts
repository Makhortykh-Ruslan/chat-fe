import { supabase } from '@core/supabase/supabase-client.ts';
import { SupabaseGetUserResponse, TSessionResponse } from '@core/types';
import { User } from '@supabase/supabase-js';

export class UserService {
  static async getSession(): Promise<TSessionResponse> {
    return (await supabase.auth.getSession()) as TSessionResponse;
  }

  static async getUser(): Promise<SupabaseGetUserResponse> {
    return await supabase.auth.getUser();
  }

  static async getVerifiedUser(): Promise<User | null> {
    const { data } = await UserService.getSession();
    if (!data.session) return null;

    const result = await UserService.getUser();
    return result.data?.user ?? null;
  }
}
