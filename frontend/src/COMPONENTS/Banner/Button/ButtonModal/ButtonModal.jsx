import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './ButtonModal.module.scss';

const ButtonModal = ({info, colour}) => {
    if (colour === "red") {
        return (
            <div>
                <div className = {styles.LineRed}></div>
                <div className = {styles.CircleRed}></div>
                <div className = {styles.Info}>{info}</div>
            </div>
        );
    }
    if (colour === "green") {
        return (
            <div>
                <div className = {styles.LineGreen}></div>
                <div className = {styles.CircleGreen}></div>
                <div className = {styles.Info}>{info}</div>
            </div>
        );
    }
    if (colour === "blue") {
        return (
            <div>
                <div className = {styles.LineBlue}></div>
                <div className = {styles.CircleBlue}></div>
                <div className = {styles.Info}>{info}</div>
            </div>
        );
    }
    
    
};

export default ButtonModal;