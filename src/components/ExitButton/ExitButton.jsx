import React from 'react';
import styles from './ExitButton.module.css';
import exitButtonImage from '../../assets/xmark-light.svg';

const ExitButton = ({onClick}) => {
	return (
		<button className={styles.exit_set_budget_button} onClick={onClick}>
			<img
				src={exitButtonImage}
				alt='Exit Button'
				className={styles.exit_button_image}
			/>
		</button>
	);
};

export default ExitButton;
