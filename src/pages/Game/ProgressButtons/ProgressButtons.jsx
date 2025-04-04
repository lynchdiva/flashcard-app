import styles from './ProgressButtons.module.scss';
import PropTypes from 'prop-types';
import { learnedWordsStore } from '../../../stores/LearnedWordsStore.js';

export default function ProgressButtons({ word, onMoveCard }) {
  const moveAndMarkAsLearned = () => {
    learnedWordsStore.addLearnedWord(word.english);
    onMoveCard('learned', 'forward');
  };

  const moveAndMarkAsInProgress = () => {
    learnedWordsStore.deleteLearnedWord(word.english);
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
