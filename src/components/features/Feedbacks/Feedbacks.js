import React from 'react';
import PropTypes from 'prop-types';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedbacks.module.scss';

const Feedbacks = ({ feedbacks }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row '>
        <div className={'col-12 justify-content-between '}>
          {/* <button type="button" className="btn btn-dark rounded-0">
            <a href='#'>
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
          </button> */}
          {feedbacks.map(feedback => (
            <div key={feedback.id}>{feedback.text}</div>
          ))}
          {/* <button type="button" className="btn btn-dark rounded-0">
            <a href='#'>
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </button> */}
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
