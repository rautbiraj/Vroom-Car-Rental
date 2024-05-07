import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./cars.css";
import Login from "./Login";

const CarPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const carData = {
    suv: {
      className: "suv",
      cars: [
        { name: "Toyota RAV4", availability: "Available"},
        { name: "Honda CR-V", availability: "Out of stock" },
        { name: "Ford Explorer", availability: "Available" }
      ]
    },
    luxury: {
      className: "lux", 
      cars: [
        { name: "Mercedes-Benz S-Class", availability: "Available" },
        { name: "BMW 7 Series", availability: "Available" },
        { name: "Audi A8", availability: "Out of stock" }
      ]
    },
    normal: {
      className: "nor", 
      cars: [
        { name: "Toyota Camry", availability: "Available" },
        { name: "Honda Accord", availability: "Available" },
        { name: "Ford Fusion", availability: "Out of stock" },
        { name: "Fortuner", availability: "Available" }
      ]
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <div className='car-body'>
      <div className="full-page">
        <header>
          <div className="conb">
            <nav>
              <h1>Vroom Car Rental Services</h1>
              <ul>
                <li className='home'><Link to={"/"}> Home</Link></li>
                <li><a href="#services">Services</a></li>
                <li><Link to={"/cars"}>Cars</Link></li>
                <li><a href="#contact">Contact Us</a></li>
                <li className='si'> 
                  <Link to={"/login"}>Login</Link>                
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="car-container">
          <h1 className="car-heading">Choose your vehicle</h1>
          <div className="car-options">
            {Object.keys(carData).map((type, index) => (
              <div className="car-option" key={index}>
                <button onClick={() => handleOptionSelect(type)}>{type.toUpperCase()}</button>
                {selectedOption === type && (
                  <div className="availability-info">
                    {carData[type].cars.map((car, index) => (
                      <p className="cn" key={index}>
                        {car.name} - {car.availability}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <footer>
          <div className="fot">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CarPage;
