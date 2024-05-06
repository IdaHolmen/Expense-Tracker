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

	const [formData, setFormData] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const [errorMessages, setErrorMessages] = useState({
		titleError: '',
		amountError: '',
		dateError: '',
	});

	// TOGGLING THE EXPENSE MODULE OPEN AND CLOSED
	const toggleExpenses = () => {
		setIsLogExpensesOpen(!isLogExpensesOpen);
	};

	//
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	//FORM VALIDATION
	const validateInput = () => {
		const errors = {};

		// VALIDATE THE TITLE
		if (!formData.title.trim()) {
			errors.titleError = 'Expense title is required!';
		}

		// VALIDATING BY FIRST CHECKING IF THERE IS ANY CONTENT IN THE INPUT AND THEN IF IT IS A NUMBER
		const amountValue = formData.amount.trim();
		if (!amountValue) {
			errors.amountError = 'Amount is required!';
		} else if (isNaN(parseFloat(amountValue))) {
			errors.amountError = 'Input value must be a number!';
		}

		// VALIDATING THE DATE
		if (!formData.date) {
			errors.dateError = 'Date is required!';
		}

		setErrorMessages(errors);

		return Object.keys(errors).length === 0;
	};

	// HANDLING THE SUBMIT, SUBTRACTING FROM OVERALL BUDGET, AND STORING THE DATA IN AN ARRAY
	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateInput()) {
			const expenseFormData = new FormData(expenseForm.current);
			let newExpense = Object.fromEntries(expenseFormData.entries());
			newExpense.index = new Date(Date.now()).toISOString();
			const expenseAmount = parseFloat(newExpense.amount);
			if (!isNaN(expenseAmount)) {
				setExpenseList((prev) => [...prev, newExpense]);
				subtractFromBudget(expenseAmount);
				setFormData({
					title: '',
					amount: '',
					date: '',
				});
				toggleExpenses();
				updateExpenseList(newExpense);
			}
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
							<input
								type='text'
								name='title'
								value={formData.title}
								onChange={handleInputChange}
							/>
							<p className={styles.error}>{errorMessages.titleError}</p>
						</div>

						<div className={styles.expense_form_element}>
							<label htmlFor='amount'>
								<b>How much</b> is the expense?
							</label>
							<input
								type='text'
								name='amount'
								value={formData.amount}
								onChange={handleInputChange}
							/>
							<p className={styles.error}>{errorMessages.amountError}</p>
						</div>

						<div className={styles.expense_form_element}>
							<label htmlFor='date'>
								<b>When</b> did the purchase take place?
							</label>
							<input
								type='date'
								name='date'
								value={formData.date}
								onChange={handleInputChange}
							/>
							<p className={styles.error}>{errorMessages.dateError}</p>
						</div>

						<div className={styles.expense_form_element}>
							<label htmlFor='category'>
								<b>Which</b> category is the expense under?
							</label>
							<select name='category' className={styles.select_element}>
								<option value='-'>None</option>
								<option value='Housing 🏠'>Housing 🏠</option>
								<option value='Groceries 🍴'>Groceries 🍴</option>
								<option value='Transportation 🚲'>Transportation 🚲</option>
								<option value='Clothing 👕'>Clothing 👕</option>
								<option value='Other 💃'>Other 💃</option>
							</select>
						</div>
						<div className={styles.expense_form_element}>
							<ReusableButton buttonText={'Add Expense'} type='submit' />
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default LogExpenses;
