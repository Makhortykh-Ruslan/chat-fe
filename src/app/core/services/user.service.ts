import { supabase } from '@core/supabase/supabase-client.ts';
import { SupabaseGetUserResponse, TSessionResponse } from '@core/types';

export class UserService {
  static async getSession(): Promise<TSessionResponse> {
    return (await supabase.auth.getSession()) as TSessionResponse;
  }

  static async getUser(): Promise<SupabaseGetUserResponse> {
    return await supabase.auth.getUser();
  }
}
