import styles from './EmptyWordList.module.scss';

export default function EmptyWordList() {
  return (
    <div className={styles['empty-list']}>
      <p className={styles.list__notice}>
        Start by adding a word to expand your knowledge!
      </p>
    </div>
  );
}
