import { useState } from 'react';
import './business-details.css';

const BusinessDetails = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({
    businessName: '',
    businessType: '',
    address: '',
    contactNumber: '',
  });

  const validateContactNumber = (number) => {
    const contactRegex = /^\d{10}$/; // Validates a 10-digit contact number
    return contactRegex.test(number);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'businessName' && !value.trim()) {
      setErrors({ ...errors, businessName: 'Business name is required.' });
    } else if (field === 'businessType' && !value) {
      setErrors({ ...errors, businessType: 'Please select a business type.' });
    } else if (field === 'address' && !value.trim()) {
      setErrors({ ...errors, address: 'Address is required.' });
    } else if (field === 'contactNumber') {
      setErrors({
        ...errors,
        contactNumber: validateContactNumber(value)
          ? ''
          : 'Contact number must be a 10-digit number.',
      });
    } else {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="business-details-container">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Business Details</h2>

      {/* Business Name Input */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          placeholder="Enter your business name"
          className={`w-full p-2 border rounded ${
            errors.businessName ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
        />
        {errors.businessName && (
          <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
        )}
      </div>

      {/* Business Type Dropdown */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
          Business Type
        </label>
        <select
          id="businessType"
          className={`w-full p-2 border rounded ${
            errors.businessType ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.businessType}
          onChange={(e) => handleInputChange('businessType', e.target.value)}
        >
          <option value="">Select a business type</option>
          <option value="restaurant">Restaurant</option>
          <option value="cloudKitchen">Cloud Kitchen</option>
          <option value="homeKitchen">Home Kitchen</option>
        </select>
        {errors.businessType && (
          <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
        )}
      </div>

      {/* Address Input */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          placeholder="Enter your business address"
          className={`w-full p-2 border rounded ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      {/* Contact Number Input */}
      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          placeholder="Enter your contact number"
          className={`w-full p-2 border rounded ${
            errors.contactNumber ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.contactNumber}
          onChange={(e) => handleInputChange('contactNumber', e.target.value)}
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default BusinessDetails;
