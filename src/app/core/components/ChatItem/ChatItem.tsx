import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface ChatItemProps {
  label: string;
  routerPath: string;
  handleClick?: () => void;
}

export const ChatItem = React.memo(
  ({ label, routerPath, handleClick }: ChatItemProps): React.ReactNode => {
    return (
      <ListItemButton
        onClick={handleClick}
        key={routerPath}
        component={NavLink}
        to={routerPath}
        sx={{
          minHeight: 36,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          '& .MuiListItemText-root': { m: 0 },
          '&.active': {
            bgcolor: 'primary.main',
            color: 'white',
          },
        }}
      >
        <ListItemText primary={label} />
      </ListItemButton>
    );
  },
);
