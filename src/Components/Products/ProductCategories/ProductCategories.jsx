import React, { useState } from 'react';
import styles from './ProductCategories.module.css';

const ProductCategories = () => {
  // State to manage categories and popup visibility
  const [categories, setCategories] = useState(
    Array.from({ length: 7 }).map((_, index) => `Product Category ${index + 1}`)
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  // Open and close popup
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setNewCategory('');
  };

  // Handle input changes in the popup form
  const handleInputChange = (e) => setNewCategory(e.target.value);

  // Add new category and close the popup
  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      closePopup();
    }
  };

  return (
    <div className={styles.categoriesContainer}>
      <h2>Product Categories</h2>
      <div className={styles.categoriesList}>
        {categories.map((category, index) => (
          <div className={styles.categoryItem} key={index}>
            {category}
            <button className={styles.deleteButton}>🗑️</button>
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={openPopup}>ADD NEW CATEGORY</button>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Add New Category</h3>
            <label>
              Category Name:
              <input
                type="text"
                value={newCategory}
                onChange={handleInputChange}
                placeholder="Enter category name"
              />
            </label>
            <div className={styles.popupButtons}>
              <button onClick={handleAddCategory}>Add</button>
              <button onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
