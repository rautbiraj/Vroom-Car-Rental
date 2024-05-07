
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './Login';
import HomePage from './homepage';
import CarPage from './cars';
function App() {
return (

<BrowserRouter>
     <Routes>
     <Route path='/Login' element={<Login/>} />
     <Route path='/' element={<HomePage/>}/>
      <Route path='/cars' element={<CarPage/>}/>
      </Routes>
    </BrowserRouter>
  );

  
 }
export default App;