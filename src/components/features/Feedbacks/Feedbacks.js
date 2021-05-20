import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedbacks.module.scss';

const Feedbacks = ({ feedbacks }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row'>
        <div className={'col-12'}>
          <div className='row no-gutters align-items-end line'>
            <div className={'col-12 col-md-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='/#' className={styles.active}>
                    page
                  </a>
                </li>
                <li>
                  <a href='/#'>page</a>
                </li>
                <li>
                  <a href='/#'>page</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='row'>
            <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
          </div>

          <div className='row justify-content-center'>
            <div className='col-10'>
              <div
                id='carouselIndicators'
                className='carousel slide'
                data-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <p className='d-block w-100 text-center'>{feedbacks[0].text}</p>
                  </div>
                  <div className='carousel-item'>
                    <p className='d-block w-100 text-center'>{feedbacks[1].text}</p>
                  </div>
                  <div className='carousel-item'>
                    <p className='d-block w-100 text-center'>{feedbacks[2].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row flex-column align-items-center'>
            <div className='col-3'>
              <div className='row flex-row align-items-center'>
                <div className='col-4 flex-grow-1'>
                  <img alt=''></img>
                </div>
                <div className='col-8 flex-column d-flex align-items-center'>
                  <span className='col-12 name '>{feedbacks[0].name}</span>
                  <span className='col-12'>{feedbacks[0].description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Feedbacks.propTypes = {
  feedbacks: PropTypes.object,
  text: PropTypes.string,
};

export default Feedbacks;
