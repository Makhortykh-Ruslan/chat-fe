import { commonComponents } from '@core/theme/common-components.constants.ts';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  components: commonComponents,
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: {
      default: '#f4f6f8',
    },
  },
});

export const darkTheme = createTheme({
  components: commonComponents,
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
  },
});
