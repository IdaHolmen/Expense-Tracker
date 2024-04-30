import React from 'react';
import logExpensesImage from '../../assets/plus-regular.svg';
import styles from './LogExpenses.module.css';
import {useState, useRef} from 'react';
import ReusableButton from '../ReusableButton/ReusableButton';

const LogExpenses = () => {
	const [isLogExpensesOpen, setIsLogExpensesOpen] = useState(false);
	const [expenseList, setExpenseList] = useState([]);
	const expenseForm = useRef(null);

	const toggleExpenses = () => {
		setIsLogExpensesOpen(!isLogExpensesOpen);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseFormData = new FormData(expenseForm.current);
		let newExpense = {};
		newExpense = Object.fromEntries(expenseFormData.entries());
		setExpenseList((prev) => [...prev, newExpense]);
		expenseForm.current.reset();
	};

	console.log(expenseList);

	return (
		<>
			<div className={styles.log_expenses_button_container}>
				<button className={styles.log_expenses_button} onClick={toggleExpenses}>
					<img src={logExpensesImage} className={styles.log_expenses_image} />
					Log a new expense
				</button>
			</div>

			{isLogExpensesOpen && (
				<form
					className={styles.expense_form}
					onSubmit={handleSubmit}
					ref={expenseForm}
				>
					<div>
						<label htmlFor='name'>
							<b>What</b> should your expense be called?
						</label>
						<input type='text' name='name' />
						<p>Error</p>
					</div>
					<div>
						<label htmlFor='amount'>
							<b>How much</b> is the expense?
						</label>
						<input type='text' name='amount' />
						<p>Error</p>
					</div>
					<div>
						<label htmlFor='category'>
							<b>Which</b> category is the expense under?
						</label>
						<select name='category'>
							<option value='housing'>Housing 🏠</option>
							<option value='groceries'>Groceries 🍴</option>
							<option value='transportation'>Transportation 🚲</option>
							<option value='clothing'>Clothing 👕</option>
							<option value='other'>Other 💃</option>
						</select>
					</div>
					<ReusableButton buttonText={'Add Expense'} />
				</form>
			)}
		</>
	);
};

export default LogExpenses;
