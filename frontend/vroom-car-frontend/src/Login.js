import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            // Perform API call to login endpoint
            // Replace 'your-api-url' with your actual API endpoint URL
            const response = await fetch('http://localhost:3000/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (response.ok) {
                console.log(response,'login response')
                // Redirect to dashboard or desired page on successful login
                navigate('/HomePage');
            } else {
                const data = await response.json();
                setError(data.message || 'An error occurred during login.');
            }
        } catch (error) {
            setError('An error occurred during login.');
        }
    };

    return (
        <div className='form-container'>
            <h2>Login to Vroom Car Rental</h2>
            <img src={'https://c8.alamy.com/comp/T8P43K/vector-logo-for-car-rental-and-sales-T8P43K.jpg'} alt="Logo" className="logo" />

            {error && <div className="error">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className='input-group'>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group'>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
            <p>
            <Link to="/forgotpassword">Forgot Password?</Link> {/* Link to Forgot Password Page */}
            </p>
            <p>Don't have an account? <a href='/signup'>Sign up</a></p>
        </div>
    );
}

export default Login;