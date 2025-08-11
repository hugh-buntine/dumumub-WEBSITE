import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './EmailModal.module.scss';

const EmailModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5001/api/emails', {
                email: email,
                plugin: 'DUMUMUB-0000003'
            });

            setMessage('thanks for your support');
            setTimeout(() => {
                onClose();
            }, 4000);
        } catch (error) {
            console.error('Error submitting email:', error);
            
            if (error.response?.status === 409) {
                setMessage('Email already registered!');
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.ModalOverlay}>
            <div className={styles.ModalContent}>
                {!message && "hear about future plug-ins?"}
                {message && <div className={styles.message}>{message}</div>}
                
                {!message && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email address"
                            required
                            disabled={isSubmitting}
                        />
                        {email && (
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'submitting...' : 'submit'}
                            </button>
                        )}
                    </form>
                )}
                
                {!email && !message && <button onClick={onClose}>no</button>}
            </div>
        </div>
    );
};

EmailModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default EmailModal;