import React from 'react';
import earlierExpensesImage from '../../assets/list-regular.svg';
import deleteImage from '../../assets/trash-sharp-regular.svg';
import styles from './EarlierExpenses.module.css';
import {useState, useEffect} from 'react';
import ExitButton from '../ExitButton/ExitButton';

const EarlierExpenses = ({expenseList, setExpenseList}) => {
	const [isHistoryOpen, setIsHistoryOpen] = useState(false);
	const [totalSum, setTotalSum] = useState(0);

	// TOGGLING EXPENSE HISTORY OPEN AND CLOSED
	const toggleHistory = () => {
		setIsHistoryOpen(!isHistoryOpen);
	};

	// DELETE METHOD FOR THE EXPENSES
	const handleDelete = (index) => {
		const updateExpenseList = expenseList.filter((expense, i) => i !== index);
		setExpenseList(updateExpenseList);
	};

	// METHOD FOR SUMMING UP ALL THE EXPENSES
	useEffect(() => {
		const sum = expenseList.reduce(
			(acc, expense) => acc + parseFloat(expense.amount),
			0
		);
		setTotalSum(sum);
	}, [expenseList]);

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
							<div className={styles.headline}>
								<h1>Expense History</h1>
							</div>
							<div className={styles.exit_button_container}>
								<ExitButton onClick={toggleHistory} />
							</div>
						</header>
						{expenseList && expenseList.length > 0 ? (
							<ul className={styles.expense_history_list}>
								{expenseList.map((expense, index) => (
									<li key={index} className={styles.list}>
										<div className={styles.list_elements}>
											<span className={styles.list_element}>
												<b>Title:</b> {expense.title}
											</span>
											<span className={styles.list_element}>
												<b>Date:</b> {expense.date}
											</span>
											<span className={styles.list_element}>
												<b>Amount:</b> {expense.amount}$
											</span>
											<span className={styles.list_element}>
												<b>Category:</b> {expense.category}
											</span>
										</div>
										<div className={styles.delete_button_container}>
											<button
												className={styles.delete_button}
												onClick={() => handleDelete(index)}
											>
												<img
													src={deleteImage}
													alt='Trash can image'
													className={styles.delete_image}
												/>
											</button>
										</div>
									</li>
								))}
							</ul>
						) : (
							<div className={styles.expense_history_list}>
								<p className={styles.no_content}>No expenses to show</p>
							</div>
						)}
						<footer className={styles.footer}>
							<h3>Total sum: ${totalSum}</h3>
						</footer>
					</div>
				</div>
			)}
		</>
	);
};

export default EarlierExpenses;
