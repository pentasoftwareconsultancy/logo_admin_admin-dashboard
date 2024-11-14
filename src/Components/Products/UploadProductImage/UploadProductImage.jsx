import React, { useState } from 'react';
import styles from './UploadProductImage.module.css';

const UploadProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // For the actual file

  // Handle image selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview image
      setImageFile(file); // Save the file for upload
    }
  };

  // Simulate an upload (this would be a real upload in a complete app)
  const handleUpload = async () => {
    if (!imageFile) {
      alert("Please select an image first.");
      return;
    }

    // Example: Use FormData to send the image to an API endpoint
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Placeholder for upload functionality
      // Replace with actual API call, e.g., axios.post("/api/upload", formData)
      console.log("Uploading image...", imageFile);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.imagePreview}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className={styles.previewImage} />
        ) : (
          <div className={styles.uploadIcon}>
            <span role="img" aria-label="Upload">☁️</span>
          </div>
        )}
      </div>
      <input
        type="file"
        // accept="image/*"
        className={styles.fileInput}
        // onChange={handleImageUpload}
      />
      <button className={styles.uploadButton} onClick={handleUpload}>
        UPLOAD PRODUCT IMAGE
      </button>
    </div>
  );
};

export default UploadProductImage;
