import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Button from '../../common/Button/Button';

const Login = () => (
  <div className={styles.root}>
    <div className={styles.loginContainer}>
      <div className={`col-10 col-sm-7 col-md-5 col-lg-3 ${styles.loginBox}`}>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Email</div>
          <input type='email'></input>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Hasło</div>
          <input type='password'></input>
        </div>
        <div className={styles.contentBottom}>
          <p>Nie pamiętasz hasła?</p>
          <a href='#'>Przypomnij hasło</a>
        </div>
        <a href='/' className={styles.button}>
          <Button variant='small' className={styles.loginBtn}>
            Zaloguj się
          </Button>
        </a>
      </div>
    </div>
  </div>
);

// Login.propTypes = {};

export default Login;
