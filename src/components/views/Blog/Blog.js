import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

const Blog = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={styles.blogTitle}>
          <h3>Blog</h3>
        </div>
        <div className={`col-12 ${styles.blogContainer}`}>
          <div className={`col-9 ${styles.leftBox}`}>
            <h3>Witamy na nowej stronie sklepu!</h3>
            <div className={styles.image}></div>
            <div className={styles.blogContent}>
              <p>
                Corporis quisquam deserunt. Fuga tenetur occaecati ex numquam autem.
                Tempora quisquam facere sint quo excepturi laborum. Itaque neque iusto
                omnis molestiae. Sunt illum quo vel ipsum illum provident veniam.Aliquid
                perspiciatis sed accusamus impedit...
              </p>
            </div>
            <div className={styles.bottomContent}>
              <div className={styles.bottomContentLeft}>
                <div className={styles.date}>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
                  <p>23 MAY 2021</p>
                </div>
                <div className={styles.comments}>
                  <FontAwesomeIcon className={styles.icon} icon={faComments} />
                  <a href='#'>Komentarze</a>
                </div>
              </div>
              <div className={styles.bottomContentRight}>
                <a href='#'>Czytaj Dalej...</a>
              </div>
            </div>
          </div>
          <div className={`col-3 ${styles.rightBox}`}>
            <input type='text' placeholder='Wyszukaj...'></input>
            <div className={styles.menuBoxes}>
              <div className={styles.menuBox}>
                <ul>
                  <h5>Najnowsze Posty</h5>
                  <li>Post 1</li>
                  <li>Post 2</li>
                  <li>Post 3</li>
                  <li>Post 4</li>
                </ul>
              </div>
              <div className={styles.menuBox}>
                <ul>
                  <h5>Najnowsze Komentarze</h5>
                </ul>
              </div>
              <div className={styles.menuBox}>
                <ul>
                  <h5>Kategorie</h5>
                </ul>
              </div>
              <div className={styles.menuBox}>
                <ul>
                  <h5>Archiwum</h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
