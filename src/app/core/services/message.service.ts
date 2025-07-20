import { MessageModel } from '@core/model/message.model.ts';
import { supabase } from '@core/supabase/supabase-client.ts';
import { ResponseMessagesData } from '@core/types';
import { User } from '@supabase/supabase-js';

export class MessageService {
  static async send(model: MessageModel): Promise<any> {
    return supabase.from('messages').insert(model);
  }

  static async get(currentUser: User): Promise<ResponseMessagesData> {
    return supabase
      .from('messages')
      .select('*')
      .or(`sender_id.eq.${currentUser.id},receiver_id.eq.${currentUser.id}`)
      .order('created_at', { ascending: true });
  }
}
