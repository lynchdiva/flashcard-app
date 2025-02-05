import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditButtons from './EditButtons';
import { useState, useRef, useEffect } from 'react';

export default function EditWord({ word, onSave, onModeChange }) {
  const [formData, setFormData] = useState({
    ...word
  });
  const inputRef = useRef(null);

  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="english"
          value={formData.english}
          onChange={handleChangeFormData}
          ref={inputRef}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="transcription"
          value={formData.transcription}
          onChange={handleChangeFormData}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="russian"
          value={formData.russian}
          onChange={handleChangeFormData}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChangeFormData}
        />
      </td>
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <EditButtons
            onSave={() => onSave(formData)}
            onCancel={onModeChange}
            input={formData}
          />
        </div>
      </td>
    </>
  );
}

EditWord.propTypes = {
  word: PropTypes.object.isRequired,
  onModeChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
