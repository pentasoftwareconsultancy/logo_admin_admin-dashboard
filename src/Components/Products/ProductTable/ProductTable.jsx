import React, { useState } from 'react';
import styles from './ProductTable.module.css';

const ProductTable = () => {
  // State to hold the products data
  const [products, setProducts] = useState(
    Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      name: `Lorem Ipsum Product ${index + 1}`,
      unitSold: 1500 - index * 100,
      inStock: 500 + index * 100,
      expireDate: new Date(2019, 2 - index % 2, 20 + index).toLocaleDateString('en-GB'),
      isSelected: false
    }))
  );

  // State to manage popup visibility and new product data
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    unitSold: '',
    inStock: '',
    expireDate: '',
  });

  // Open and close popup
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setNewProduct({ name: '', unitSold: '', inStock: '', expireDate: '' });
  };

  // Handle input changes in the popup form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  // Add new product and close the popup
  const handleAddProduct = () => {
    const newProductData = {
      id: products.length,
      name: newProduct.name,
      unitSold: parseInt(newProduct.unitSold) || 0,
      inStock: parseInt(newProduct.inStock) || 0,
      expireDate: newProduct.expireDate || new Date().toLocaleDateString('en-GB'),
      isSelected: false,
    };
    setProducts([...products, newProductData]);
    closePopup();
  };

  // Toggle the selected state of a product
  const toggleSelectProduct = (id) => {
    setProducts(products.map((product) =>
      product.id === id ? { ...product, isSelected: !product.isSelected } : product
    ));
  };

  // Delete selected products
  const deleteSelectedProducts = () => {
    setProducts(products.filter(product => !product.isSelected));
  };

  return (
    <div className={styles.productTableContainer}>
      <div className={styles.scrollableTable}>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT NAME</th>
              <th>UNIT SOLD</th>
              <th>IN STOCK</th>
              <th>EXPIRE DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={product.isSelected}
                    onChange={() => toggleSelectProduct(product.id)}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.unitSold.toLocaleString()}</td>
                <td>{product.inStock.toLocaleString()}</td>
                <td>{product.expireDate}</td>
                <td>
                  <button className={styles.deleteButton}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.addButton} onClick={openPopup}>ADD NEW PRODUCT</button>
        <button className={styles.deleteSelectedButton} onClick={deleteSelectedProducts}>DELETE SELECTED PRODUCTS</button>
      </div>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>Add New Product</h3>
            <label>
              Product Name:
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Unit Sold:
              <input
                type="number"
                name="unitSold"
                value={newProduct.unitSold}
                onChange={handleInputChange}
              />
            </label>
            <label>
              In Stock:
              <input
                type="number"
                name="inStock"
                value={newProduct.inStock}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Expire Date:
              <input
                type="date"
                name="expireDate"
                value={newProduct.expireDate}
                onChange={handleInputChange}
              />
            </label>
            <div className={styles.popupButtons}>
              <button onClick={handleAddProduct}>Add</button>
              <button onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
