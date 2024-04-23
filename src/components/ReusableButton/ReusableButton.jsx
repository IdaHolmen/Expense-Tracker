import React from 'react';
import styles from './ReusableButton.module.css';

const ReusableButton = ({buttonText}) => {
	return (
		<>
			<button className={styles.reusable_button}>{buttonText}</button>
		</>
	);
};

export default ReusableButton;
