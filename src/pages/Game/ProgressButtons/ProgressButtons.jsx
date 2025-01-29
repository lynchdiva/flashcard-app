import styles from './ProgressButtons.module.scss';
import PropTypes from 'prop-types';

export default function ProgressButtons({
  onMoveCard,
  onSaveLearnedWords,
  onDeleteLearnedWords
}) {
  const moveAndMarkAsLearned = () => {
    onSaveLearnedWords();
    onMoveCard('learned', 'forward');
  };

  const moveAndMarkAsInProgress = () => {
    onDeleteLearnedWords();
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
  onMoveCard: PropTypes.func.isRequired,
  onSaveLearnedWords: PropTypes.func.isRequired,
  onDeleteLearnedWords: PropTypes.func.isRequired
};
