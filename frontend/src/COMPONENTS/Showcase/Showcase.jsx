import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Showcase.module.scss';
import Box from './Box/Box';
import Text from './Text/Text';
import Image from './Image/Image';
import Button from './Button/Button';

const Showcase = (props) => {
  const title = props.title;
  const info = props.info;
  const img = props.img;
  const link = props.link;
  const buttonText = props.buttonText;


  return (
    <div className = {styles.Showcase}>
        <Box/>
        <Text title={title} info={info}/>
        <Image img={img}/>
        <Button link={link} buttonText={buttonText} title={title}/>

    </div>
  );
};

export default Showcase;