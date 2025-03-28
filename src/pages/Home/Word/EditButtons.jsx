import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { wordsStore } from '../../../stores/WordsStore';

const cx = classNames.bind(styles);

export default function EditButtons({ updatedWord, isFormInvalid, onCancel }) {
  const onChangeWord = () => {
    if (isFormInvalid) return;
    wordsStore.updateWord(updatedWord);
    onCancel();
  };

  return (
    <>
      <button
        className={cx('table__button', 'table__button_orange')}
        onClick={onChangeWord}
        disabled={isFormInvalid}
      >
        <svg className={cx('table__icon', 'table__icon_orange')}>
          <use href="src/assets/icons/sprite.svg#check-mark"></use>
        </svg>
      </button>
      <button className={cx('table__button')} onClick={onCancel}>
        <svg className={cx('table__icon')}>
          <use href="src/assets/icons/sprite.svg#cancel"></use>
        </svg>
      </button>
    </>
  );
}

EditButtons.propTypes = {
  updatedWord: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  isFormInvalid: PropTypes.bool.isRequired
};
