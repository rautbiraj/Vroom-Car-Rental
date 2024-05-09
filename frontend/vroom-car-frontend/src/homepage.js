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
            <h1>Vroom Car Rental Services</h1>
              <ul>
                <li className='home'><a href="#HomePage"> Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><Link to="/Profile">User Profile</Link></li> {/* Link to UserProfile */}

                <li className='si'> 
                <Link to={"/login"}>Login</Link>                
                  </li>
                  </ul>
            </nav>
          </div>
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
                <input type="date" id="time" className="date" />
                </div>

                <button className='confirm-button'>Confirm</button>

                <div className='date-wrapper2'>
                <label htmmlFor="time2">Drop date:</label>
                <input type="date" id="time2" className="date2" />
                </div>
              </div>
            </div>
  

        <footer>
          <div className="container">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </footer>
        </div>
        </div>
        
        
  );
}

export default HomePage;
