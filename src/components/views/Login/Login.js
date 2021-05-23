import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className={styles.root}>
    <div className={styles.loginContainer}>
      <div className={`col-11 ${styles.loginBox}`}>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Email</div>
          <input type='email' required></input>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Hasło</div>
          <input type='password' required></input>
        </div>
        <div className={styles.contentBottom}>
          <p>Nie pamiętasz hasła?</p>
          <a href='#'>Przypomnij hasło</a>
        </div>
        <Link to={`/`} className={styles.buttonBox}>
          <button className={styles.loginBtn}>Zaloguj się</button>
        </Link>
      </div>
    </div>
  </div>
);

// Login.propTypes = {};

export default Login;
