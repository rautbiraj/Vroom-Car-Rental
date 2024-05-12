import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import Login from './Login';
import Signup from './Signup'; // Import the Signup component
import CarPage from './cars';
import Contactus from './contact';
import UserProfile from './userProfile';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} /> {/* Route for Login component */}
        <Route path='/signup' element={<Signup />} /> {/* Route for Signup component */}
        <Route path='/' element={<HomePage/>}/>
      <Route path='/cars' element={<CarPage/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/Profile' element={<UserProfile/>}/>
        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
