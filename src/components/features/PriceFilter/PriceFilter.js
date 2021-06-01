import React from 'react';
import styles from './PriceFilter.module.scss';
import Button from '../../common/Button/Button';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const PriceFilter = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h5>Filter by price</h5>
    </div>
    <div className={styles.wrapperStyle}>
      <Range className={styles.range}
        min={0}
        max={1000}
        defaultValue={[135, 500]}
        allowCross={false}
        tipFormatter={value => `${value} $`}
        railStyle={{ backgroundColor: '#fff', border: 'solid 1px #d4d4d4', height: '8px', borderRadius: '2px'}}
        handleStyle={{
          borderColor: '#d58e32',
          borderWidth: '3px',
          height: 20,
          width: 20,
          backgroundColor: '#fff',
          boxShadow: 'none',
        }}
        trackStyle={[{
          backgroundColor: '#2a2a2a',
          height: '8px',
        }]}
      />
    </div>
    <div className={styles.options}>
      <Button className={styles.button} variant='small'>
        Filter
      </Button>
      <p>
        $
        <input type='text' placeholder='135'></input>
        -  $
        <input type='text' placeholder='500'></input>
      </p>
    </div>
  </div>
);

export default PriceFilter;
