// contactus.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router
import './contact.css'; // Corrected import statement

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, like sending the data to a server or displaying it
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className='car-contact'>
      <div className="full-page">
        <header>
          <div className="conb">
            <nav>
              <h1>Vroom Car Rental Services</h1>
              <ul>
                <li className='home'><Link to={"/"}> Home</Link></li>
                <li><a href="#services">Services</a></li>
                <li><Link to={"/cars"}>Cars</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li className='si'> 
                  <Link to={"/login"}>Login</Link>                
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
