import {useState} from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import SetBudget from '../SetBudget/SetBudget';
import LogExpenses from '../LogExpenses/LogExpenses';
import EarlierExpenses from '../EarlierExpenses/EarlierExpenses';

function App() {
	const [budgetAmount, setBudgetAmount] = useState(0);
	const [expenseList, setExpenseList] = useState([]);

	const addToBudget = (amount) => {
		setBudgetAmount(budgetAmount + amount);
		changeHeader(budgetAmount + amount);
	};

	const subtractFromBudget = (amount) => {
		setBudgetAmount(budgetAmount - amount);
		changeHeader(budgetAmount - amount);
	};

	const updateExpenseList = (newExpense) => {
		setExpenseList((prevExpenseList) => [...prevExpenseList, newExpense]);
	};

	const changeHeader = (amount) => {
		const budgetContainer = document.querySelector(
			`.${styles.budget_container}`
		);
		if (amount < 0) {
			budgetContainer.classList.add(styles.negative_budget);
		} else {
			budgetContainer.classList.remove(styles.negative_budget);
		}
	};

	return (
		<main className={styles.main_container}>
			<section className={styles.budget_container}>
				<Header amount={budgetAmount} />
			</section>

			<section className={styles.navigation_button_container}>
				<SetBudget updateBudgetAmount={addToBudget} />
				<LogExpenses
					subtractFromBudget={subtractFromBudget}
					updateExpenseList={updateExpenseList}
				/>
				<EarlierExpenses expenseList={expenseList} />
			</section>
		</main>
	);
}

export default App;
