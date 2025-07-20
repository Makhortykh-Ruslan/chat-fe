import { supabase } from '@core/supabase/supabase-client.ts';
import { TSessionResponse } from '@core/types';

export class UserService {
  static async getSession(): Promise<TSessionResponse> {
    return await supabase.auth.getSession();
  }
}
