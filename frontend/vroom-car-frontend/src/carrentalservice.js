import React, { useState } from 'react';
import './carrentalservice.css';

const CarRentalService = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState([
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Focus', year: 2018 },
    // Add more cars as needed
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars.filter((car) =>
    `${car.brand} ${car.model} ${car.year}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="car-rental-service">
      <h1 className="title">Car Rental Service</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <h2 className="car-title">{car.brand} {car.model}</h2>
            <p className="car-details">Year: {car.year}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalService;
