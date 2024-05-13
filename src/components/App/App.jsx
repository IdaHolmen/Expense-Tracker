import {useState, useEffect} from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import SetBudget from '../SetBudget/SetBudget';
import LogExpenses from '../LogExpenses/LogExpenses';
import EarlierExpenses from '../EarlierExpenses/EarlierExpenses';

function App() {
	const [budgetAmount, setBudgetAmount] = useState(() => {
		const savedBudget = localStorage.getItem('budget');
		const initialValue = parseFloat(savedBudget);
		return isNaN(initialValue) ? 0 : initialValue;
	});

	const [expenseList, setExpenseList] = useState(() => {
		const savedExpenses = localStorage.getItem('expenses');
		const initialValue = JSON.parse(savedExpenses);
		return initialValue || [];
	});

	const [isBudgetOpen, setIsBudgetOpen] = useState(false);

	// ADDING BUDGET AND EXPENSES TO LOCAL STORAGE
	useEffect(() => {
		localStorage.setItem('budget', JSON.stringify(budgetAmount));
		localStorage.setItem('expenses', JSON.stringify(expenseList));
	}, [budgetAmount, expenseList]);

	// ADDING TO BUDGET
	const addToBudget = (amount) => {
		setBudgetAmount(budgetAmount + amount);
		changeHeader(budgetAmount + amount);
	};

	//SUBTRACTING FROM BUDGET
	const subtractFromBudget = (amount) => {
		setBudgetAmount(budgetAmount - amount);
		changeHeader(budgetAmount - amount);
	};

	// CLEARING THE BUDGET
	const clearBudget = () => {
		setBudgetAmount(0);
		setIsBudgetOpen(false);
	};

	// TOGGLING THE BUDGET
	const toggleBudget = () => {
		setIsBudgetOpen(!isBudgetOpen);
	};

	// UPDATING EXPENSE LIST
	const updateExpenseList = (newExpense) => {
		setExpenseList((prevExpenseList) => [...prevExpenseList, newExpense]);
	};

	// DELETE EXPENSE AND UPDATE BUDGET
	const updateBudgetWhenDeleted = (deletedAmount) => {
		const amountToAdd = parseFloat(deletedAmount);
		setBudgetAmount(budgetAmount + amountToAdd);

		// MAKING SURE THAT THE HEADER GOES BACK TO GREEN IF IT REACHES ZERO
		if (budgetAmount + amountToAdd >= 0) {
			changeHeader(0);
		}
	};

	// CHANGING HEADER COLOR IF WE REACH NEGATIVE NUMBER
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
				<SetBudget
					updateBudgetAmount={addToBudget}
					clearBudget={clearBudget}
					isBudgetOpen={isBudgetOpen}
					toggleBudget={toggleBudget}
				/>
				<LogExpenses
					subtractFromBudget={subtractFromBudget}
					updateExpenseList={updateExpenseList}
				/>
				<EarlierExpenses
					expenseList={expenseList}
					setExpenseList={setExpenseList}
					updateBudgetWhenDeleted={updateBudgetWhenDeleted}
					amount={budgetAmount}
				/>
			</section>
		</main>
	);
}

export default App;
