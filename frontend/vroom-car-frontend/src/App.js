
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './Login';
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