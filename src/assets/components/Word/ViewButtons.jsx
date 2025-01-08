import styles from './Word.module.scss';
import PropTypes from 'prop-types';

export default function ViewButtons({ onEdit, onDelete }) {
  return (
    <>
      <button className={styles.table__button} onClick={onEdit}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onDelete}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#bin"></use>
        </svg>
      </button>
    </>
  );
}

ViewButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
