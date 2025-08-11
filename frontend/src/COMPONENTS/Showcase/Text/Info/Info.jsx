import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Info.module.scss';

const Info = (props) => {
    const text = props.text;
  return (
    <div className = {styles.Info}>
        {text}
    </div>
  );
};

export default Info;