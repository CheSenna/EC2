/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Trigger AWS Cognito login
    // After login success, redirect based on user role
    const userRole = 'user'; // Replace with actual role from Cognito
    if (userRole === 'admin') {
      navigate('/admin'); // Redirect to admin pages
    } else {
      navigate('/home'); // Redirect to normal user pages
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold'>Welcome to DreamStreamer!</h1>
      <p className='my-4'>Please log in to continue</p>
      <button onClick={handleLogin} className='px-4 py-2 bg-blue-500 text-white rounded'>
        Log In
      </button>
    </div>
  );
};

export default LandingPage;
