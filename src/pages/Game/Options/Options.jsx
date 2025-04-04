import styles from './Options.module.scss';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';

export default function Options({ currentCount, amount, onMoveCard }) {
  const onMoveBackAndUndo = () => {
    onMoveCard('undo', 'back');
  };

  return (
    <div className={styles.options__container}>
      <button
        className={styles.options__btn}
        onClick={onMoveBackAndUndo}
        disabled={currentCount === 1}
      >
        <svg className={styles.options__icon}>
          <use href="./src/assets/icons/sprite.svg#back-arrow"></use>
        </svg>
        <span>Undo</span>
      </button>

      <Counter currentCount={currentCount} amount={amount} />

      <button className={styles.options__btn}>
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
  onMoveCard: PropTypes.func.isRequired
};
