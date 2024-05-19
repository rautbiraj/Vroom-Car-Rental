import React, { useState } from 'react';
import './homepage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUserInfo } from './authSlice';
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  
};

function HomePage() {
  const [bookingDate, setBookingDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
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
  navigate(`/cars?bookingDate=${bookingDate}&pickupLocation=${pickupLocation}&dropDate=${dropDate}&dropLocation=${dropLocation}`)

}
  }
  const handleLogout=()=>{
    dispatch(setUserInfo(null));
    dispatch(setLoggedIn(null))
   
   }
  return (
    <>
    <div className='homepage-body'>
      <div className="full-page">


        <div className='container2'>
          <div className='fontt'>
            <p>Pick Your Date: </p>
          </div>
        </div>

        <div className="body-content">
          <div className="containerT">
            <div className='inputContainer'>
            <div className="date-wrapper">
              <label htmlFor="time">Pick up date:</label>
              <input  min={today} type="date" id="time" className="date" value={bookingDate} onChange={handleBookingDateChange} />
            </div>
            <div className="date-wrapper">
              <label htmlFor="time">Pick up Location:</label>
              <input type="text" id="time"  className="date" value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} />
            </div>
            </div>
            <button className='confirm-button'>
              <button onClick={()=>handleConfirm()} className='btn '>Confirm</button>
            </button>
            <div className='inputContainer'>
            <div className='date-wrapper2'>
              <label htmlFor="time2">Drop date:</label>
              <input  min={today}  type="date" id="time2" className="date2" value={dropDate} onChange={handleDropDateChange} />
            </div>
            <div className='date-wrapper2'>
              <label htmlFor="time2">Drop Location:</label>
              <input type="text" id="time2"  className="date" value={dropLocation} onChange={(e)=>setDropLocation(e.target.value)} />
            </div>
            </div>
          </div>
        </div>



      </div>
    </div>
    <div>
      <div className='slider-wrapper'>

      <Slider {...settings} autoplay infinite >
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ferrari_F8_Tributo_rear_20191026.jpg/1200px-Ferrari_F8_Tributo_rear_20191026.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Ferrari</h3>
    <h5>Model: F8 Tributo</h5>
  </div>
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://commons.wikimedia.org/wiki/File:Lamborghini_Urus_2019_Geneva_Auto_Show_(48884232871).jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Lamborghini</h3>
    <h5>Model: Urus</h5>
  </div>
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://commons.wikimedia.org/wiki/File:2022_Toyota_GR_Supra_3.0_RZ_Automatic_JDM_front_left_view.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Toyota Supra</h3>
    <h5>Model: GR</h5>
  </div>
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://commons.wikimedia.org/wiki/File:2020_Porsche_911_Carrera_S_rear_quarter.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Porsche</h3>
    <h5>Model: 911 Carrera</h5>
  </div>
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://commons.wikimedia.org/wiki/File:Tesla_Model_S_Long_Range_Plus_at_Charging_Station_(2021-11-14).jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Tesla</h3>
    <h5>Model: Model S</h5>
  </div>
  <div className='slider-card'>
    <div style={{width:'100%', height:'250px'}}>
      <img src="https://commons.wikimedia.org/wiki/File:Nissan_GT-R_Nismo_50th_Anniversary_Edition_(R35)_(49772323982).jpg" style={{width:'100%', height:'100%', objectFit:'cover'}} />
    </div>
    <h3>Nissan</h3>
    <h5>Model: GT-R</h5>
  </div>
</Slider>

    </div>
    <footer>
    {/* Footer content */}
  </footer>
  </div>
  </>
  );
}

export default HomePage;
