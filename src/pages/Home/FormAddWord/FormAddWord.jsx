import styles from './FormAddWord.module.scss';
import InputAddWord from '../InputAddWord/InputAddWord.jsx';
import PropTypes from 'prop-types';
import useForm from '../../../utilities/hooks/useForm.jsx';
import { validateWord } from '../../../utilities/utils/validation';
import { wordsStore } from '../../../stores/WordsStore';

export default function FormAddWord({ onCloseModal }) {
  const initialFormData = {
    english: '',
    transcription: '',
    russian: '',
    tags: ''
  };
  const validationRules = {
    english: value => validateWord(value),
    transcription: value => validateWord(value),
    russian: value => validateWord(value)
  };
  const {
    formData,
    errors,
    touched,
    isFormInvalid,
    handleChangeFormData,
    handleBlur,
    resetValues
  } = useForm(initialFormData, validationRules);

  const onSubmit = e => {
    e.preventDefault();
    if (isFormInvalid) return;
    wordsStore.addWord({
      ...formData,
      id: crypto.randomUUID(),
      tags_json: ''
    });
    handleReset();
  };

  const handleReset = () => {
    resetValues();
  };

  return (
    <form name="add-form" onSubmit={onSubmit} className={styles['add-form']}>
      <button
        type="button"
        className={styles['add-form__close-button']}
        onClick={onCloseModal}
      >
        <svg className={styles['add-form__close-icon']}>
          <use href="./src/assets/icons/sprite.svg#close"></use>
        </svg>
      </button>

      <div className={styles['add-form__inputs-box']}>
        {Object.keys(formData).map(key => (
          <InputAddWord
            key={key}
            name={key}
            value={formData[key]}
            error={errors[key]}
            isTouched={touched[key]}
            onChange={handleChangeFormData}
            onBlur={handleBlur}
          />
        ))}
        <button
          type="submit"
          className={styles['add-form__button-add']}
          disabled={isFormInvalid}
        >
          Add word
        </button>
      </div>

      <div className={styles['add-form__notice-box']}>
        <img
          className={styles['add-form__img']}
          src="./src/assets/images/typing.png"
          alt="Taping hands"
        />
        <p className={styles['add-form__text']}>
          Add a new word and enhance your vocabulary!
        </p>
        <button
          type="button"
          className={styles['add-form__button-clear']}
          onClick={handleReset}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

FormAddWord.propTypes = {
  onCloseModal: PropTypes.func.isRequired
};
