import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#85b227',
    },
    secondary: {
      main: '#D3D3D3',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      'EB Garamond',
    ],
  },
});

export default theme;
