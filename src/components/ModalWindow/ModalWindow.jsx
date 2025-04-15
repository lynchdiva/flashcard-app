import { useEffect, useRef } from 'react';
import styles from './ModalWindow.module.scss';
import PropTypes from 'prop-types';

export default function ModalWindow({ children, isShown }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const dialog = modalRef.current;

    if (isShown) {
      dialog.showModal();
      document.body.classList.add('scroll-lock');
    } else {
      dialog.close();
      document.body.classList.remove('scroll-lock');
    }
  }, [isShown]);

  return (
    <dialog
      aria-label="Form for adding a new word"
      className={styles['modal-window']}
      ref={modalRef}
    >
      {children}
    </dialog>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isShown: PropTypes.bool.isRequired
};
