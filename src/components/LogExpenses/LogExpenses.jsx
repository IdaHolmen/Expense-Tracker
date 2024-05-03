import React from 'react';
import logExpensesImage from '../../assets/plus-regular.svg';
import styles from './LogExpenses.module.css';
import {useState, useRef} from 'react';
import ReusableButton from '../ReusableButton/ReusableButton';
import ExitButton from '../ExitButton/ExitButton';

const LogExpenses = ({subtractFromBudget, updateExpenseList}) => {
	const [isLogExpensesOpen, setIsLogExpensesOpen] = useState(false);
	const [expenseList, setExpenseList] = useState([]);
	const expenseForm = useRef(null);

	const [errorMessages, setErrorMessages] = useState({});

	// TOGGLING THE EXPENSE MODULE OPEN AND CLOSED
	const toggleExpenses = () => {
		setIsLogExpensesOpen(!isLogExpensesOpen);
	};

	// HANDLING THE SUBMIT, SUBTRACTING FROM OVERALL BUDGET, AND STORING THE DATA IN AN ARRAY
	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseFormData = new FormData(expenseForm.current);
		let newExpense = Object.fromEntries(expenseFormData.entries());
		newExpense.index = new Date(Date.now()).toISOString();
		const expenseAmount = parseFloat(newExpense.amount);
		if (!isNaN(expenseAmount)) {
			setExpenseList((prev) => [...prev, newExpense]);
			subtractFromBudget(expenseAmount);
			expenseForm.current.reset();
			toggleExpenses();
			updateExpenseList(newExpense);
		} else {
			console.log('Invalid number');
		}
	};

	console.log(expenseList);

	// FORM VALIDATION
	const validateInput = (inputName, inputValue) => {
		const clonedErrors = {...errorMessages};

		if (inputName === 'title') {
			clonedErrors.titleError = !inputValue.trim()
				? 'Expense title is required!'
				: '';
		}
	};

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
					<div className={styles.form_elements_container}>
						<header className={styles.expenses_header}>
							<ExitButton onClick={toggleExpenses} />
						</header>

						<div className={styles.expense_form_element}>
							<label htmlFor='title'>
								<b>What</b> should your expense be called?
							</label>
							<input type='text' name='title' />
							<p>Error</p>
						</div>
						<div className={styles.expense_form_element}>
							<label htmlFor='amount'>
								<b>How much</b> is the expense?
							</label>
							<input type='text' name='amount' />
							<p>Error</p>
						</div>
						<div className={styles.expense_form_element}>
							<label htmlFor='date'>
								<b>When</b> did the purchase take place?
							</label>
							<input type='date' name='date' />
							<p>Error</p>
						</div>
						<div className={styles.expense_form_element}>
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
						<div className={styles.expense_form_element}>
							<ReusableButton buttonText={'Add Expense'} type='submit' />
							<p>Expense added! ✅</p>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default LogExpenses;
