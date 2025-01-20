import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import MobileVerification from './MobileVerification';
import EmailVerification from './EmailVerification';
import BusinessDetails from './BusinessDetails';
import KycDetails from './KYCDetails';
import Documents from './Documents';
import BankingDetails from './BankingDetails';
import UploadPhoto from './UploadPhotos';
import './App.css';
//import PhoneOtpForm from './phone-login'; 


const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    contactNumber: '',
    email: '',
    businessName: '',
    businessType: '',
    address: '',
    aadhaar: '',
    pan: '',
    fssai: '',
    gst: '',
    bankAccount: '',
    ifsc: '',
    photos: [],
  });
  const [errors, setErrors] = useState({});

  // Steps configuration
  const steps = [
    {
      id: 1,
      title: 'Mobile Verification',
      component: (
        
        <MobileVerification
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      id: 2,
      title: 'Email Verification',
      component: (
        <EmailVerification
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      id: 3,
      title: 'Business Details',
      component: <BusinessDetails formData={formData} setFormData={setFormData} />,
    },
    {
      id: 4,
      title: 'KYC Details',
      component: <KycDetails formData={formData} setFormData={setFormData} />,
    },
    {
      id: 5,
      title: 'Documents',
      component: <Documents formData={formData} setFormData={setFormData} />,
    },
    {
      id: 6,
      title: 'Banking Details',
      component: <BankingDetails formData={formData} setFormData={setFormData} />,
    },
    {
      id: 7,
      title: 'Upload Photos',
      component: <UploadPhoto formData={formData} setFormData={setFormData} />,
    },
  ];

  // Validation Function
  const validateStep = () => {
    const newErrors = {};
    if (step === 1 && !formData.contactNumber) {
      newErrors.contactNumber = 'Mobile number is required.';
    }
    if (step === 2 && !formData.email) {
      newErrors.email = 'Email address is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Final form data:', formData);
      alert('Onboarding process completed successfully!');
    }
  };

  return (
    
    <div className="aditya">
      {/* Header with Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map(({ id, title }) => (
          <Tooltip key={id} title={title}>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                step >= id ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              {id}
            </div>
          </Tooltip>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {steps.find((s) => s.id === step)?.component}
        {errors.contactNumber && step === 1 && <p className="text-red-500 text-sm mt-2">{errors.contactNumber}</p>}
        {errors.email && step === 2 && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            onClick={handlePrevious}
      //      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        className='bg-green-400'
    //    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            Previous    
          </button>
        )}
        {step < steps.length ? (
          <button
            onClick={handleNext}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
       //   className='bg-green-400'
        //  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition ml-auto"
          >
            Submit
          </button>
        )}
      </div>
    </div>
    
  );
  
};

export default Onboarding;
