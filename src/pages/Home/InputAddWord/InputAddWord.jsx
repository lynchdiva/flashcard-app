import styles from './InputAddWord.module.scss';
import PropTypes from 'prop-types';

export default function InputAddWord({ placeholderText = '' }) {
  return (
    <input
      className={styles['add-form__input']}
      type="text"
      placeholder={placeholderText}
    />
  );
}

InputAddWord.propTypes = {
  placeholderText: PropTypes.string
};
