import styles from './WordListEmpty.module.scss';

export default function WordListEmpty() {
  return (
    <div className={styles['empty-list']}>
      <p className={styles.list__notice}>
        Your list is empty! <br /> Start adding words to begin.
      </p>
    </div>
  );
}
