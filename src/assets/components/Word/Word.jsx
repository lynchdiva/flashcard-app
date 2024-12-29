import styles from './Word.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Word() {
  const editState = false;

  return editState ? <EditWord /> : <ViewWord />;
}

const ViewWord = () => {
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__data}>Word</td>
      <td className={styles.table__data}>[transcription]</td>
      <td className={styles.table__data}>Перевод</td>
      <td className={styles.table__data}>Theme</td>
      <td className={styles.table__options}>
        <button className={styles.table__button}>
          <svg className={styles.table__icon}>
            <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
          </svg>
        </button>
        <button className={styles.table__button}>
          <svg className={styles.table__icon}>
            <use xlinkHref="src/assets/icons/sprite.svg#bin"></use>
          </svg>
        </button>
      </td>
    </tr>
  );
};

const EditWord = () => {
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__data}>
        <input className={styles.table__input} type="text" placeholder="word" />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          placeholder="[transcription]"
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          placeholder="Перевод"
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          placeholder="Theme"
        />
      </td>
      <td className={styles.table__options}>
        <button
          className={cx({
            table__button: true,
            table__button_orange: true
          })}
        >
          <svg
            className={cx({
              table__icon: true,
              table__icon_orange: true
            })}
          >
            <use xlinkHref="src/assets/icons/sprite.svg#check-mark"></use>
          </svg>
        </button>
        <button className={styles.table__button}>
          <svg className={styles.table__icon}>
            <use xlinkHref="src/assets/icons/sprite.svg#cancel"></use>
          </svg>
        </button>
      </td>
    </tr>
  );
};
