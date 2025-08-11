import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Title.module.scss';

const Title = (props) => {
    const text = props.text;
  return (
    <div className = {styles.Title}>
        {text}
    </div>
  );
};

export default Title;