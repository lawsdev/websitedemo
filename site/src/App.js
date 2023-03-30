import { Routes, Route } from 'react-router-dom';
import Homebase from './homebase';
import Postcard from './pages/PostcardGenerator';

import Main from "./main";

function App() {
  return (
    <div className="App">
            <Routes>
            <Route exact path='/' element={<Homebase />}></Route>
            <Route exact path='/postcardgen' element={<Postcard />}></Route>
            </Routes>
    </div>
  );
}

export default App;
