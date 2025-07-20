import { MessageModel } from '@core/model/message.model.ts';
import { supabase } from '@core/supabase/supabase-client.ts';

export class MessageService {
  static async send(model: MessageModel): Promise<any> {
    return supabase.from('messages').insert(model);
  }
}
