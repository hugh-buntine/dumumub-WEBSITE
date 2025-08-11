import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Margin.module.scss';
import Letter from './Letter/Letter';

const Margin = () => {
  return (
    <div className = {styles.Margin}>
      <Letter letter = "d" />
      <Letter letter = "u" />
      <Letter letter = "m" />
      <Letter letter = "u" />
      <Letter letter = "m" />
      <Letter letter = "u" />
      <Letter letter = "b" />
    </div>
  );
};

export default Margin;