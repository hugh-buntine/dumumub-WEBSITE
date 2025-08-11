import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Letter.module.scss';

const Letter = (props) => {
    const letter = props.letter;

  return (
    <div className = {styles.Letter}>{letter}
    </div>
  );
};

export default Letter;