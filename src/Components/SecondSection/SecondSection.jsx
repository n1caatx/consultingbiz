import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import styles from './SecondSection.module.css';

const SecondSection = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Adjust as needed
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product);
   };

  const handleAddToBasket = (product) => {
    console.log('Added to basket:', product);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.texts}>
          <p className={styles.firsttext}>Our Top Products</p>
          <p className={styles.title}>Check Out Our Collection</p>
        </div>

        <div className={styles.cards}>
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error: {error}</p>}
          {status === 'succeeded' &&
            currentProducts.map((product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <p className={styles.strategy}>{product.title}</p>
                <p className={styles.there}>{product.description}</p>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.wishlistButton}
                    onClick={() => handleAddToWishlist(product)}
                  >
                    Add to Wishlist
                  </button>
                  <button
                    className={styles.basketButton}
                    onClick={() => handleAddToBasket(product)}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Prev
          </button>
          <p className={styles.pageInfo}>
            Page {currentPage} of {Math.ceil(products.length / productsPerPage)}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(products.length / productsPerPage)}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
