import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles['loader__container']}>
      <div className={styles['cssload-loader-walk']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
