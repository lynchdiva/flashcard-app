import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditWord from './EditWord';
import ViewWord from './ViewWord';
import { useState } from 'react';

export default function Word(props) {
  const [isEditing, setState] = useState(false);
  const handleChange = () => {
    setState(prev => !prev);
  };

  return (
    <tr className={styles.table__row}>
      {isEditing ? (
        <EditWord word={props.word} onStateChange={handleChange} />
      ) : (
        <ViewWord word={props.word} onStateChange={handleChange} />
      )}
    </tr>
  );
}

Word.propTypes = {
  word: PropTypes.object.isRequired
};
