import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles['loader-container']}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
