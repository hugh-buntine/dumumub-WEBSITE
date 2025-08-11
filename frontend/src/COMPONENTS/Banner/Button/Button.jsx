import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import Solid_Circle from './Solid_Circle/Solid_Circle';
import Button_Text from './Button_Text/Button_Text';
import ButtonModal from './ButtonModal/ButtonModal';

const Button = ({ colour, text, info}) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleOpenInfo = () => {
    setIsInfoOpen(true);
  }

  const handleCloseInfo = () => {
    setIsInfoOpen(false);
  }

  const onButtonClick = () => {
    if (isInfoOpen) {
      handleCloseInfo();
    } else {
      handleOpenInfo();
    }
  }
  
  return (
    <div className={styles.Button} onClick={onButtonClick}>
      <Solid_Circle colour={colour} />
      <Button_Text text={text} />
      {isInfoOpen && <ButtonModal info={info} colour={colour}/>}
    </div>
  );
};

Button.propTypes = {
  colour: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;