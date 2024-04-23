import React from 'react';
import styles from './Balance.module.css';

const Balance = () => {
	return (
		<div className={styles.budget_text}>
			<p>Total budget</p>
			<h1>$0.00</h1>
		</div>
	);
};

export default Balance;
