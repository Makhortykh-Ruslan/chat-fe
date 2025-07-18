import { useTheme } from '@core/Context/testContext.tsx';
import React from 'react';

const ChatPage: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      Chat
      <p>Поточна тема: {theme}</p>
      <button onClick={changeTheme}>Змінити тему</button>
    </div>
  );
};

export default ChatPage;
