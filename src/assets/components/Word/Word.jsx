import styles from './Word.module.scss';

export default function Word() {
  return (
    <li className={styles.word}>
      <div className={styles.word__box}>
        <p className={styles.word__text}>Word</p>
        <div className={styles.word__line}></div>
        <p className={styles.word__text}>[transcription]</p>
        <div className={styles.word__line}></div>
      </div>

      <div className={styles.word__box}>
        <p className={styles.word__text}> Перевод</p>
        <div className={styles.word__line}></div>
        <p className={styles.word__text}>Theme</p>
        <div className={styles.word__line}></div>
      </div>

      <div className={styles['word__icon-box']}></div>
    </li>
  );
}

// const WordBox = (props) => {

// }
