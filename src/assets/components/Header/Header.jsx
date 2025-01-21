import styles from './Header.module.scss';
import Logo from '../Logo/Logo.jsx';
import { useLocation, Link } from 'react-router';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {location.pathname === '/' ? (
          <>
            <Logo isLink={false} />

            <Link to="/game" className={styles.header__button}>
              Get Started
            </Link>
          </>
        ) : (
          <>
            <Logo isLink={true} />

            <Link to="/" className={styles.header__button}>
              Go Back
              <img
                className={styles.header__img}
                src="./src/assets/images/climbing-girl.svg"
                alt="climbing girl"
              />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
