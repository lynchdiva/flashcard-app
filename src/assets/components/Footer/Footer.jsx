import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';
import { useLocation } from 'react-router';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {location.pathname === '/' ? (
          <Logo isLink={false} />
        ) : (
          <Logo isLink={true} />
        )}

        <span className={styles.footer__year}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
