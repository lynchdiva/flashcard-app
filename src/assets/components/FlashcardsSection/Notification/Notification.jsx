import styles from '../Card/Card.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function Notification({ children, src, alt }) {
  return (
    <div
      className={cx({
        card__container: true,
        card: true,
        card_compleated: true
      })}
    >
      <p className={styles['card__completed-text']}>{children}</p>
      <img
        className={styles['card__completed-img']}
        src={`./src/assets/images/${src}`}
        alt={alt}
      />
    </div>
  );
}

Notification.propTypes = {
  children: PropTypes.array.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
