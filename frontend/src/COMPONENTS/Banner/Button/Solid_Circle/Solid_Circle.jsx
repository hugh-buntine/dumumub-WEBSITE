import React from 'react';
import PropTypes from 'prop-types';
import styles from './Solid_Circle.module.scss';

const Solid_Circle = ({ colour }) => {
    const colourClassMap = {
        red: styles.Solid_Circle_Red,
        green: styles.Solid_Circle_Green,
        blue: styles.Solid_Circle_Blue,
    };

    return (
        <div className={`${styles.Solid_Circle} ${colourClassMap[colour]}`}>
        </div>
    );
};

Solid_Circle.propTypes = {
    colour: PropTypes.string.isRequired,
};

export default Solid_Circle;