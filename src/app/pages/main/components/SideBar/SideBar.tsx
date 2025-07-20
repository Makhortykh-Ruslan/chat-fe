import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Чат', path: '/chat' },
  { label: 'Налаштування', path: '/settings' },
];

export const SideBar = (): React.ReactNode => {
  return (
    <Box
      width={240}
      bgcolor='background.paper'
      borderRight='1px solid'
      borderColor='divider'
      display='flex'
      flexDirection='column'
    >
      <Typography variant='h6' mb={2}>
        ChatApp
      </Typography>

      <List>
        {navItems.map(({ label, path }) => (
          <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            sx={{
              borderRadius: 1,
              '&.active': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
