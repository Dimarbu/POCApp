import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/login/Login';
import Home from './view/homePage/Home';
import Detail from './view/detailPage/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
