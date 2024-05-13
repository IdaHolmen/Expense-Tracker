import {useState, useEffect} from 'react';
import setBudgetImage from '../../assets/hand-holding-dollar-light.svg';
import styles from './SetBudget.module.css';
import ReusableButton from '../ReusableButton/ReusableButton';
import ExitButton from '../ExitButton/ExitButton';

const SetBudget = ({
	updateBudgetAmount,
	clearBudget,
	isBudgetOpen,
	toggleBudget,
}) => {
	// const [isSetBudgetOpen, setIsSetBudgetOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState({});

	// // TOGGLING IF BUDGET IS OPEN OR NOT
	// const toggleSetBudget = () => {
	// 	setIsSetBudgetOpen(!isSetBudgetOpen);
	// };

	// TRACKING THE INPUT VALUE
	const handleAmountChange = (e) => {
		setInputValue(e.target.value);
		validateInput(inputValue);
	};

	// RUN validateInput WHENEVER inputValue CHANGES
	useEffect(() => {
		validateInput(inputValue);
	}, [inputValue]);

	// VALIDATING THE INPUT ELEMENT
	const validateInput = (inputValue) => {
		const clonedError = {...errorMessage};

		if (isNaN(inputValue)) {
			clonedError.numberError = 'Input value must be a number!';
		} else {
			clonedError.numberError = '';
		}
		setErrorMessage(clonedError);
	};

	// ADDING THE SUM FROM THE INPUT TO THE BUDGET, CLEARING FORM AND CLOSING MODULE
	const addToBudget = (e) => {
		e.preventDefault();
		const addedAmount = parseFloat(inputValue);
		if (!isNaN(addedAmount)) {
			updateBudgetAmount(addedAmount);
			setInputValue('');
			toggleBudget();
		}
	};

	return (
		<>
			<div className={styles.set_budget_add_container}>
				<button className={styles.set_budget_button} onClick={toggleBudget}>
					<img
						src={setBudgetImage}
						className={styles.set_budget_image}
						alt='Set Budget'
					/>
					Set total budget
				</button>
			</div>

			{isBudgetOpen && (
				<form className={styles.set_budget_container} onSubmit={addToBudget}>
					<div className={styles.set_budget_form}>
						<div className={styles.set_budget_header}>
							<ExitButton onClick={toggleBudget} />
						</div>
						<div className={styles.set_budget_main}>
							<label htmlFor='amount' className={styles.set_budget_label}>
								<b>How much</b> would you like to add to your budget?
							</label>
							<input
								type='text'
								value={inputValue}
								onChange={handleAmountChange}
							/>
							<p className={styles.error_message}>{errorMessage.numberError}</p>
						</div>
						<div className={styles.button_container}>
							<ReusableButton buttonText='Add to budget' type='submit' />
							<p>Or</p>
							<button className={styles.clear_button} onClick={clearBudget}>
								Clear budget
							</button>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default SetBudget;
