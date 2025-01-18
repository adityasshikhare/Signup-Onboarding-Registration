import React, { useState } from 'react';
import './mobile-verification.css';

const MobileVerification = ({ formData, setFormData, setStep, errors, setErrors }) => {
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    if (!formData.contactNumber) {
      setErrors({ ...errors, contactNumber: 'Mobile number is required.' });
      return;
    }
    setErrors({});
    console.log('OTP sent to:', formData.contactNumber);
    alert('OTP sent to your mobile number!');
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      alert('Mobile number verified!');
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors({ ...errors, otp: 'Invalid OTP.' });
    }
  };

  return (
    <div className='mobile-verification-container'>
      <label>Mobile Number:</label>
      <input
        type="text"
      //  className="w-full p-2 border rounded mb-4"
        value={formData.contactNumber}
        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
        placeholder="Enter your mobile number"
      />
      {errors.contactNumber && <p className="text-red-500 text-sm mb-4">{errors.contactNumber}</p>}
      <button
        onClick={handleSendOtp}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      //  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
      >
        Send OTP
      </button>
      <label >Enter OTP:</label>
      <input
        type="text"
      //  className="w-full p-2 border rounded mb-4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter the OTP"
      />
      {errors.otp && <p className="text-red-500 text-sm mb-4">{errors.otp}</p>}
      <button
        onClick={handleVerifyOtp}
      //  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default MobileVerification;
