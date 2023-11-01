import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      body: `Space Grotesk sans-serif`,
    },
    styles: {
      global: {
        body: {
          bg: 'gray.800',
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
