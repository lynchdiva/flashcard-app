import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <h1 className={styles.title}>
      Every<span className={styles.title__accent}>Day</span> English
    </h1>
  );
}
