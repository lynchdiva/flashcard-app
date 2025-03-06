import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditButtons from './EditButtons';
import EditableWordCell from './EditableWordCell';
import { useRef, useEffect } from 'react';
import useForm from '../../../utilities/hooks/useForm';
import {
  validateWord,
  validateTranscription
} from '../../../utilities/utils/validation';

export default function EditableWord({ word, onModeChange }) {
  const inputRef = useRef(null);
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
  } = useForm(word, validationRules);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      {Object.keys(word)
        .filter(key => key !== 'id')
        .map(key => (
          <EditableWordCell
            key={key}
            name={key}
            value={formData[key]}
            error={errors[key]}
            wasTouch={touched[key]}
            onChange={handleChangeFormData}
            onBlur={handleBlur}
            ref={key === 'english' ? inputRef : null}
          />
        ))}
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <EditButtons
            formData={formData}
            isFormInvalid={isFormInvalid}
            onCancel={onModeChange}
          />
        </div>
      </td>
    </>
  );
}

EditableWord.propTypes = {
  word: PropTypes.object.isRequired,
  onModeChange: PropTypes.func.isRequired
};
