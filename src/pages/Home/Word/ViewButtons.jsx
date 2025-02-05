import styles from './Word.module.scss';
import PropTypes from 'prop-types';

export default function ViewButtons({ onModeChange, onDelete, word }) {
  return (
    <>
      <button className={styles.table__button} onClick={onModeChange}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={() => onDelete(word)}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#bin"></use>
        </svg>
      </button>
    </>
  );
}

ViewButtons.propTypes = {
  word: PropTypes.object.isRequired,
  onModeChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
