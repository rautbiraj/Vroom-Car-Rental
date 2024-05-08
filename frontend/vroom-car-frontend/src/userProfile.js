import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './userProfile.css'; // Import CSS file for styling


const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null); // State to store profile picture
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('john.doe@example.com');
  const [bookingInput, setBookingInput] = useState(''); // State for booking input
  const [bookings, setBookings] = useState([]); // State to store bookings

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    // You can handle the logic for updating profile picture here
    setProfilePic(file);
  };

  const handleBookingInputChange = (e) => {
    setBookingInput(e.target.value);
  };

  const handleAddBooking = () => {
    if (bookingInput.trim() !== '') {
      setBookings([...bookings, bookingInput]);
      setBookingInput('');
    }
  };

  return (
    <div>
      <header>
        <div className="containerbox">
          <nav>
            <ul>
              <li className='home'><a href="#HomePage"> Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><Link to="/profile">User Profile</Link></li>
              <li className='si'> 
                <Link to={"/login"}>Login</Link>                
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-header">
            <img src="vroom_logo.png" alt="Vroom Car Rental Service" className="company-logo" />
            <h2>Vroom Car Rental Service</h2>
          </div>
          <div className="profile-picture">
            {profilePic ? (
              <img src={URL.createObjectURL(profilePic)} alt="Profile" className="user-avatar" />
            ) : (
              <div className="default-avatar">No Image</div>
            )}
            <input type="file" accept="image/*" onChange={handleProfilePicChange} />
            {/* <button className="change-pic-btn">Change Profile Picture</button> */}
          </div>
          <div className="user-details">
            <p><strong>Name:</strong> {userName}</p>
            <p><strong>Email:</strong> {userEmail}</p>
          </div>
          <div className="profile-actions">
          <div><Link to="/" className="dashboard-btn">Go to Dashboard</Link></div>
            {/* <div><button className="profile-btn">My Profile</button></div> */}
            <div><button className="signout-btn">Sign Out</button></div>
          </div>
        </div>
        <div className="bookings-box">
          <h3>My Bookings</h3>
          <h4>No Bookings Yet</h4>
          {/* <ul>
            {bookings.map((booking, index) => (
              <li key={index}>{booking}</li>
            ))}
          </ul>
          <input
            type="text"
            value={bookingInput}
            onChange={handleBookingInputChange}
            placeholder="Enter booking details"
          />
          <button onClick={handleAddBooking}>Add Booking</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
