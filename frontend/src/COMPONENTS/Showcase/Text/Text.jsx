import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Text.module.scss';
import Title from './Title/Title';
import Info from './Info/Info';

const Text = (props) => {
    const title = props.title.toLowerCase();
    const info = props.info.toLowerCase();

  return (
    <div className = {styles.Text}>
        <Title text={title}/>
        <Info text={info}/>
    </div>
  );
};

export default Text;