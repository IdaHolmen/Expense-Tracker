import {useState} from 'react';
import setBudgetImage from '../../assets/hand-holding-dollar-light.svg';
import exitButtonImage from '../../assets/circle-xmark-light.svg';
import styles from './SetBudget.module.css';
import ReusableButton from '../ReusableButton/ReusableButton';

const SetBudget = ({updateBudgetAmount}) => {
	const [isSetBudgetOpen, setIsSetBudgetOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const toggleSetBudget = () => {
		setIsSetBudgetOpen(!isSetBudgetOpen);
	};

	const handleAmountChange = (e) => {
		setInputValue(e.target.value);
	};

	const addToBudget = (e) => {
		e.preventDefault();
		const addedAmount = parseFloat(inputValue);
		console.log({addedAmount});
		if (!isNaN(addedAmount)) {
			updateBudgetAmount(addedAmount);
			setInputValue('');
			toggleSetBudget();
		}
	};

	return (
		<>
			<div className={styles.set_budget_add_container}>
				<button className={styles.set_budget_button} onClick={toggleSetBudget}>
					<img
						src={setBudgetImage}
						className={styles.set_budget_image}
						alt='Set Budget'
					/>
					Set total budget
				</button>
			</div>

			{isSetBudgetOpen && (
				<form className={styles.set_budget_container} onSubmit={addToBudget}>
					<div className={styles.set_budget_form}>
						<div className={styles.set_budget_header}>
							<button
								className={styles.exit_set_budget_button}
								onClick={toggleSetBudget}
							>
								<img
									src={exitButtonImage}
									alt='Exit Button'
									className={styles.exit_button_image}
								/>
							</button>
						</div>
						<div className={styles.set_budget_main}>
							<label htmlFor='amount' className={styles.set_budget_label}>
								How much would you like to add to your budget?
							</label>
							<input
								type='text'
								value={inputValue}
								onChange={handleAmountChange}
							/>
						</div>
						<div className={styles.set_budget_add_container}>
							<ReusableButton buttonText='Add to budget' type='submit' />
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default SetBudget;
