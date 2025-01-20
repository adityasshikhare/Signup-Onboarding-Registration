import React, { useState, useEffect, useRef } from 'react';
import './email-verification.css';

const OtpInput = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf('')].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-container">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otpInput"
        />
      ))}
    </div>
  );
};

const EmailVerification = ({ formData, setFormData, setStep, errors, setErrors }) => {
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    if (!formData.email) {
      setErrors({ ...errors, email: 'Email address is required.' });
      return;
    }
    setErrors({});
    console.log('OTP sent to:', formData.email);
    setShowOtpInput(true);
    alert('OTP sent to your email address!');
  };

  const handleVerifyOtp = (submittedOtp) => {
    if (submittedOtp === '123456') {
      alert('Email address verified!');
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors({ ...errors, otp: 'Invalid OTP.' });
    }
  };

  return (
    <div className="email-verification-container">
      {!showOtpInput ? (
        <>
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
        </>
      ) : (
        <>
          <label>Enter OTP sent to {formData.email}</label>
          <OtpInput length={6} onOtpSubmit={handleVerifyOtp} />
          {errors.otp && <p className="text-red-500 text-sm mb-4">{errors.otp}</p>}
        </>
      )}
    </div>
  );
};

export default EmailVerification;
