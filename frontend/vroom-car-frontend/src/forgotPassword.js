import React from 'react';
import './forgotPassword.css';

function ForgotPassword() {
    return (
        <div className='forgot-password-container'>
            <div className='forgot-password-box'>
                <form>
                    <h3 className='text-center'>Forgot Password</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className='form-control'/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                        <p className='text-right'>
                            Remembered your password? <a href='./Login'>Log In</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
