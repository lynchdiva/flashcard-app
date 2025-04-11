import styles from './Options.module.scss';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';

export default function Options({
  currentCount,
  amount,
  sessionStartIndex,
  moveCard,
  isShuffling,
  shuffleWords
}) {
  const moveBackAndUndo = () => {
    moveCard('undo', 'back');
  };

  return (
    <div className={styles.options__container}>
      <button
        className={styles.options__btn}
        onClick={moveBackAndUndo}
        disabled={currentCount === sessionStartIndex || isShuffling}
      >
        <svg className={styles.options__icon}>
          <use href="./src/assets/icons/sprite.svg#back-arrow"></use>
        </svg>
        <span>Undo</span>
      </button>

      <Counter currentCount={currentCount + 1} amount={amount} />

      <button
        className={styles.options__btn}
        onClick={shuffleWords}
        disabled={isShuffling}
      >
        <svg className={styles.options__icon}>
          <use href="./src/assets/icons/sprite.svg#shuffle"></use>
        </svg>
        <span>Shuffle</span>
      </button>
    </div>
  );
}

Options.propTypes = {
  currentCount: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  sessionStartIndex: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  shuffleWords: PropTypes.func.isRequired,
  isShuffling: PropTypes.bool.isRequired
};
