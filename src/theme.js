// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    disableGlobalStyle: true,
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brandPink: {
      50: '#FFE4F0',
      100: '#FFB8D3',
      200: '#FF8CB7',
      300: '#FF5F9A',
      400: '#F93383',
      500: '#EA1D78', // main color
      600: '#C01864',
      700: '#971250',
      800: '#6E0D3C',
      900: '#450828',
    },
  },
  fonts: {
    heading: `'Jost', sans-serif`,
    body: `'Jost', sans-serif`,
  },
});

export default theme;