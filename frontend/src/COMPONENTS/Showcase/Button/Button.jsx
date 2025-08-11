import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import EmailModal from './EmailModal/EmailModal'; // Import the modal component

const Button = (props) => {
    const { link, buttonText } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownload = () => {
        // Create a temporary link element
        const linkElement = document.createElement('a');
        linkElement.href = link;
        // Set the download attribute with a file name
        linkElement.setAttribute('download', 'dumumub-0000003-download'); // You can set the file name here
        // Append the link to the document body
        document.body.appendChild(linkElement);
        // Programmatically click the link to trigger the download
        linkElement.click();
        // Remove the link from the document
        linkElement.remove();

        // Open the modal to collect the email address
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!link) {
        return <div></div>;
    }

    return (
        <div>
            <div className={styles.Button} onClick={handleDownload}>
                {buttonText}
            </div>
            {isModalOpen && <EmailModal onClose={handleCloseModal} />}
        </div>
    );
};

Button.propTypes = {
    link: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Button;