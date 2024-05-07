import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [roleId, setRoleId] = useState(1);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            // Perform API call to signup endpoint
            // Replace 'your-api-url' with your actual API endpoint URL
            const response = await fetch('http://localhost:3000/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, roleId }),
            });
            
            if (response.ok) {
                // Redirect to login page on successful signup
                navigate('/login');
            } else {
                const data = await response.json();
                setError(data.message || 'An error occurred during signup.');
            }
        } catch (error) {
            setError('An error occurred during signup.');
        }
    };

    return (
        <div className='form-container'>
            <h2>Sign up for Vroom Car Rental</h2>
            <img src={'https://c8.alamy.com/comp/T8P43K/vector-logo-for-car-rental-and-sales-T8P43K.jpg'} alt="Logo" className="logo" />

            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSignup}>
                <div className='input-group'>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div className='input-group'>
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="role">Role:</label>
                    <select id="role" value={roleId} onChange={(e) => setRoleId(e.target.value)}>
                        <option value={1}>Customer</option>
                        <option value={2}>Business</option>
                    </select>
                </div>
                <button type="submit" className="btn">Sign up</button>
            </form>
            <p>Already have an account? <a href='/login'>Login</a></p>
        </div>
    );
}

export default Signup;