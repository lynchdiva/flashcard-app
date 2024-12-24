import styles from './Header.module.scss';
import Logo from '../Logo/Logo.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <HeaderButton />
      </div>
    </header>
  );
}

function HeaderButton() {
  return <button className={styles.header__button}>Get Started</button>;
}
