import styles from './FormAddWord.module.scss';
import InputAddWord from '../InputAddWord/InputAddWord.jsx';
import PropTypes from 'prop-types';

export default function AddWordForm({ onCloseModal }) {
  const placeholderTexts = ['word', 'transcription', 'перевод', 'theme'];

  return (
    <form action="" name="add-form" className={styles['add-form']}>
      <button
        className={styles['add-form__close-button']}
        onClick={onCloseModal}
      >
        <svg className={styles['add-form__close-icon']}>
          <use xlinkHref="./src/assets/icons/sprite.svg#close"></use>
        </svg>
      </button>

      <div className={styles['add-form__inputs-box']}>
        {placeholderTexts.map(text => (
          <InputAddWord key={text} placeholderText={text} />
        ))}
        <button className={styles['add-form__button-add']}>Add word</button>
      </div>

      <div className={styles['add-form__notice-box']}>
        <img
          className={styles['add-form__img']}
          src="./src/assets/images/taping.png"
          alt="Taping hands"
        />
        <p className={styles['add-form__text']}>
          Add a new word and enhance your vocabulary!
        </p>
        <button className={styles['add-form__button-clear']}>Clear</button>
      </div>
    </form>
  );
}

AddWordForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired
};
