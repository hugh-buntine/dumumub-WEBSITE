import React from 'react';
import styles from './BackgroundText.module.scss';
import image from '../../../public/dumumub.png';

const BackgroundText = () => {
    return (
        <div className={styles.BackgroundText}>
            <img src={image} alt="Background" className={styles.BackgroundImage} />
        </div>
    );
};

export default BackgroundText;