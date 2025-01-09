import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo />
        <span className={styles.footer__year}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
