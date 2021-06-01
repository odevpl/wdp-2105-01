import React from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const validate = () => {
    let email, passwd, text;

    email = document.getElementById('email').value;
    passwd = document.getElementById('passwd').value;

    if (email !== 'admin') {
      text = 'Invalid login';
    } else if (passwd !== 'pass') {
      text = 'Invalid passwdord';
    } else {
      text = 'Everything OK';
    }

    document.getElementById('alert').innerHTML = text;
  };

  const formValidation = event => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin' && password === 'pass') {
      return true;
    } else if (email === '') {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('message').innerHTML = 'Empty login';
      event.preventDefault();
      return false;
    } else if (email !== 'admin') {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('message').innerHTML = 'Invalid login';
      event.preventDefault();
      return false;
    } else if (password === '') {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('message').innerHTML = 'Empty password';
      event.preventDefault();
      return false;
    } else if (password !== 'pass') {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('message').innerHTML = 'Invalid password';
      event.preventDefault();
      return false;
    }
  };

  const clearMessage = () => {
    document.getElementById('message').innerHTML = '';
  };

  return (
    <div className={styles.root}>
      <div className={styles.loginContainer}>
        <div className={`col-11 ${styles.loginBox}`}>
          <div className={styles.contentBox}>
            <div className={styles.contentName}>Login</div>
            <input type='email' id='email' onKeyUp={clearMessage} required></input>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.contentName}>Password</div>
            <input
              type='password'
              id='password'
              onKeyUp={clearMessage}
              required
            ></input>
          </div>
          <div className={styles.contentBottom}>
            <p>Forgot password?</p>
            <a href='#'>Remind password</a>
          </div>
          <div id='message'> </div>
          <Link onClick={formValidation} to={`/`} className={styles.buttonBox}>
            <button className={styles.loginBtn}>Log in</button>
          </Link>
        </div>
        <p id='alert'></p>
        <button className={styles.loginBtn} onClick={() => validate()}>
          Zaloguj się
        </button>
      </div>
    </div>
  );
};

export default Login;
