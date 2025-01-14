import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditWord from './EditWord';
import ViewWord from './ViewWord';
import { useState } from 'react';

export default function Word(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeEditing = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <tr className={styles.table__row}>
      {isEditing ? (
        <EditWord
          word={props.word}
          onModeChange={handleChangeEditing}
          onSave={props.onSave}
        />
      ) : (
        <ViewWord word={props.word} onModeChange={handleChangeEditing} />
      )}
    </tr>
  );
}

Word.propTypes = {
  word: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};
