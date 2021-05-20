import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

const Promotions = ({ promotion }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className={styles.image}>
            <img src={promotion.leftImage} alt='' className='p-1' />
            <div className={styles.description + ' ' + styles.descriptionLeft}>
              <h3>{promotion.leftDescription[0]}</h3>
              <h1>{promotion.leftDescription[1]}</h1>
              <h2>{promotion.leftDescription[2]}</h2>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <div className={styles.image + ' ' + styles.right}>
            <img src={promotion.rightUpImage} alt='' className='p-1 ' />
            <div className={styles.description + ' ' + styles.descriptionRightUp}>
              <h4>
                <span>{promotion.rightUpDescription[0]}</span>
                {promotion.rightUpDescription[1]}
              </h4>
              <h6>{promotion.rightUpDescription[2]}</h6>
              <h3>{promotion.rightUpDescription[3]}</h3>
            </div>
          </div>

          <div className={styles.image + ' ' + styles.right}>
            <img src={promotion.rightDownImage} alt='' className='p-1 ' />
            <div className={styles.description + ' ' + styles.descriptionRightDown}>
              <h5>
                <span>{promotion.rightDownDescription[0]}</span>
                {promotion.rightDownDescription[1]}
              </h5>
              <h6>
                {promotion.rightDownDescription[2]}
                <span>{promotion.rightDownDescription[3]}</span>
                {promotion.rightDownDescription[4]}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotions.propTypes = {
  promotion: PropTypes.object,
  leftImage: PropTypes.string,
  leftDescription: PropTypes.arrayOf(PropTypes.string),
  rightUpImage: PropTypes.string,
  rightUpDescription: PropTypes.arrayOf(PropTypes.string),
  rightDownImage: PropTypes.string,
  rightDownDescription: PropTypes.arrayOf(PropTypes.string),
};

export default Promotions;
