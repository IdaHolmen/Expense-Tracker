import {useState} from 'react';
import styles from './App.module.css';
import exitButtonImage from '../../assets/circle-xmark-light.svg';
//COMPONENTS
import Header from '../Header/Header';
import Balance from '../Balance/Balance';
import SetBudget from '../SetBudget/SetBudget';
import LogExpenses from '../LogExpenses/LogExpenses';
import EarlierExpenses from '../EarlierExpenses/EarlierExpenses';
import ReusableButton from '../ReusableButton/ReusableButton';

function App() {
	const [isSetBudgetOpen, setIsSetBudgetOpen] = useState(false);
	const [budgetAmount, setBudgetAmount] = useState(0);
	const [inputValue, setInputValue] = useState('');
	const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

	//BUDGET PORTION
	const toggleSetBudget = () => {
		setIsSetBudgetOpen(!isSetBudgetOpen);
	};

	const handleAmountChange = (e) => {
		setInputValue(e.target.value);
		console.log(inputValue);
	};

	const addToBudget = () => {
		const addedAmount = parseFloat(inputValue);
		if (!isNaN(addedAmount)) {
			console.log('Render Balance:', amount);
			setBudgetAmount(budgetAmount + addedAmount);
			setInputValue('');
		}
	};

	// console.log('Render App:', {isSetBudgetOpen, budgetAmount, inputValue});
	return (
		<main className={styles.main_container}>
			<section className={styles.budget_container}>
				<header className={styles.header}>
					<Header />
				</header>
				<div className={styles.balance}>
					<Balance amount={budgetAmount} />
					<div className={styles.header_icon}>💰</div>
				</div>
			</section>

			<section className={styles.navigation_button_container}>
				<SetBudget isOpen={isSetBudgetOpen} toggleSetBudget={toggleSetBudget} />
				<LogExpenses />
				<EarlierExpenses />
			</section>

			{isSetBudgetOpen && (
				<form className={styles.set_budget_container}>
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
							<ReusableButton
								buttonText='Add to budget'
								onClick={addToBudget}
								type='button'
							/>
						</div>
					</div>
				</form>
			)}
		</main>
	);
}

export default App;
