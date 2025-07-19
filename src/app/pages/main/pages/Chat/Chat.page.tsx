import { useThemeMode } from '@core/Context/them-wrapper.context.tsx';
import React from 'react';

const ChatPage: React.FC = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <div>
      Chat
      <p>Поточна тема: {mode}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
};

export default ChatPage;
