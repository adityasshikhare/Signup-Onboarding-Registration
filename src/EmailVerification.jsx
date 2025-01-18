import React, { useState } from 'react';
import './email-verification.css';

const EmailVerification = ({ formData, setFormData, setStep, errors, setErrors }) => {
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    if (!formData.email) {
      setErrors({ ...errors, email: 'Email address is required.' });
      return;
    }
    setErrors({});
    console.log('OTP sent to:', formData.email);
    alert('OTP sent to your email address!');
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      alert('Email address verified!');
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors({ ...errors, otp: 'Invalid OTP.' });
    }
  };

  return (
    <div className='email-verification-container'>
      <label className="block text-sm font-medium mb-2">Email Address:</label>
      <input
        type="email"
        className="w-full p-2 border rounded mb-4"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Enter your email address"
      />
      {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
      <button
        onClick={handleSendOtp}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
      >
        Send OTP
      </button>
      <label className="block text-sm font-medium mb-2">Enter OTP:</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter the OTP"
      />
      {errors.otp && <p className="text-red-500 text-sm mb-4">{errors.otp}</p>}
      <button
        onClick={handleVerifyOtp}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default EmailVerification;
