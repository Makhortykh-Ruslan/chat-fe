import { supabase } from '@core/supabase/supabase-client.ts';
import { User } from '@supabase/supabase-js';

export class UsersService {
  static async getAllUsersChat(currentUser: User): Promise<any> {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('sender_id, receiver_id')
      .or(`sender_id.eq.${currentUser.id},receiver_id.eq.${currentUser.id}`);

    if (error) throw error;

    const interlocutorIds = Array.from(
      new Set(
        messages
          .flatMap(({ sender_id, receiver_id }) => [sender_id, receiver_id])
          .filter((id) => id !== currentUser.id),
      ),
    );

    if (interlocutorIds.length === 0) return [];

    const { data: users, error: profilesError } = await supabase
      .from('users')
      .select('id, userName')
      .in('id', interlocutorIds);

    if (profilesError) throw profilesError;

    return users;
  }

  static async getAllUsers(): Promise<any> {
    return supabase.from('users').select('*');
  }
}
