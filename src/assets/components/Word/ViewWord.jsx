import styles from './EditAndViewWord.module.scss';
import PropTypes from 'prop-types';

export default function ViewWord(props) {
  const { english, transcription, russian, tags } = props.word;
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__data}>{english}</td>
      <td className={styles.table__data}>{transcription}</td>
      <td className={styles.table__data}>{russian}</td>
      <td className={styles.table__data}>{tags || '-'}</td>
      <td className={styles.table__data}>
        <Options />
      </td>
    </tr>
  );
}

const Options = () => {
  return (
    <div className={styles.table__options}>
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
    </div>
  );
};

ViewWord.propTypes = {
  word: PropTypes.object.isRequired
};
