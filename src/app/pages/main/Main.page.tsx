import { UsersService } from '@core/services';
import { useStore } from '@core/store/useStore.tsx';
import { supabase } from '@core/supabase/supabase-client.ts';
import { Box } from '@mui/material';
import { User } from '@supabase/supabase-js';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { SideBar } from '../main/components/SideBar/SideBar.tsx';

const MainPage = (): React.ReactNode => {
  const currentUser = useStore((store) => store.user as User);

  useEffect(() => {
    UsersService.getAllUsersChat(currentUser)
      .then((response) => {
        console.log('res', response);
      })
      .catch((error) => {
        console.log('err', error);
      })
      .finally(() => {
        console.log('finally');
      });

    supabase
      .channel('private-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `receiver_id=eq.${currentUser.id}`,
        },
        (payload) => {
          console.log('payload.new', payload.new);
        },
      )
      .subscribe();
  }, []);

  return (
    <Box display='flex' height='100vh'>
      <SideBar />
      <Box component='main' flexGrow={1} overflow='auto'>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainPage;
