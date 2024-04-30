import React from 'react';
import Balance from '../Balance/Balance';
import styles from './Header.module.css';
const Header = ({amount}) => {
	return (
		<>
			<header className={styles.header}>
				<h1>Expense Tracker</h1>
			</header>
			<div className={styles.balance}>
				<Balance amount={amount} />
				<div className={styles.header_icon}>💰</div>
			</div>
		</>
	);
};

export default Header;
