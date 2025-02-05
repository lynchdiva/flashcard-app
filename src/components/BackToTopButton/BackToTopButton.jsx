import styles from './BackToTopButton.module.scss';
import classNames from 'classnames/bind';
import useVisibility from '../../utilities/hooks/useVisibility';

const cx = classNames.bind(styles);

export default function BackToTopButton() {
  const isVisible = useVisibility(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={cx({
        'back-button': true,
        visible: isVisible,
        hidden: !isVisible
      })}
      onClick={scrollToTop}
      tabIndex={isVisible ? '0' : '-1'}
      aria-hidden={!isVisible}
    >
      <svg className={styles['back-button__icon']}>
        <use xlinkHref="./src/assets/icons/sprite.svg#arrow-up"></use>
      </svg>
    </button>
  );
}
