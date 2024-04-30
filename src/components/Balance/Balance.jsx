import React from 'react';
import styles from './Balance.module.css';
import {useState} from 'react';

const Balance = ({amount}) => {
	// console.log('Render Balance:', amount);
	return (
		<div className={styles.budget_text}>
			<p>Total budget</p>
			<h1>${amount}</h1>
		</div>
	);
};

export default Balance;
