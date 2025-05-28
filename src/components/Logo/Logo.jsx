import styles from './Logo.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default function Logo({ isLink }) {
  return (
    <>
      {isLink ? (
        <Link to="/">
          <div className={cx('title', 'title-link')}>
            Every<span className={cx('title__accent')}>Day</span> English
          </div>
        </Link>
      ) : (
        <div className={cx('title')}>
          Every<span className={cx('title__accent')}>Day</span> English
        </div>
      )}
    </>
  );
}

Logo.propTypes = {
  isLink: PropTypes.bool.isRequired
};
