import styles from './ModalWindow.module.scss';
import PropTypes from 'prop-types';

export default function ModalWindow({ children, isShown }) {
  return (
    <>
      {isShown ? <div className={styles['modal-window']}>{children}</div> : ''}
    </>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isShown: PropTypes.bool.isRequired
};
