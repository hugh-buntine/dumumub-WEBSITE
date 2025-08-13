/**
 * Download Button Component
 * 
 * Handles plugin downloads and email collection workflow.
 * Creates programmatic downloads and triggers email modal for user engagement.
 * 
 * Features:
 * - Programmatic file download via temporary DOM elements
 * - Post-download email collection modal
 * - Conditional rendering based on link availability
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import EmailModal from './EmailModal/EmailModal';

const Button = (props) => {
    const { link, buttonText, title } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * Handle plugin download and email collection flow
     * Creates temporary download link, triggers download, then opens email modal
     */
    const handleDownload = () => {
        // Create temporary anchor element for programmatic download
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.setAttribute('download', `${title}-download`); // Dynamic filename based on plugin
        
        // Temporarily add to DOM, trigger download, then cleanup
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);

        // Open email collection modal after download initiates
        setIsModalOpen(true);
    };

    /**
     * Close email modal callback
     */
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Don't render button if no download link provided (used for "coming soon" sections)
    if (!link) {
        return <div></div>;
    }

    return (
        <div>
            <div className={styles.Button} onClick={handleDownload}>
                {buttonText}
            </div>
            {isModalOpen && (
                <EmailModal 
                    onClose={handleCloseModal} 
                    plugin={title} 
                />
            )}
        </div>
    );
};

// PropTypes for development type checking
Button.propTypes = {
    link: PropTypes.string.isRequired,      // Download URL for the plugin
    buttonText: PropTypes.string.isRequired, // Text to display on button
    title: PropTypes.string.isRequired,     // Plugin name for tracking and filename
};

export default Button;