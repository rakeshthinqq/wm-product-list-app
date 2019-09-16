import React from 'react';
import styles from './container.module.css'; // Import css modules stylesheet as styles
import ProductList from '../../components/ProductList';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <div className={styles.layout}>
        <div className={styles.contianer}>
          <ProductList />
        </div>
      </div>
    </React.Fragment>
  );
}