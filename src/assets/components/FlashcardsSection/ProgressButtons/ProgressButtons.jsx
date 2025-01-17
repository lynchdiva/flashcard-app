import styles from './ProgressButtons.module.scss';
import PropTypes from 'prop-types';

export default function ProgressButtons({ onMoveForward, onSaveLearnedWords }) {
  const moveAndMarkAsLearned = () => {
    onSaveLearnedWords();
    onMoveForward('learned');
  };

  const moveAndMarkAsInProgress = () => {
    onMoveForward('in-progress');
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
  onMoveForward: PropTypes.func.isRequired,
  onSaveLearnedWords: PropTypes.func.isRequired
};
