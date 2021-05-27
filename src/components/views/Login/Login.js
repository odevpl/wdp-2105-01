import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const formValidation = event => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin' && password === 'pass') {
      return true;
    } else {
      window.alert('Nieprawidłowe dane');
      event.preventDefault();
      return false;
    }
  };

  const passwordMatch = () => {
    const password = document.getElementById('password').value;

    if (password === '') {
      // document.getElementById('message').style.color = '#79AE30';
      document.getElementById('message').innerHTML = '';
    } else if (password !== 'pass') {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('message').innerHTML = 'Wrong password';
    } else {
      document.getElementById('message').style.color = '#79AE30';
      document.getElementById('message').innerHTML = 'Password Ok';
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.loginContainer}>
        <div className={`col-11 ${styles.loginBox}`}>
          <div className={styles.contentBox}>
            <div className={styles.contentName}>Login</div>
            <input type='email' id='email' required></input>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.contentName}>Password</div>
            <input
              type='password'
              id='password'
              onKeyUp={passwordMatch}
              required
            ></input>
          </div>
          <div className={styles.contentBottom}>
            <p>Forgot password?</p>
            <a href='#'>Remind password</a>
          </div>
          <div id='message'></div>
          <Link onClick={formValidation} to={`/`} className={styles.buttonBox}>
            <button className={styles.loginBtn}>Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => (
//   <div className={styles.root}>
//     <div className={styles.loginContainer}>
//       <div className={`col-11 ${styles.loginBox}`}>
//         <div className={styles.contentBox}>
//           <div className={styles.contentName}>Email</div>
//           <input type='email' required></input>
//         </div>
//         <div className={styles.contentBox}>
//           <div className={styles.contentName}>Hasło</div>
//           <input type='password' required></input>
//         </div>
//         <div className={styles.contentBottom}>
//           <p>Nie pamiętasz hasła?</p>
//           <a href='#'>Przypomnij hasło</a>
//         </div>
//         <Link to={`/`} className={styles.buttonBox}>
//           <button className={styles.loginBtn}>Zaloguj się</button>
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// Login.propTypes = {};

//export default Login;
