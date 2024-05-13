import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='homepage-body'>
      <div className="full-page">
        <header>
          <div className="containerbox">
            <nav>
            <h1 className='v1'>Vroom Car Rental Services</h1>
              <ul>
                <li className='home'><a href="#HomePage"> Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><Link to={"/cars"}>Cars</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li className='li'> 
                <Link to={"/login"}>Login</Link>                
                  </li>
                  </ul>
            </nav>
          </div>
        </header>

        <div className='container2'>
        <div className='fontt'>
          <p className='carss'>Looking for a car? </p>
        </div>
        </div>

        <div className="body-content">
          <div className="containerT">
            <div className="date-wrapper">
                <label htmlFor="time">Pick up date:</label>
                <input type="date" id="time" className="date" />
                <input type="location" id="loca" className='location' />
                </div>

                <button className='confirm-button'>
                  <Link to={"/cars"} className='log1'>Confirm</Link></button>

                <div className='date-wrapper2'>
                <label htmmlFor="time2">Drop date:</label>
                <input type="date" id="time2" className="date2" />
                <input type="location" id="loca2" className='location' />
                </div>
                </div>
              </div>
            </div>
  

        <footer>
          <div className="containerss">
            <p>&copy; 2024(VroomCar). All rights reserved.</p>
          </div>
        </footer>
        </div> 
  );
}

export default HomePage;
