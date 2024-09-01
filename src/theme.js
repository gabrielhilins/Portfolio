import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'light' ? '#FFFFFF' : '#1D1C1C',
      color: props.colorMode === 'light' ? 'black' : 'white',
    },
    '.container': {
      background: props.colorMode === 'light' 
        ? 'linear-gradient(to bottom, #6C63FF, #B60000)' 
        : 'linear-gradient(to bottom, #2E24D3, #7D0A0A)', 
      fontFamily: 'Ubuntu, sans-serif',
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
