import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './EmailModal.module.scss';

const EmailModal = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission (e.g., send it to a server)
        console.log('Email submitted:', email);
        onClose();
    };

    return (
        <div className={styles.ModalOverlay}>
            <div className={styles.ModalContent}>
                hear about future plug-ins?
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email address"
                        required
                    />
                    {email && <button type="submit">submit</button>}
                </form>
                {!email && <button onClick={onClose}>no</button>}
            </div>
        </div>
    );
};

EmailModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default EmailModal;