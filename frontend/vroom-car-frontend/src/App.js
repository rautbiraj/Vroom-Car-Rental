
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup'; // Import the Signup component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<Login />} /> {/* Route for Login component */}
//         <Route path='/signup' element={<Signup />} /> {/* Route for Signup component */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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

