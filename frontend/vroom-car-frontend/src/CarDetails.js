// CarDetails.js

import React from 'react';

function CarDetails({ name, imageSrc, carId, seats,luggage,doors,ac,handleRentCar }) {
  return (
    <div className="car">
      <img className="carImage" src={imageSrc} alt={name} />
      <p className="carw">Name: {name}</p>
      <ul className="car-features">
        <li>Seats: {seats}</li>
        <li>Luggage: {luggage}</li>
        <li>Doors: {doors}</li>
{ac&&        <li>Air Conditioning</li>}
      </ul>
      <button className="btn" onClick={() => handleRentCar(carId)}>Book</button>
    </div>
  );
}

export default CarDetails;
