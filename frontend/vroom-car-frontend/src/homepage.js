import React, { useState } from 'react';
import './homepage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUserInfo } from './authSlice';

function HomePage() {
  const [bookingDate, setBookingDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const navigate = useNavigate();
  const user = useSelector(state=>state.auth.userInfo)
  const isLoggedIn = useSelector(state=>state.auth.userToken)
  const dispatch = useDispatch()

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
  };

  const handleDropDateChange = (event) => {
    setDropDate(event.target.value);
  };
  const today = new Date().toISOString().split('T')[0];

  const handleConfirm=()=>{
if (bookingDate>=dropDate){
  alert("Drop date cannot be earlier or same day than pickup date")

}
else{
  navigate(`/cars?bookingDate=${bookingDate}&dropDate=${dropDate}`)

}
  }
  const handleLogout=()=>{
    dispatch(setUserInfo(null));
    dispatch(setLoggedIn(null))
   
   }
  return (
    <div className='homepage-body'>
      <div className="full-page">
        <header style={{display:'flex',justifyContent:'flex-end'}}>
          {/* Header content */}
          {isLoggedIn?<button style={{width:'10%',alignSelf:'end',}}onClick={()=>handleLogout()} className='btn'><Link  to={"/"}>Logout</Link></button> : <button className='btn' style={{width:'10%',alignSelf:'end',}}><Link to={"/login"}>Login</Link></button> }             

        </header>

        <div className='container2'>
          <div className='fontt'>
            <p>Pick Your Date: </p>
          </div>
        </div>

        <div className="body-content">
          <div className="containerT">
            <div className="date-wrapper">
              <label htmlFor="time">Pick up date:</label>
              <input  min={today} type="date" id="time" className="date" value={bookingDate} onChange={handleBookingDateChange} />
            </div>

            <button className='confirm-button'>
              <button onClick={()=>handleConfirm()} className='btn '>Confirm</button>
            </button>

            <div className='date-wrapper2'>
              <label htmlFor="time2">Drop date:</label>
              <input  min={today}  type="date" id="time2" className="date2" value={dropDate} onChange={handleDropDateChange} />
            </div>
          </div>
        </div>

        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
