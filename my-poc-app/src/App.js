import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './router/Router';
import { Favorites } from './context/Favorites';
import theme from './theme';
import "@fontsource/poppins";



const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Favorites>
        <Router />
      </Favorites>
    </ChakraProvider>
  );
}

export default App;
