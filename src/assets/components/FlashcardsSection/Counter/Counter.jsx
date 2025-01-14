import styles from './Counter.module.scss';
import PropTypes from 'prop-types';

export default function Counter({ currentCount, amount }) {
  return (
    <p className={styles['counter-text']}>
      <span>{currentCount}</span>/<span>{amount}</span>
    </p>
  );
}

Counter.propTypes = {
  currentCount: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};
