import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedbacks.module.scss';
import Carousel from 'react-elastic-carousel';

const Feedbacks = ({ feedbacks }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row'>
        <div className={'col-12'}>
          <div className={'row no-gutters align-items-end line ' + styles.dotspace}>
            <div className={'col-11 col-sm-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
          </div>
          <div className='row'>
            <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
          </div>

          <div className='row justify-content-center feedback'>
            <Carousel>
              {feedbacks.map(feedback => (
                <div className='col-10 ' key={feedback.id}>
                  <p className='d-block w-100 text-center'>{feedback.text}</p>
                  <div className='row flex-column align-items-center d-flex justify-content-center'>
                    <div className='col-12'>
                      <div className='row flex-row align-items-center'>
                        <div className='col-2 col-md-3 col-lg-4'></div>
                        <div className='col-2 col-lg-1 flex-grow-1'>
                          <img src={feedback.foto} alt=''></img>
                        </div>
                        <div className='col-8 flex-column d-flex align-items-center'>
                          <span className={'col-12 ' + styles.name}>
                            {feedback.name}
                          </span>
                          <span className='col-12'>{feedback.description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Feedbacks.propTypes = {
  feedbacks: PropTypes.array,
  text: PropTypes.string,
};

export default Feedbacks;
