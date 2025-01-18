import { useState } from 'react';
import './kyc-details.css';

const KYCDetails = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({ aadhaar: '', pan: '' });

  const validateAadhaar = (aadhaar) => {
    const aadhaarRegex = /^\d{12}$/; // Aadhaar should be a 12-digit number
    return aadhaarRegex.test(aadhaar);
  };

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN should match the format: 5 letters, 4 digits, 1 letter
    return panRegex.test(pan);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'aadhaar') {
      setErrors({
        ...errors,
        aadhaar: validateAadhaar(value) ? '' : 'Aadhaar must be a 12-digit number.',
      });
    }

    if (field === 'pan') {
      setErrors({
        ...errors,
        pan: validatePAN(value) ? '' : 'PAN must be in the format ABCDE1234F.',
      });
    }
  };

  return (
    <div className="kyc-container">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">KYC Details</h2>

      {/* Aadhaar Number Input */}
      <div>
        <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700">
          Aadhaar Number
        </label>
        <input
          type="text"
          id="aadhaar"
          placeholder="Enter Aadhaar Number"
          className={`w-full p-2 border rounded ${
            errors.aadhaar ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.aadhaar}
          onChange={(e) => handleInputChange('aadhaar', e.target.value)}
        />
        {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>}
      </div>

      {/* PAN Number Input */}
      <div>
        <label htmlFor="pan" className="block text-sm font-medium text-gray-700">
          PAN Number
        </label>
        <input
          type="text"
          id="pan"
          placeholder="Enter PAN Number"
          className={`w-full p-2 border rounded ${
            errors.pan ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.pan}
          onChange={(e) => handleInputChange('pan', e.target.value)}
        />
        {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan}</p>}
      </div>
    </div>
    </div>
  );
};

export default KYCDetails;
