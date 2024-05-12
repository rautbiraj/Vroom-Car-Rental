import React from 'react';
import './history-card.css'; // Import CSS file for styling

const HistoryCard = ({ booking }) => {
    const date = new Date(booking.booking_date)
    const local = date.toLocaleString()
  return (
    <div className="history-card">
      <h3>Booking ID: {booking.id}</h3>
      <p>Booking Date: {local}</p>
      <p>Drop Date: {booking.drop_date}</p>
      <p>Car Name: {booking.car_name}</p>
    </div>
  );
};

export default HistoryCard;
