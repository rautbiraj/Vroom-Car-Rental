
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './Login';
import HomePage from './homepage';
import CarPage from './cars';
import Contactus from './contact';
function App() {
return (

<BrowserRouter>
     <Routes>
     <Route path='/Login' element={<Login/>} />
     <Route path='/' element={<HomePage/>}/>
      <Route path='/cars' element={<CarPage/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
  );

  
 }
export default App;