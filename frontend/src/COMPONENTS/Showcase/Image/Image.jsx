import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Image.module.scss';

const Image = (props) => {
    const img = props.img;
    if (img === "") {
        return null;
    }
    
  return (
    <div className = {styles.Image}>
        <img src={img} alt={img} className={styles.ShowcaseImage} />
    </div>
  );
};

export default Image;