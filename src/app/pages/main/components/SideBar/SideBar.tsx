import { ChatItem } from '@core/components/ChatItem/ChatItem.tsx';
import { Box, List, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';

const navItems = Array.from({ length: 5 }, (_, i) => ({
  label: `Чат ${i + 1}`,
  path: `/chat/${i + 1}`,
}));

export const SideBar = (): React.ReactNode => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchField = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchValue(event.target.value);
  };

  const handleSelectChat = useCallback((data: any) => {}, []);

  return (
    <Box
      width={240}
      bgcolor='background.paper'
      borderRight='1px solid'
      borderColor='divider'
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      <Box p={1}>
        <Typography variant='h6' fontSize='1rem' mb={1}>
          ChatApp
        </Typography>
        <TextField
          onChange={changeSearchField}
          id='user-search'
          variant='outlined'
          size='small'
          fullWidth
          placeholder='Пошук...'
        />
      </Box>

      <Box flexGrow={1} overflow='auto' px={1}>
        <List dense>
          {navItems.map(({ label, path }) => (
            <ChatItem
              label={label}
              routerPath={path}
              handleClick={() => handleSelectChat({})}
            />
          ))}
        </List>
      </Box>

      <Box p={1}>
        <ChatItem label='Settings' routerPath='/settings' />
      </Box>
    </Box>
  );
};
