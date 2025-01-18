import { useState } from 'react';
import './banking-details.css';

const BankingDetails = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({ bankAccount: '', ifsc: '' });

  const validateBankAccount = (account) => {
    const accountRegex = /^\d{9,18}$/; // Bank account number: 9 to 18 digits
    return accountRegex.test(account);
  };

  const validateIFSC = (ifsc) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC code format
    return ifscRegex.test(ifsc);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === 'bankAccount') {
      setErrors({
        ...errors,
        bankAccount: validateBankAccount(value)
          ? ''
          : 'Bank account number must be 9 to 18 digits.',
      });
    }

    if (field === 'ifsc') {
      setErrors({
        ...errors,
        ifsc: validateIFSC(value)
          ? ''
          : 'IFSC code must be in the format ABCD0EFGHIJ.',
      });
    }
  };

  return (
    <div className="banking-details-container">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Banking Details</h2>

      {/* Bank Account Number Input */}
      <div>
        <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700">
          Bank Account Number
        </label>
        <input
          type="text"
          id="bankAccount"
          placeholder="Enter Bank Account Number"
          className={`w-full p-2 border rounded ${
            errors.bankAccount ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.bankAccount}
          onChange={(e) => handleInputChange('bankAccount', e.target.value)}
        />
        {errors.bankAccount && (
          <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>
        )}
      </div>

      {/* IFSC Code Input */}
      <div>
        <label htmlFor="ifsc" className="block text-sm font-medium text-gray-700">
          IFSC Code
        </label>
        <input
          type="text"
          id="ifsc"
          placeholder="Enter IFSC Code"
          className={`w-full p-2 border rounded ${
            errors.ifsc ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.ifsc}
          onChange={(e) => handleInputChange('ifsc', e.target.value)}
        />
        {errors.ifsc && <p className="text-red-500 text-sm mt-1">{errors.ifsc}</p>}
      </div>
    </div>
    </div>
  );
};

export default BankingDetails;
