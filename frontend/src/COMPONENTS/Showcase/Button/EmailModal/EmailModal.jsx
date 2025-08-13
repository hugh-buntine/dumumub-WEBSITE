/**
 * EmailModal Component
 * 
 * Modal overlay for collecting user emails after plugin downloads.
 * Implements form validation, submission handling, and user feedback.
 * 
 * Features:
 * - Email validation and submission
 * - Loading states and error handling
 * - Auto-close after successful submission
 * - Minimal, non-intrusive design
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './EmailModal.module.scss';

// API configuration with development fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

const EmailModal = ({ onClose, plugin }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    /**
     * Handle email form submission
     * Validates input, submits to backend API, and manages UI state
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        // Debug logging for development/troubleshooting
        console.log('Submitting email for plugin:', plugin);
        console.log('API endpoint:', `${API_BASE_URL}/api/emails`);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/emails`, {
                email: email,
                plugin: plugin || 'DUMUMUB-0000003' // Fallback to first plugin
            });

            console.log('Email submission successful:', response.data);
            setMessage('thanks for your support');
            
            // Auto-close modal after showing success message
            setTimeout(() => {
                onClose();
            }, 4000);
        } catch (error) {
            console.error('Email submission failed:', error);
            
            // Handle specific error cases
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
                {/* Initial prompt or feedback message */}
                {!message && "hear about future plug-ins?"}
                {message && <div className={styles.message}>{message}</div>}
                
                {/* Email submission form */}
                {!message && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email address"
                            required
                            disabled={isSubmitting}
                            autoFocus
                        />
                        {/* Submit button only appears when email is entered */}
                        {email && (
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'submitting...' : 'submit'}
                            </button>
                        )}
                    </form>
                )}
                
                {/* Decline option when no email entered and no message showing */}
                {!email && !message && <button onClick={onClose}>no</button>}
            </div>
        </div>
    );
};

// PropTypes for development type checking
EmailModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    plugin: PropTypes.string.isRequired,
};

export default EmailModal;