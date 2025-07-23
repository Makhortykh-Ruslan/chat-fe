import { MessageModel } from '@core/model/message.model.ts';
import { MessageService } from '@core/services';
import { useStore } from '@core/store/useStore.tsx';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React, { useState } from 'react';

const ChatPage = (): React.ReactNode => {
  const [message, setMassage] = useState('');

  const currentUser = useStore((state) => state.user);
  const currentChat = useStore((state) => state.currentChat);

  const handleSend = (): void => {
    const model: MessageModel = {
      sender_id: currentUser?.id as string,
      receiver_id: currentChat.id,
      content: message,
    };

    MessageService.send(model);
    setMassage('');
  };

  return (
    <>
      <Box display='flex' flexDirection='column' height='100vh'>
        {/* Header */}
        <Box
          display='flex'
          alignItems='center'
          gap={1}
          p={2}
          sx={{
            height: 64,
            borderBottom: '1px solid #eee',
            position: 'sticky',
            top: 0,
            bgcolor: 'background.paper',
            zIndex: 10,
          }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography fontWeight='bold'>
            {currentChat?.userName || '-'}
          </Typography>
        </Box>

        <Box flexGrow={1} overflow='auto' p={2}></Box>

        <Box
          display='flex'
          p={2}
          gap={1}
          borderTop='1px solid #eee'
          sx={{
            position: 'sticky',
            bottom: 0,
            bgcolor: 'background.paper',
            zIndex: 10,
          }}
        >
          <TextField
            multiline
            minRows={1}
            placeholder='Введіть повідомлення...'
            fullWidth
            variant='outlined'
            size='small'
            value={message}
            onChange={(e) => setMassage(e.target.value)}
          />
          <Button variant='contained' onClick={handleSend}>
            Надіслати
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChatPage;
