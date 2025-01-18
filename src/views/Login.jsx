import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/Logo'; // Adjust the path if necessary

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password,
            });
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            console.log('Token:', response.data.token); // Save the token securely (e.g., localStorage)
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Login failed.');
            setSuccessMessage('');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                height: '100vh',
                backgroundColor: '#000',
                color: '#fefefe',
            }}
        >
            <div
                className="p-5 rounded"
                style={{
                    width: '400px',
                    backgroundColor: '#1a1a1a',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                }}
            >
                <Logo width="100px" />
                <h2 className="text-center mb-4" style={{ color: '#fefefe' }}>
                    Welcome Back
                </h2>
                {errorMessage && (
                    <div className="alert alert-danger text-center">{errorMessage}</div>
                )}
                {successMessage && (
                    <div className="alert alert-success text-center">
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            style={{
                                backgroundColor: '#000',
                                color: '#fefefe',
                                border: '1px solid rgb(125, 102, 34)',
                            }}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            style={{
                                backgroundColor: '#000',
                                color: '#fefefe',
                                border: '1px solid rgb(125, 102, 34)',
                            }}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: 'rgb(125, 102, 34)',
                            color: '#000',
                            fontWeight: 'bold',
                        }}
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center mt-3">
                    Don’t have an account?{' '}
                    <a href="/signup" style={{ color: 'rgb(125, 102, 34)', textDecoration: 'none' }}>
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
