import styles from './ButtonsMark.module.scss';
import PropTypes from 'prop-types';

export default function ButtonsMark({ goToNext }) {
  return (
    <div className={styles['card-buttons-container']}>
      <button className={styles['dont-know-button']} onClick={goToNext}>
        Don’t know
      </button>
      <button className={styles['know-button']} onClick={goToNext}>
        Know
      </button>
    </div>
  );
}

ButtonsMark.propTypes = {
  goToNext: PropTypes.func.isRequired
};
