import styles from '../Card.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function Notification({ children, src, alt }) {
  return (
    <div className={cx('card__container', 'card', 'card__notification')}>
      <p className={cx('card__notification-text')}>{children}</p>
      <img
        className={cx('card__notification-img')}
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
