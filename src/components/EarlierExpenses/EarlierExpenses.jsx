import React from 'react';
import earlierExpensesImage from '../../assets/list-regular.svg';
import styles from './EarlierExpenses.module.css';

const EarlierExpenses = () => {
	return (
		<div className={styles.earlier_expenses_container}>
			<button className={styles.earlier_expenses_button}>
				<img
					src={earlierExpensesImage}
					className={styles.earlier_expenses_image}
				/>
				See earlier expenses
			</button>
		</div>
	);
};

export default EarlierExpenses;
