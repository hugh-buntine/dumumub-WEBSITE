import React from 'react';
import styles from './BackgroundText.module.scss';

const BackgroundText = () => {
    return (
        <div className={styles.BackgroundText}>
            <img src="/dumumub.png" alt="Background" className={styles.BackgroundImage} />
        </div>
    );
};

export default BackgroundText;