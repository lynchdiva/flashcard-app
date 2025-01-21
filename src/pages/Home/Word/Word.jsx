import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditWord from './EditWord';
import ViewWord from './ViewWord';
import { useState } from 'react';

export default function Word({ word, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <tr className={styles.table__row}>
      {isEditing ? (
        <EditWord
          word={word}
          onModeChange={handleChangeEditing}
          onSave={onSave}
        />
      ) : (
        <ViewWord
          word={word}
          onModeChange={handleChangeEditing}
          onDelete={onDelete}
        />
      )}
    </tr>
  );
}

Word.propTypes = {
  word: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
