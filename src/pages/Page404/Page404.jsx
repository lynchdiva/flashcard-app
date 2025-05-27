import MinimalLayout from '../../layouts/MinimalLayout';
import styles from './Page404.module.scss';
import { Link } from 'react-router';

export default function Page404() {
  return (
    <MinimalLayout>
      <div className={styles.page404}>
        <div className={styles['page404__img-cloud-box']}>
          <img
            className={styles['page404__img-cloud']}
            src="./src/assets/images/clouds.png"
            alt="clouds"
          />
        </div>

        <div className={styles.page404__container}>
          <p className={styles.page404__error}>404</p>
          <p className={styles.page404__text}>
            This is not the page you are looking for
          </p>
          <Link to="/" className={styles.page404__btn}>
            Go Home
          </Link>
        </div>

        <div className={styles['page404__img-mountain-box']}>
          <img
            className={styles['page404__img-mountain']}
            src="./src/assets/images/page404.png"
            alt="Page404"
          />
        </div>
      </div>
    </MinimalLayout>
  );
}
