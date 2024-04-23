import styles from './App.module.css';
import Header from '../Header/Header';
import Balance from '../Balance/Balance';
import SetBudget from '../SetBudget/SetBudget';
import LogExpenses from '../LogExpenses/LogExpenses';
import EarlierExpenses from '../EarlierExpenses/EarlierExpenses';

function App() {
	return (
		<main className={styles.main_container}>
			<section className={styles.budget_container}>
				<header className={styles.header}>
					<Header />
				</header>
				<div className={styles.balance}>
					<Balance />
					<div className={styles.header_icon}>💰</div>
				</div>
			</section>

			<section className={styles.navigation_button_container}>
				<SetBudget />
				<LogExpenses />
				<EarlierExpenses />
			</section>
		</main>
	);
}

export default App;
