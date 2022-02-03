import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './router/Router';
import { Favorites } from './context/Favorites';

const App = () => {
  return (
    <ChakraProvider>
      <Favorites>
        <Router />
      </Favorites>
    </ChakraProvider>
  );
}

export default App;
