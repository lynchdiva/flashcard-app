import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import ViewButtons from './ViewButtons';

export default function ReadonlyWord({ word, onModeChange }) {
  const { english, transcription, russian, tags } = word;

  return (
    <>
      <td className={styles.table__data}>{english}</td>
      <td className={styles.table__data}>{transcription}</td>
      <td className={styles.table__data}>{russian}</td>
      <td className={styles.table__data}>{tags || '-'}</td>
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <ViewButtons onModeChange={onModeChange} word={word} />
        </div>
      </td>
    </>
  );
}

ReadonlyWord.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired
};
