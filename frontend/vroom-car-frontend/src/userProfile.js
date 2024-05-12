import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './userProfile.css'; // Import CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setUserInfo } from './authSlice';
import HistoryCard from './HistoryCard';


const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null); // State to store profile picture
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('john.doe@example.com');
  const [bookingInput, setBookingInput] = useState(''); // State for booking input
  const [bookings, setBookings] = useState([]); // State to store bookings
  const user = useSelector(state=>state.auth.userInfo)
  const isLoggedIn = useSelector(state=>state.auth.userToken)
  const dispatch = useDispatch()
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
  

  const getBooking= async ()=>{
    try {
    const response=  await fetch(`http://localhost:3000/api/booking-history/user/${user.id}`)
    
    const data = await response.json();
  console.log(data,'booking data')
    setBookings(data);
    } catch (error) {
alert(error)
    }

  }
  useEffect(() => {
    // Fetch user's bookings when component mounts
    if (isLoggedIn) {
      getBooking()
    }else{
      alert('You need to login first')
    }
 
  }, [isLoggedIn, user?.id]); // Fetch bookings whenever isLoggedIn or user.id changes

console.log(bookings,'bookings')

const handleLogout=()=>{
 dispatch(setUserInfo(null));
 dispatch(setLoggedIn(null))

}
  return (
    <div>
      <header>
        <div className="containerbox">
        <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <ul>
              <li className='home'><a href="#HomePage"> Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><Link to="/profile">User Profile</Link></li>
         
            </ul>
            <div style={{display:'flex',flexDirection:'row',width:'20%'}}> 
            {isLoggedIn?<button onClick={()=>handleLogout()} className='btn'><Link  to={"/"}>Logout</Link></button> : <button className='btn'><Link to={"/login"}>Login</Link></button> }             
        <div style={{minWidth:'30px'}}/>
            {/* {isLoggedIn&&<button className='btn'><Link to={"/profile"}>Profile</Link></button> }              */}

                </div>
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
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="profile-actions">
          <div><Link to="/" className="dashboard-btn">Go to Dashboard</Link></div>
            {/* <div><button className="profile-btn">My Profile</button></div> */}
            <div><button className="signout-btn">Sign Out</button></div>
          </div>
        </div>
        <div className="bookings-box">
          <h3>My Bookings</h3>
         
      <ul>
            {bookings?.map((booking, index) => (
<HistoryCard booking={booking} key={booking.id}/>              
            
            ))}
          </ul> 
          {/* <input
            type="text"
            value={bookingInput}
            onChange={handleBookingInputChange}
            placeholder="Enter booking details"
          />
          <button onClick={handleAddBooking}>Add Booking</button>  */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
