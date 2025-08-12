import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './EmailModal.module.scss';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

const EmailModal = ({ onClose, plugin }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        console.log('API_BASE_URL:', API_BASE_URL);
        console.log('Submitting email to:', `${API_BASE_URL}/api/emails`);
        console.log('Email data:', { email, plugin: plugin || 'DUMUMUB-0000003' });
        console.log('Environment:', import.meta.env);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/emails`, {
                email: email,
                plugin: plugin || 'DUMUMUB-0000003'
            });

            console.log('Response:', response.data);
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
    plugin: PropTypes.string.isRequired,
};

export default EmailModal;