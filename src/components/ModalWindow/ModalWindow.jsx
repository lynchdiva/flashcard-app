import { useEffect, useRef } from 'react';
import styles from './ModalWindow.module.scss';
import PropTypes from 'prop-types';

export default function ModalWindow({ children, isShown }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isShown) return;

    document.body.style.overflow = 'hidden';
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements?.length) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleTab = e => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    firstEl.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleTab);
    };
  }, [isShown]);
  return (
    <>
      {isShown ? (
        <div
          className={styles['modal-window']}
          role={'dialog'}
          aria-modal={'true'}
          ref={modalRef}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isShown: PropTypes.bool.isRequired
};
