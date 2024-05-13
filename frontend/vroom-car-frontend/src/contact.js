import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement form submission logic here
        console.log("Form submitted:", { name, email, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='contactus'>
        <div className="full-page">
          <header>
            <div className="containerbox">
              <nav>
              <h1>Vroom Car Rental Services</h1>
                <ul>
                <li><Link to={"/"}> Home</Link></li>
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

        <div className="container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> info@carwebsite.com</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" required></textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
        </div>
    );
}

export default ContactPage;
