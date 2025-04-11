import styles from './ProgressButtons.module.scss';
import PropTypes from 'prop-types';

export default function ProgressButtons({
  word,
  moveCard,
  saveToProgress,
  removeFromProgress,
  isShuffling
}) {
  const moveAndMarkAsLearned = () => {
    saveToProgress(word.english);
    moveCard('learned', 'forward');
  };

  const moveAndMarkAsInProgress = () => {
    removeFromProgress(word.english);
    moveCard('in-progress', 'forward');
  };

  return (
    <div className={styles['card-buttons-container']}>
      <button
        className={styles['dont-know-button']}
        onClick={moveAndMarkAsInProgress}
        disabled={isShuffling}
      >
        Don’t know
      </button>
      <button
        className={styles['know-button']}
        onClick={moveAndMarkAsLearned}
        disabled={isShuffling}
      >
        Know
      </button>
    </div>
  );
}

ProgressButtons.propTypes = {
  word: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired,
  saveToProgress: PropTypes.func.isRequired,
  removeFromProgress: PropTypes.func.isRequired,
  isShuffling: PropTypes.bool.isRequired
};
