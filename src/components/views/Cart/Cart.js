import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cartProducts, removeProduct, clearCart } = props;
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h3>Cart</h3>
        <div className={styles.right}>
          <FontAwesomeIcon className={styles.sign} icon={faHome} />
          <FontAwesomeIcon className={styles.sign} icon={faChevronRight} />
          <p>Cart</p>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <table className='table'>
            <thead className={styles.tableTop}>
              <tr>
                <th scope='col' className='align-middle text-center'>
                  PRODUCT
                </th>
                <th scope='col' className='align-middle text-left pl-3'>
                  PRICE
                </th>
                <th scope='col' className='align-middle text-left'>
                  QUANTITY
                </th>
                <th scope='col' className='align-middle text-center pl-3'>
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map(product => (
                <tr key={product.id}>
                  <th scope='row' className={styles.product}>
                    <FontAwesomeIcon
                      onClick={() => removeProduct(product.id)}
                      className={styles.delete}
                      icon={faTimes}
                    />
                    <div className={styles.image}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    {product.name}
                  </th>
                  <td className='align-middle'>{product.price}</td>
                  <td className='align-middle'>
                    <div className={styles.quantity}>
                      <Button className={styles.button1} variant='outline'>
                        -
                      </Button>
                      <div className={styles.number}>
                        <input></input>
                      </div>
                      <Button className={styles.button2} variant='outline'>
                        +
                      </Button>
                    </div>
                  </td>
                  <td className='align-middle text-center pl-5'>$5.00</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.couponContainer}>
            <div className={styles.couponSummary}>
              <input type='text' placeholder='Coupon code'></input>
              <Button className={styles.code} variant='small'>
                APPLY COUPON
              </Button>
            </div>
            <Button className={styles.update} variant='small'>
              UPDATE CART
            </Button>
          </div>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <h3>Cart totals</h3>
            <div className={styles.subtotal}>
              <h5>Subtotal</h5>
              <p>$92.00</p>
            </div>
            <div className={styles.total}>
              <h5>Total</h5>
              <p>$92.00</p>
            </div>
            <Link to={`/`} className={styles.checkout}>
              <Button onClick={() => clearCart()} className={styles.checkoutButton}>
                PROCEED TO CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartProducts: PropTypes.array,
  removeProduct: PropTypes.func,
  clearCart: PropTypes.func,
};

export default Cart;
