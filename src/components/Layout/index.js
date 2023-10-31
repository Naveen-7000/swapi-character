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
        // Set the background color for the entire app
        body: {
          bg: 'gray.800', // Replace with your desired background color
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
