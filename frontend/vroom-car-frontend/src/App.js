// import React from 'react';
// import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import HomePage from './homepage';
import Login from './Login';
import './App.css'
import Signup from './Signup'; // Import the Signup component
import Contactus from './contact';
import UserProfile from './userProfile';
import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Cars from './cars';
import { setLoggedIn, setUserInfo } from './authSlice';






const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.auth.userToken)
const role=useSelector(state=>state?.auth?.userInfo?.role_id)
  const handleLogout = () => {

    dispatch(setUserInfo(null));
    dispatch(setLoggedIn(null))

  }
  return (
    <div className="NavBar">

    <nav style={{display:"flex",justifyContent:'space-between',width:"100%",padding:10}}>
    <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems: "center"}}>
          <h1>Vroom Car Rental Services</h1>
            <ul>
              <li><Link to={"/"}> Home</Link></li>
              <li><Link to={"/cars"}>Cars</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to={"/profile"}>Profile</Link></li>
{role==3&& <li><Link to={"/profile"}>Booking Histories</Link></li>}
           
                </ul>
                </div>
                <div style={{display:'flex',flexDirection:'row',width:'20%'}}> 
                {isLoggedIn?<button onClick={()=>handleLogout()} className='btn'><Link  to={"/"}>Logout</Link></button> : <button className='btn'><Link to={"/login"}>Login</Link></button> }             
        <div style={{minWidth:'30px'}}/>
            {/* {isLoggedIn&&<button className='btn'><Link to={"/profile"}>Profile</Link></button> }              */}

                </div>

    </nav>
    </div>

  );
};




const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>       
         <Outlet />
</main>
    </div>
  );
};


const CustomRouter = () => {
  const isLoggedIn = useSelector(state => state.auth.userToken)
  console.log('isLogged in ', isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <AuthenticatedLayout /> : <Navigate to="/login" />}
        >
         <Route path="/" element={<HomePage />} />

          <Route
            path="/cars"
            element={<Cars />}
          />
             <Route
            path="/contact"
            element={<Contactus />}
          />
          <Route
            path="/Profile"
            element={<UserProfile />}

          />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const App = () => {

  return (
    <Provider store={store}>
      <CustomRouter />
    </Provider>
  );
}

export default App;

