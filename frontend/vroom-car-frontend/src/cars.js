// Cars.js

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './cars.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUserInfo } from './authSlice';

function  Cars() {
  const user = useSelector(state=>state.auth.userInfo)
  const isLoggedIn = useSelector(state=>state.auth.userToken)
  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const bookingDateParam = searchParams.get('bookingDate');
    const dropDateParam = searchParams.get('dropDate');
    const pickupLocationParam = searchParams.get('pickupLocation');
    const dropLocationParam = searchParams.get('dropLocation');
    setBookingDate(bookingDateParam || '');
    setDropDate(dropDateParam || '');
    setPickupLocation(pickupLocationParam || '');
    setDropLocation(dropLocationParam || '');
  }, [location.search]);
console.log(bookingDate,user,isLoggedIn,'booking date')

  const handleRentCar = async (carId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/rent/${carId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingDate,
          pickupLocation,
          dropDate,
          dropLocation,
          carId,
          userId:user?.id
        }),
      });

      if (response.ok) {
        alert('Car rented successfully!');
        // Optionally, you can update the UI or perform other actions here
      } else {
        const errorMessage = await response.text();
        alert(`Failed to rent car:Are you logged in?`);
      }
    } catch (error) {
      console.error('Error renting car:', error);
      alert('An error occurred while renting the car. Please try again.');
    }
  };


  const renderCarDetailsPage = () => {
    switch (selectedOption) {
      case 'SUV':
        return (
          <div className="car-details">
            <h2>SUV Details</h2>
            <div className="car-info">
              <div className="car">
                <img className="carImage" src={require('./scorpio.webp')} alt="SUV 1" />
                <p class='carw'>Name:Scorpio</p>
                <button className='btn' onClick={() => handleRentCar(1)}>Book</button>
              </div>
              <div className="car">
                <img className="carImage" src={require("./rangeRover.jpeg")} alt="SUV 2" />
                <p className='carw'>Name:Range Rover</p>
                <button className='btn' onClick={() => handleRentCar(2)}>Book</button>
              </div>
            </div>
          </div>
        );
      case 'Luxury':
        return (
          <div className="car-details">
            <h2>Luxury Car Details</h2>
            <div class="car-info">
              <div class="car">
                <img  class="carImage" src={require('./bmw.png')} alt="BMW" />
                <p className='carw'>Name:BMW</p>

                <button className='btn' onClick={() => handleRentCar(3)}>Book</button>
              </div>
              <div class="car">
                <img  class="carImage" src={require('./luxury2.webp')} alt="JAG" />
                      <p class='carw'>Name:Jaguwar</p>
                      <button className='btn' onClick={() => handleRentCar(4)}>Book</button>
              </div>
            </div>
          </div>
        );
      case 'Normal':
        return (
          <div className="car-details">
            <h2>Normal Car Details</h2>
            <div className="car-info">
              <div class="car">
                <img class="carImage" src={require('./creta.webp')} alt="Normal 1" />
                <p className='carw'>Name:Creta</p>
                <button className='btn' onClick={() => handleRentCar(5)}>Book</button>
              </div>
              <div class="car">
                <img class="carImage" src={require('./seltos.jpeg')} alt="Normal 2" />
                <p className='carw'>Name:Seltos</p>
                <button className='btn' onClick={() => handleRentCar(6)}>Book</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const handleLogout=()=>{
    dispatch(setUserInfo(null));
    dispatch(setLoggedIn(null))
   
   }
  return (
    <div className='carpage'>
    <div className="full-page">

    <div className="app">
      <div className="booking-options">
        <button onClick={() => handleOptionClick('SUV')}>SUV</button>
        <button onClick={() => handleOptionClick('Luxury')}>Luxury</button>
        <button onClick={() => handleOptionClick('Normal')}>Normal</button>
      </div>
      {renderCarDetailsPage()}
    </div>
    </div>
    </div>
  );
}

export default Cars;
