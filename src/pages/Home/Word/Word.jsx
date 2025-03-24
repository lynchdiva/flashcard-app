import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditableWord from './EditableWord';
import ReadonlyWord from './ReadonlyWord';
import { useState } from 'react';

export default function Word({ word }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <tr className={styles.table__row}>
      {isEditing ? (
        <EditableWord word={word} onModeChange={handleChangeEditing} />
      ) : (
        <ReadonlyWord word={word} onModeChange={handleChangeEditing} />
      )}
    </tr>
  );
}

Word.propTypes = {
  word: PropTypes.object.isRequired
};
