import { useState } from 'react';
import { Camera } from 'lucide-react';
import './upload-photo.css';

const UploadPhoto = ({ formData, setFormData }) => {
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        setError('Only JPG, PNG, or GIF files are allowed.');
        return false;
      }
      if (file.size > maxSize) {
        setError('Each file must be less than 10MB.');
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFormData({ ...formData, photos: [...formData.photos, ...validFiles] });
      setError('');
    }
  };

  const handleDelete = (index) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    setFormData({ ...formData, photos: newPhotos });
  };

  return (
    <div className="space-y-4">
  <h2 className="text-2xl font-bold">Upload Photos</h2>
  <div className="upload-area">
    <div>
      <Camera className="upload-icon" size={48} />
      <input
        type="file"
        accept="image/*"
        multiple
        id="photos"
        onChange={handleFileChange}
      />
      <label htmlFor="photos">
        <span>Click to upload multiple photos</span>
        <span>JPG, PNG, GIF up to 10MB each</span>
      </label>
    </div>

    {error && <p className="error-message">{error}</p>}

    {formData.photos && formData.photos.length > 0 && (
      <div className="photo-grid">
        {formData.photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img
              src={URL.createObjectURL(photo)}
              alt={`Upload ${index + 1}`}
            />
            <button onClick={() => handleDelete(index)}>×</button>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default UploadPhoto;
