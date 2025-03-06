import { useContext } from 'react';
import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import { WordsContext } from '../../../context/WordsContext';

export default function ViewButtons({ onModeChange, word }) {
  const { deleteWord } = useContext(WordsContext);
  const onClick = () => {
    deleteWord(word);
  };
  return (
    <>
      <button className={styles.table__button} onClick={onModeChange}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onClick}>
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
