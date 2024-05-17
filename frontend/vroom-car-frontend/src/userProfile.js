import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './userProfile.css';

const UserProfile = ({ name: initialName, email: initialEmail }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState(initialName || 'John Doe');
  const [email, setEmail] = useState(initialEmail || 'john.doe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // for storing in
    setIsEditing(false);
  };

  return (
    <>
      <header>
        <div className="containerbox">
          <nav>
            <ul>
              <li className='home'><a href="/"> Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><Link to="/profile">User Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="profile-container">
        <div className="profile-box-container">
          <div className="profile-box">
            <div className="profile-header">
              <img src={'https://c8.alamy.com/comp/T8P43K/vector-logo-for-car-rental-and-sales-T8P43K.jpg'} alt="Vroom Car Rental Service" className="company-logo" />
              <h2>Vroom Car Rental Service</h2>
            </div>
            <div className="profile-picture">
              {profilePic ? (
                <img src={URL.createObjectURL(profilePic)} alt="Profile" className="user-avatar" />
              ) : (
                <div className="default-avatar">No Image</div>
              )}
              <input type="file" accept="image/*" onChange={handleProfilePicChange} />
            </div>
            <div className="user-details">
              <p>
                <strong>Name:</strong>{' '}
                {isEditing ? (
                  <input type="text" value={name} onChange={handleNameChange} />
                ) : (
                  <span>{name}</span>
                )}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                {isEditing ? (
                  <input type="email" value={email} onChange={handleEmailChange} />
                ) : (
                  <span>{email}</span>
                )}
              </p>
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <div>
                  <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
              ) : (
                <div>
                  <button className="edit-btn" onClick={handleEdit}>Edit</button>
                </div>
              )}
              {/* <div><Link to="/" className="dashboard-btn">Go to Dashboard</Link></div> */}
              <div><button className="signout-btn">Sign Out</button></div>
            </div>
          </div>
        </div>
        
        </div>
        <div className="booking-container">
          <div className="bookings-box">
            <h3>My Bookings</h3>
            <h4>No Bookings Yet</h4>
          </div>
      </div>
    </>
  );
};

export default UserProfile;
