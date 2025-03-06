import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { WordsContext } from '../../../context/WordsContext';

const cx = classNames.bind(styles);

export default function EditButtons({ formData, isFormInvalid, onCancel }) {
  const { updateWord } = useContext(WordsContext);

  const onClick = () => {
    if (isFormInvalid) return;
    updateWord(formData);
    onCancel();
  };

  return (
    <>
      <button
        className={cx('table__button', 'table__button_orange')}
        onClick={onClick}
        disabled={isFormInvalid}
      >
        <svg className={cx('table__icon', 'table__icon_orange')}>
          <use xlinkHref="src/assets/icons/sprite.svg#check-mark"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onCancel}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#cancel"></use>
        </svg>
      </button>
    </>
  );
}

EditButtons.propTypes = {
  formData: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  isFormInvalid: PropTypes.bool.isRequired
};
