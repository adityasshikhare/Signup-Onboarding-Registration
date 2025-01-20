import React, { useState, useEffect, useRef } from 'react';
import './mobile-verification.css';

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
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
    <div className='ss'>
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

const MobileVerification = ({ formData, setFormData, setStep, errors, setErrors }) => {
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    if (!formData.contactNumber) {
      setErrors({ ...errors, contactNumber: 'Mobile number is required.' });
      return;
    }
    setErrors({});
    console.log('OTP sent to:', formData.contactNumber);
    setShowOtpInput(true);
    alert('OTP sent to your mobile number!');
  };

  const handleVerifyOtp = (submittedOtp) => {
    if (submittedOtp === '123456') {
      alert('Mobile number verified!');
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors({ ...errors, otp: 'Invalid OTP.' });
    }
  };

  return (
    <div className="mobile-verification-container">
      {!showOtpInput ? (
        <>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            placeholder="Enter your mobile number"
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mb-4">{errors.contactNumber}</p>}
          <button
            onClick={handleSendOtp}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <label>Enter OTP sent to {formData.contactNumber}</label>
          <OtpInput className='OtpInput' length={6} onOtpSubmit={handleVerifyOtp} />
          {errors.otp && <p className="text-red-500 text-sm mb-4">{errors.otp}</p>}
        </>
      )}
    </div>
  );
};

export default MobileVerification;
