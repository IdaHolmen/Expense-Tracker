import styles from './App.module.css';
import Header from '../components/Header';
import Balance from '../components/Balance';
import SetBudget from '../components/SetBudget';

function App() {
	return (
		<main className={styles.main_container}>
			<section className={styles.budget_container}>
				<header className={styles.header}>
					<Header />
				</header>
				<div className={styles.balance}>
					<Balance />
					<div className={styles.money_bag}>💰</div>
				</div>
			</section>

			<section className={styles.navigation_button_container}>
				<SetBudget />
			</section>
		</main>
	);
}

export default App;
