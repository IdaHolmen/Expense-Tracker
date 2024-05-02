import React from 'react';
import earlierExpensesImage from '../../assets/list-regular.svg';
import styles from './EarlierExpenses.module.css';
import {useState} from 'react';
import ExitButton from '../ExitButton/ExitButton';

const EarlierExpenses = ({expenseList}) => {
	const [isHistoryOpen, setIsHistoryOpen] = useState(false);

	const toggleHistory = () => {
		setIsHistoryOpen(!isHistoryOpen);
	};

	return (
		<>
			<div className={styles.earlier_expenses_container}>
				<button
					className={styles.earlier_expenses_button}
					onClick={toggleHistory}
				>
					<img
						src={earlierExpensesImage}
						className={styles.earlier_expenses_image}
					/>
					See earlier expenses
				</button>
			</div>

			{isHistoryOpen && (
				<div className={styles.expense_history}>
					<div className={styles.expense_history_container}>
						<header className={styles.expense_history_header}>
							<ExitButton onClick={toggleHistory} />
						</header>
						<ul className={styles.expense_history_list}>
							{expenseList.map((expense, index) => (
								<li key={index} className={styles.list_item}>
									<div>Title: {expense.title}</div>
									<div>Amount: {expense.amount}</div>
									<div>Date: {expense.date}</div>
									<div>Category: {expense.category}</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default EarlierExpenses;
