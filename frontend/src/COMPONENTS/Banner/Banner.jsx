import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from './Button/Button';
import styles from './Banner.module.scss';

const Banner = () => {
    const red = "red";
    const green = "green";
    const blue = "blue";
    const button1Text = "about";
    const button1info = "dumumub is an audio plug-in creation project run by a human person\nthe project intends to provide experimental audio plug-ins for musicians to utilize to produce and/or perform interesting sounds and/or music\nthe plug-ins are free\nenjoy";

    const button2Text = "plugins";
    const button2info = "dumumub-0000003:\n\na wavetable synthesizer that allows the user to create and manipulate wavetables by dragging and dropping audio files and images or drawing in their wave directly onto the plugin";

    const button3Text = "contact";
    const button3info = "email:\nhi@dumumub.com\n\ninstagram:\n@dumumub";


    return (
        <div className={styles.Banner}>
            <Button colour={red} text={button1Text} info={button1info} /> 
            <Button colour={green} text={button2Text} info={button2info} /> 
            <Button colour={blue} text={button3Text} info={button3info} />
        </div>
    );
};

export default Banner;