import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Register.module.scss';

const Register = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center justify-content-center'>
        <form className='col-6 align-self-center' action='/'>
          <div className='row '>
            <div className={'col-12 justify-content-between flex-row ' + styles.radios}>
              <label className={styles.radio}>
                <input type='radio' id='hasAccount' name='hasAccount'></input>
                <span className={styles.checkmark}></span>
                <label htmlFor='hasAccount'>Mam konto</label>
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
                <label htmlFor='hasNoAccount'>Nie mam konta</label>
                <br />
              </label>
            </div>
          </div>

          <div className='row'>
            <div className={'col-12 flex-column ' + styles.fields}>
              <span>Podaj dane do rejestracji</span>
              <div className={styles.field}>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='E-mail*'
                ></input>
              </div>
              <div className={styles.field}>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Hasło*'
                ></input>
              </div>
              <div className={styles.field}>
                <input
                  type='password'
                  id='repeatPass'
                  name='repeatPass'
                  placeholder='Powtórz hasło*'
                ></input>
              </div>

              <div className={styles.toggler}>
                <input type='checkbox' id='switch' className={styles.checkbox} />
                <label htmlFor='switch' className={styles.toggle}></label>
                <span>Pokaż hasło</span>
              </div>
            </div>
          </div>

          <div className='row '>
            <div className={'col-12 flex-column ' + styles.checkboxes}>
              <div>
                <label className={styles.checkbox}>
                  <input type='checkbox' id='markAll' name='markAll'></input>
                  <span>Zaznacz wszystko</span>
                </label>
              </div>
              <div>
                <label className={styles.checkbox}>
                  <input type='checkbox' id='regulation' name='regulation'></input>
                  <span>
                    Akceptuję warunki
                    <span>
                      {' '}
                      <a href='#'>regulaminu*</a>
                    </span>
                  </span>
                </label>
              </div>
              <div>
                <label className={styles.checkbox}>
                  <input type='checkbox' id='newsletter' name='newsletter'></input>
                  <span>Tak, tak! Chcę otrzymywać JEŻowy newsletter.</span>
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
                  <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} /> Wróć
                </Link>
              </div>
              <div className={styles.regButton}>
                <Link to={`/`}>Zarejestruj się</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
