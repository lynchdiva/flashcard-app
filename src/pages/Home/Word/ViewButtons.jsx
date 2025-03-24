import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import { wordsStore } from '../../../stores/WordsStore';

export default function ViewButtons({ word, onModeChange }) {
  const onDelete = () => {
    wordsStore.deleteWord(word);
  };
  return (
    <>
      <button className={styles.table__button} onClick={onModeChange}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onDelete}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#bin"></use>
        </svg>
      </button>
    </>
  );
}

ViewButtons.propTypes = {
  word: PropTypes.object.isRequired,
  onModeChange: PropTypes.func.isRequired
};
