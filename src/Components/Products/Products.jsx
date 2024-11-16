import React from 'react';
import ProductCategories from './ProductCategories/ProductCategories';
import ProductTable from './ProductTable/ProductTable';
import styles from './Products.module.css';
function Products() {
  return (
<>
<div className={styles.maincantainer}>
<ProductTable/>
<ProductCategories/>
</div>
</>
  );
}

export default Products;
