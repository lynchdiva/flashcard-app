import styles from './EditAndViewWord.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function EditWord(props) {
  const { english, transcription, russian, tags } = props.word;
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="english"
          value={english}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="transcription"
          value={transcription}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="russian"
          value={russian}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="tags"
          value={tags}
        />
      </td>
      <td className={styles.table__data}>
        <Options />
      </td>
    </tr>
  );
}

const Options = () => {
  return (
    <div className={styles.table__options}>
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
    </div>
  );
};

EditWord.propTypes = {
  word: PropTypes.object.isRequired
};
