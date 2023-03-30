import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import Homebase from './homebase';
import Postcard from './pages/PostcardGenerator';


const Main = () => {
  return (
    <Router>
        <Routes>
        <Route exact path='/' component={Homebase}></Route>
        <Route exact path='/postcardgen' component={Postcard}></Route>
        </Routes>
    </Router>
  );
}

export default Main;