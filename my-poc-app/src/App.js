import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/login/Login';
import Home from './view/homePage/Home';
import Detail from './view/detailPage/Detail';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
