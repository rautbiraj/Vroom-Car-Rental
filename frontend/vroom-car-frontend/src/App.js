import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './forgotPassword';
import HomePage from './homepage'; // Import the HomePage component
import UserProfile from './userProfile'; // Import the UserProfile component
import CarPage from './cars';
import AdminDashboard from './admindahboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} /> {/* Route for Login component */}
        <Route path='/signup' element={<Signup />} /> {/* Route for Login component */}
        <Route path='/forgotpassword' element={<ForgotPassword />} /> {/* Route for ForgotPassword component */}
        <Route path='/' element={<HomePage />} /> {/* Route for HomePage component */}
        <Route path='/profile' element={<UserProfile />} /> {/* Route for UserProfile component */}
        <Route path='/cars' element={<CarPage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;