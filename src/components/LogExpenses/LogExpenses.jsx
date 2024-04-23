import React from 'react';
import logExpensesImage from '../../assets/plus-regular.svg';
import styles from './LogExpenses.module.css';

const LogExpenses = () => {
	return (
		<div className={styles.log_expenses_button_container}>
			<button className={styles.log_expenses_button}>
				<img src={logExpensesImage} className={styles.log_expenses_image} />
				Log a new expense
			</button>
		</div>
	);
};

export default LogExpenses;
