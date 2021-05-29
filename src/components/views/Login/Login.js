import React from 'react';
import styles from './Login.module.scss';

function validate() {
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
}

const Login = () => (
  <div className={styles.root}>
    <div className={styles.loginContainer}>
      <div className={`col-11 ${styles.loginBox}`}>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Email</div>
          <input type='email' id='email' required></input>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.contentName}>Hasło</div>
          <input type='password' id='passwd' required></input>
        </div>
        <div className={styles.contentBottom}>
          <p>Nie pamiętasz hasła?</p>
          <a href='#'>Przypomnij hasło</a>
        </div>
        <p id='alert'></p>
        <button className={styles.loginBtn} onClick={()=>validate()}>
          Zaloguj się
        </button>
      </div>
    </div>
  </div>
);


export default Login;
