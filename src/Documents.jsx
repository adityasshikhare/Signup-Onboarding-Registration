import { useState } from 'react';
import './documents.css';

const Documents = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({ fssai: '', gst: '' });

  const validateFSSAI = (fssai) => {
    const fssaiRegex = /^\d{14}$/; // FSSAI should be a 14-digit number
    return fssaiRegex.test(fssai);
  };

  const validateGST = (gst) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/; // GST number format
    return gstRegex.test(gst);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'fssai') {
      setErrors({
        ...errors,
        fssai: validateFSSAI(value) ? '' : 'FSSAI must be a 14-digit number.',
      });
    }

    if (field === 'gst') {
      setErrors({
        ...errors,
        gst: validateGST(value) ? '' : 'Invalid GST number format.',
      });
    }
  };

  return (
    <div className='documents-container'>
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Documents</h2>

      {/* FSSAI License Input */}
      <div>
        <label htmlFor="fssai" className="block text-sm font-medium text-gray-700">
          FSSAI License Number
        </label>
        <input
          type="text"
          id="fssai"
          placeholder="Enter FSSAI License Number"
          className={`w-full p-2 border rounded ${
            errors.fssai ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.fssai}
          onChange={(e) => handleInputChange('fssai', e.target.value)}
        />
        {errors.fssai && <p className="text-red-500 text-sm mt-1">{errors.fssai}</p>}
      </div>

      {/* GST Number Input */}
      <div>
        <label htmlFor="gst" className="block text-sm font-medium text-gray-700">
          GST Number (Optional)
        </label>
        <input
          type="text"
          id="gst"
          placeholder="Enter GST Number"
          className={`w-full p-2 border rounded ${
            errors.gst ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.gst}
          onChange={(e) => handleInputChange('gst', e.target.value)}
        />
        {errors.gst && <p className="text-red-500 text-sm mt-1">{errors.gst}</p>}
      </div>
    </div>
    </div>
  );
};

export default Documents;
