import styles from './StartPage.module.css';
import SignIn  from './SignIn.jsx';
import CreateAccount from './CreateAccount.jsx';


export default function StartPage() {
  return (
    <main className={styles.main_container}>
      <header className={styles.start_page_header}>
        <SignIn />
      </header>

      <p className={styles.welcome_text}>Track your expenses to get a better understanding of where your money is going 💸</p>
      <p className={styles.choice_text}>Sign in or <CreateAccount /> to get going!</p>
    </main>
  )
}
