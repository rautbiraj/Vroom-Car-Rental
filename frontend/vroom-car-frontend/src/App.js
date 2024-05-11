
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup'; // Import the Signup component

function App() {
return (

<BrowserRouter>
     <Routes>
     <Route path='/Login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );

  
 }
export default App;