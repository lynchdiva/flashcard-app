import { useContext } from 'react';
import styles from './ProgressButtons.module.scss';
import PropTypes from 'prop-types';
import { WordsContext } from '../../../context/WordsContext';

export default function ProgressButtons({ word, onMoveCard }) {
  const { addLearnedWord, deleteLearnedWord } = useContext(WordsContext);

  const moveAndMarkAsLearned = () => {
    addLearnedWord(word);
    onMoveCard('learned', 'forward');
  };

  const moveAndMarkAsInProgress = () => {
    deleteLearnedWord(word);
    onMoveCard('in-progress', 'forward');
  };

  return (
    <div className={styles['card-buttons-container']}>
      <button
        className={styles['dont-know-button']}
        onClick={moveAndMarkAsInProgress}
      >
        Don’t know
      </button>
      <button className={styles['know-button']} onClick={moveAndMarkAsLearned}>
        Know
      </button>
    </div>
  );
}

ProgressButtons.propTypes = {
  word: PropTypes.object.isRequired,
  onMoveCard: PropTypes.func.isRequired
};
