import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Register.module.scss';

const Register = () => {
  const formValidation = event => {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('repeatPass').value;

    if (password !== confirmPassword) {
      window.alert('Please make sure your passwords match');
      event.preventDefault();
      return false;
    } else if (
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmPassword.length >= 3 &&
      password === confirmPassword
    ) {
      return true;
    } else {
      window.alert('Please make sure you have filled in all required fields correctly');
      event.preventDefault();
      return false;
    }
  };

  const passwordMatch = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('repeatPass').value;

    if (password !== confirmPassword) {
      document.getElementById('message').style.color = '#FF0000';
      document.getElementById('repeatPass').style.borderColor = '#FF0000';
      document.getElementById('message').innerHTML = 'Passwords are not matching';
    } else {
      document.getElementById('message').style.color = '#79AE30';
      document.getElementById('repeatPass').style.borderColor = '#79AE30';
      document.getElementById('message').innerHTML = 'Passwords are matching';
    }
  };

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <form className='col-6 align-self-center' action='/'>
            <div className='row '>
              <div
                className={'col-12 justify-content-between flex-row ' + styles.radios}
              >
                <label className={styles.radio}>
                  <input type='radio' id='hasAccount' name='hasAccount'></input>
                  <span className={styles.checkmark}></span>
                  <label htmlFor='hasAccount'>I have an account</label>
                  <br />
                </label>
                <label className={styles.radio}>
                  <input
                    type='radio'
                    id='hasNoAccount'
                    name='hasAccount'
                    defaultChecked
                  ></input>
                  <span className={styles.checkmark}></span>
                  <label htmlFor='hasNoAccount'>I don&apos;t have an account</label>
                  <br />
                </label>
              </div>
            </div>
            <div className='row'>
              <div className={'col-12 flex-column ' + styles.fields}>
                <span>Create your account</span>
                <div className={styles.field}>
                  <input
                    type='text'
                    id='first_name'
                    name='first_name'
                    placeholder='First name *'
                    minLength='3'
                    maxLength='30'
                  ></input>
                  <p className={styles.error}>
                    Your first name must be between 3 and 30 characters
                  </p>
                </div>
                <div className={styles.field}>
                  <input
                    type='text'
                    id='last_name'
                    name='last_name'
                    placeholder='Last name *'
                    minLength='3'
                    maxLength='30'
                  ></input>
                  <p className={styles.error}>
                    Your last name must be between 3 and 30 characters
                  </p>
                </div>
                <div className={styles.field}>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='E-mail *'
                  ></input>
                  <p className={styles.error}>
                    Please make sure your email address is in correct format
                  </p>
                </div>
                <div className={styles.field}>
                  <input
                    type={values.showPassword ? 'text' : 'password'}
                    onKeyUp={passwordMatch}
                    id='password'
                    name='password'
                    placeholder='Password *'
                    minLength='3'
                  ></input>
                  <p className={styles.error}>
                    Please make sure your passwords match and consist of at least 3
                    characters
                  </p>
                </div>
                <div className={styles.field}>
                  <input
                    type={values.showPassword ? 'text' : 'password'}
                    onKeyUp={passwordMatch}
                    id='repeatPass'
                    name='repeatPass'
                    placeholder='Confirm password *'
                  ></input>
                  <p className={styles.message} id='message'></p>
                </div>
                <div className={styles.toggler}>
                  <input
                    onClick={handleClickShowPassword}
                    type='checkbox'
                    id='switch'
                    className={styles.checkbox}
                  />
                  <label htmlFor='switch' className={styles.toggle}></label>
                  <span>Show password</span>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className={'col-12 flex-column ' + styles.checkboxes}>
                <div>
                  <label className={styles.checkbox}>
                    <input type='checkbox' id='markAll' name='markAll'></input>
                    <span>
                      <b>Select all</b>
                    </span>
                  </label>
                </div>
                <div>
                  <label className={styles.checkbox}>
                    <input
                      type='checkbox'
                      id='regulation'
                      name='regulation'
                      required
                    ></input>
                    <span>
                      I accept the
                      <span>
                        {' '}
                        <a href='#'>Terms and Conditions *</a>
                      </span>
                    </span>
                  </label>
                </div>
                <div>
                  <label className={styles.checkbox}>
                    <input type='checkbox' id='newsletter' name='newsletter'></input>
                    <span>Yes, I want to receive the newsletter</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div
                className={'col-12 flex-row justify-content-between ' + styles.buttons}
              >
                <div className={styles.regButton}>
                  <Link to={`/`}>
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />{' '}
                    Back
                  </Link>
                </div>
                <div className={styles.regButton}>
                  <Link onClick={formValidation} to={`/`}>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
