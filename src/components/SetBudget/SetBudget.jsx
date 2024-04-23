import React from 'react';
import setBudgetImage from '../../assets/hand-holding-dollar-light.svg';
import styles from './SetBudget.module.css';

const SetBudget = ({isOpen, toggleSetBudget}) => {
	return (
		<div className={styles.set_budget_button_container}>
			<button className={styles.set_budget_button} onClick={toggleSetBudget}>
				<img src={setBudgetImage} className={styles.set_budget_image} />
				Set total budget
			</button>
		</div>
	);
};

export default SetBudget;
