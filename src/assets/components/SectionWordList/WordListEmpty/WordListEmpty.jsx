import styles from './WordListEmpty.module.scss';

export default function WordListEmpty() {
  return (
    <div className={styles['empty-list']}>
      <p className={styles.list__notice}>
        Start by adding a word to expand your knowledge!
      </p>
    </div>
  );
}
