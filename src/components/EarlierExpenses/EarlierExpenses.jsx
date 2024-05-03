import React from 'react';
import earlierExpensesImage from '../../assets/list-regular.svg';
import deleteImage from '../../assets/trash-sharp-regular.svg';
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
												Date: {expense.date}
											</span>
											<span className={styles.list_element}>
												Title: {expense.title}
											</span>
											<span className={styles.list_element}>
												Amount: {expense.amount}$
											</span>
											<span className={styles.list_element}>
												Category: {expense.category}
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
					</div>
				</div>
			)}
		</>
	);
};

export default EarlierExpenses;
