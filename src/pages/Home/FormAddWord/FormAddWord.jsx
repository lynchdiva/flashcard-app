import styles from './FormAddWord.module.scss';
import InputAddWord from '../InputAddWord/InputAddWord.jsx';
import PropTypes from 'prop-types';
import useForm from '../../../utilities/hooks/useForm.jsx';
import {
  validateWord,
  validateTranscription
} from '../../../utilities/utils/validation';

export default function AddWordForm({ onCloseModal }) {
  const initialInputs = {
    english: '',
    transcription: '',
    russian: '',
    tags: ''
  };
  const validationRules = {
    english: value => validateWord(value),
    transcription: value => validateTranscription(value),
    russian: value => validateWord(value)
  };
  const {
    formData,
    errors,
    touched,
    isFormInvalid,
    handleChangeFormData,
    handleBlur
    // resetValues
  } = useForm(initialInputs, validationRules);

  console.log(formData);
  return (
    <form name="add-form" className={styles['add-form']}>
      <button
        className={styles['add-form__close-button']}
        onClick={onCloseModal}
      >
        <svg className={styles['add-form__close-icon']}>
          <use xlinkHref="./src/assets/icons/sprite.svg#close"></use>
        </svg>
      </button>

      <div className={styles['add-form__inputs-box']}>
        {Object.keys(formData).map(key => (
          <InputAddWord
            key={key}
            name={key}
            value={formData[key]}
            error={errors[key]}
            wasTouched={touched[key]}
            onChange={handleChangeFormData}
            onBlur={handleBlur}
          />
        ))}
        <button
          className={styles['add-form__button-add']}
          disabled={isFormInvalid}
        >
          Add word
        </button>
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
