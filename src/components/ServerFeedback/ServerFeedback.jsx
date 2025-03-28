import styles from './ServerFeedback.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

const cx = classNames.bind(styles);

const ServerFeedback = observer(({ feedback }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { status } = feedback;

  useEffect(() => {
    if (status !== null) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  if (status === null) return null;

  const message = status
    ? 'Your data has been successfully saved.'
    : 'Unable to connect to the server. Please try again later.';

  const styleModificator = status
    ? 'server-feedback_success'
    : 'server-feedback_error';

  const iconPath = status ? 'success' : 'error';

  return (
    <div
      className={cx('server-feedback', styleModificator, {
        'server-feedback_visible': isVisible
      })}
    >
      <svg className={cx('server-feedback__status-icon')}>
        <use href={`/src/assets/icons/sprite.svg#${iconPath}`}></use>
      </svg>
      <p className={cx('server-feedback__text')}>{message}</p>
      <button
        type="button"
        className={cx('server-feedback__close-btn')}
        onClick={() => setIsVisible(false)}
      >
        <svg className={cx('server-feedback__icon-close')}>
          <use href="./src/assets/icons/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
  );
});

ServerFeedback.propTypes = {
  feedback: PropTypes.object.isRequired
};

export default ServerFeedback;
