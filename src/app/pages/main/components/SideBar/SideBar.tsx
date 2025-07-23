import { UserAdapter } from '@core/adapter/user.adapter.ts';
import { ChatItem } from '@core/components/ChatItem/ChatItem.tsx';
import { UsersService } from '@core/services';
import { useStore } from '@core/store/useStore.tsx';
import {
  Box,
  CircularProgress,
  InputAdornment,
  List,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

export const SideBar = (): React.ReactNode => {
  const [isShowLoader, updateLoader] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchedUsers, setSearchesUsers] = useState<any[]>([]);

  const setCurrenChat = useStore((state) => state.setCurrenChat);

  const changeSearchField = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchValue(event.target.value);
  };

  const handleSelectChat = useCallback((data: any) => {
    setCurrenChat(data);
    setSearchValue('');
  }, []);

  useEffect(() => {
    const debounceTime = setTimeout(() => {
      updateLoader(true);
      UsersService.searchUsers(searchValue).then((response) => {
        const transformed = searchValue
          ? UserAdapter.transformUserToSearched(response.data)
          : [];
        setSearchesUsers(transformed);
        updateLoader(false);
      });
    }, 300);

    return (): void => {
      clearTimeout(debounceTime);
    };
  }, [searchValue]);

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
          InputProps={{
            endAdornment: isShowLoader && (
              <InputAdornment position='end'>
                <CircularProgress size={20} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box flexGrow={1} overflow='auto' px={1}>
        <List dense>
          {searchedUsers.map((data) => (
            <ChatItem
              label={data.label}
              routerPath={data.path}
              handleClick={() => handleSelectChat(data)}
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
