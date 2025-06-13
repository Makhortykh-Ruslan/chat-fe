import { useTheme } from '@core/Context/testContext.tsx';
import { Icon } from '@core/icons-config/Icon/Icon.tsx';
import React from 'react';

const ChatPage: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      Chat
      <Icon name='bell' size='200px' fill='green' />
      <p>Поточна тема: {theme}</p>
      <button onClick={changeTheme}>Змінити тему</button>
    </div>
  );
};

export default ChatPage;
