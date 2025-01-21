import styles from './BackToTopButton.module.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BackToTopButton() {
  const SCROLL_THRESHOLD = 400;
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > SCROLL_THRESHOLD);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={cx({
        'back-button': true,
        visible: isVisible,
        hidden: !isVisible
      })}
      onClick={scrollToTop}
    >
      <svg className={styles['back-button__icon']}>
        <use xlinkHref="./src/assets/icons/sprite.svg#arrow-up"></use>
      </svg>
    </button>
  );
}
