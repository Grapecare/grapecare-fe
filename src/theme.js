// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    disableGlobalStyle: true,
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;