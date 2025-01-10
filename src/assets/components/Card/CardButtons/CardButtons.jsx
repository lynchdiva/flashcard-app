import styles from './CardButtons.module.scss';
import PropTypes from 'prop-types';

export default function CardButtons({ goToNext }) {
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

CardButtons.propTypes = {
  goToNext: PropTypes.func.isRequired
};
