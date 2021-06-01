import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import styles from './BlogHomepage.module.scss';
import Button from '../../common/Button/Button';

const BlogHomepage = ({ blogPosts }) => (
  <div className={styles.root}>
    <div className='container pb-3'>
      <div className='row'>
        <div className={'col-12'}>
          <div className='row no-gutters align-items-end line'>
            <div className={'col-12 col-md-auto ' + styles.heading}>
              <h3>Latest blog</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <Link to='/#' className={styles.active}>
                    page
                  </Link>
                </li>
                <li>
                  <Link to='/#'>page</Link>
                </li>
                <li>
                  <Link to='/#'>page</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='row'>
            {blogPosts.map(item => (
              <div className='col-lg-4 col-12 p-3' key={item.id}>
                <div>
                  <img src={item.image} alt='' />
                </div>
                <div className={styles.post}>
                  <div className={styles.info}>
                    <div className={styles.date}>
                      <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
                      <p>{item.date}</p>
                    </div>
                    <div className={styles.comments}>
                      <FontAwesomeIcon className={styles.icon} icon={faComments} />
                      <p>{item.comments}Comments</p>
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Button className={styles.button} variant='small'>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

BlogHomepage.propTypes = {
  blogPosts: PropTypes.array,
  text: PropTypes.string,
};

export default BlogHomepage;
