// Cars.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cars.css';

function Cars() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderCarDetailsPage = () => {
    switch (selectedOption) {
      case 'SUV':
        return (
          <div className="car-details">
            <h2>SUV Details</h2>
            <div class="car-info">
              <div class="car">
                <img src="suv1.jpg" alt="SUV 1" />
                <p class='carw'>Name:Scorpio</p>
                <button>Book</button>
              </div>
              <div class="car">
                <img src="suv2.jpg" alt="SUV 2" />
                <p class='carw'>Name:Range Rover</p>
                <button>Book</button>
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
                <img src="bmw.png" alt="BMW" />
                <p className='carw'>Name:BMW</p>

                <button>Book</button>
              </div>
              <div class="car">
                <img src="luxury2.jpg" alt="JAG" />
                      <p class='carw'>Name:Jaguwar</p>
                <button>Book</button>
              </div>
            </div>
          </div>
        );
      case 'Normal':
        return (
          <div className="car-details">
            <h2>Normal Car Details</h2>
            <div className="car-info">
              <div className="car">
                <img src="normal1.jpg" alt="Normal 1" />
                <p className='carw'>Name:Creata</p>
                <button>Book</button>
              </div>
              <div className="car">
                <img src="normal2.jpg" alt="Normal 2" />
                <p className='carw'>Name:Seltos</p>
                <button>Book</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='carpage'>
    <div className="full-page">
      <header>
        <div className="containerbox">
          <nav>
          <h1>Vroom Car Rental Services</h1>
            <ul>
              <li className='home'><a href="#HomePage"> Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><Link to={"/cars"}>Cars</Link></li>
              <li><Link to={"/contactus"}>Contact Us</Link></li>

              <li className='si'> 
              <Link to={"/login"}>Login</Link>                
                </li>
                </ul>
          </nav>
        </div>
      </header>

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
