import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Button_Text.module.scss';

const Button_Text = ({ text }) => {
  return (
    <div className={`${styles.Button_Text} ${styles.noPointerEvents}`}>
      {text}
    </div>
  );
};

Button_Text.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Button_Text;