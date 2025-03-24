import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditButtons from './EditButtons';
import EditableWordCell from './EditableWordCell';
import { useRef, useEffect } from 'react';
import { useForm } from '../../../utilities/hooks/useForm';
import { validateWord } from '../../../utilities/utils/validation';

export default function EditableWord({ word, onModeChange }) {
  const editableKeys = Object.keys(word).filter(
    key => key !== 'id' && key !== 'tags_json'
  );
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
    handleBlur
  } = useForm(word, validationRules);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      {editableKeys.map(key => (
        <EditableWordCell
          key={key}
          name={key}
          value={formData[key]}
          error={errors[key]}
          isTouched={touched[key]}
          onChange={handleChangeFormData}
          onBlur={handleBlur}
          ref={key === 'english' ? inputRef : null}
        />
      ))}
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <EditButtons
            updatedWord={formData}
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
  onModeChange: PropTypes.func.isRequired
};
