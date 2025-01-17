import styles from './Word.module.scss';
import PropTypes from 'prop-types';

export default function ViewButtons({ onEdit, onDelete, word }) {
  const handleClickBin = () => {
    onDelete(word);
  };
  return (
    <>
      <button className={styles.table__button} onClick={onEdit}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={handleClickBin}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#bin"></use>
        </svg>
      </button>
    </>
  );
}

ViewButtons.propTypes = {
  word: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
