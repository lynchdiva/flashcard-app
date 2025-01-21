import MinimalLayout from '../../layouts/MinimalLayout';
import styles from './Missing.module.scss';
import { Link } from 'react-router';

export default function Missing() {
  return (
    <MinimalLayout>
      <div className={styles.missing__box}></div>
      <div className={styles.missing}>
        <div className={styles['missing__img-cloud-box']}>
          <img
            className={styles['missing__img-cloud']}
            src="./src/assets/images/clouds.png"
            alt="clouds"
          />
        </div>

        <div className={styles.missing__container}>
          <p className={styles.missing__error}>404</p>
          <p className={styles.missing__text}>
            This is not the page you are looking for
          </p>
          <Link to="/" className={styles.missing__btn}>
            Go Home
          </Link>
        </div>

        <div className={styles['missing__img-mountain-box']}>
          <img
            className={styles['missing__img-mountain']}
            src="./src/assets/images/MissingPage.png"
            alt="Missing page"
          />
        </div>
      </div>
    </MinimalLayout>
  );
}
