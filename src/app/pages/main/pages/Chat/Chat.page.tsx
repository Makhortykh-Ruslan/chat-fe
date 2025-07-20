import { ToggleTheme } from '@core/components/ToggleTheme/ToggleTheme.tsx';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React, { useState } from 'react';

const ChatPage = (): React.ReactNode => {
  const [message, setMassage] = useState('');
  const handleSend = (): void => {
    console.log('message', message);
    setMassage('');
  };

  return (
    <>
      <ToggleTheme></ToggleTheme>
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
          <Typography fontWeight='bold'>Співрозмовник</Typography>
        </Box>

        {/* Messages */}
        <Box flexGrow={1} overflow='auto' p={2}>
          {/* ...messages... */}
        </Box>

        {/* Input */}
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
