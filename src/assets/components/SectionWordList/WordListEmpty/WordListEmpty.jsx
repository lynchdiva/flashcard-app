import styles from './WordListEmpty.module.scss';

export default function WordListEmpty() {
  return (
    <div className={styles['empty-list']}>
      <p className={styles.list__notice}>
        No words yet! Add some to get started.
      </p>
    </div>
  );
}
