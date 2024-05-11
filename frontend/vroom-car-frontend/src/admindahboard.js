import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './admindashboard.css'; // Import CSS file for styling

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('cars'); // State to keep track of active tab

  // Function to handle button click and update active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'cars':
        return <p>Content for Cars</p>;
      case 'drivers':
        return <p>Content for Drivers</p>;
      case 'booking':
        return <p>Content for Booking</p>;
      case 'payment':
        return <p>Content for Payment Details</p>;
      case 'carReport':
        return <p>Content for Car Report</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <div className="container-box">
          <nav>
            <ul>
              <li className='home'><a href="/"> Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="container">
        <div className="sidebar">
          <h2>Admin</h2>
          {/* Buttons lined vertically */}
          <button onClick={() => handleTabClick('cars')}>Cars</button>
          <button onClick={() => handleTabClick('drivers')}>Drivers</button>
          <button onClick={() => handleTabClick('booking')}>Booking</button>
          <button onClick={() => handleTabClick('payment')}>Payment Details</button>
          <button onClick={() => handleTabClick('carReport')}>Car Report</button>
        </div>
        <div className="content">
          {/* Render content based on active tab */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
