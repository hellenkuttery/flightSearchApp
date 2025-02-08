import { createTheme } from '@mui/material/styles';

// Global renk paleti
const theme = createTheme({
  palette: {
    primary: {
      main: '#282828', 
    },
    secondary: {
      main: '#DB6E6E', 
    },
    background: {
      default: '#fafafa', 
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem', 
    },
    h2: {
      fontSize: '2rem', 
    },
    body1: {
      fontSize: '1rem', 
    },
  },
});

export default theme;