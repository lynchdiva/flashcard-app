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

export default function EditableWord({ word, onSave, onModeChange }) {
  const inputRef = useRef(null);
  const validationRules = {
    english: value => validateWord(value),
    transcription: value => validateTranscription(value),
    russian: value => validateWord(value)
  };
  const { formData, errors, isFormInvalid, handleChangeFormData } = useForm(
    word,
    validationRules
  );

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
            onChange={handleChangeFormData}
            ref={key === 'english' ? inputRef : null}
          />
        ))}
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <EditButtons
            onSave={() => {
              onSave(formData);
              console.log(formData);
            }}
            onCancel={onModeChange}
            isFormInvalid={isFormInvalid}
          />
        </div>
      </td>
    </>
  );
}

EditableWord.propTypes = {
  word: PropTypes.object.isRequired,
  onModeChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
