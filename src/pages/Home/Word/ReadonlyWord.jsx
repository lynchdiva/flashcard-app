import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import ViewButtons from './ViewButtons';

export default function ViewWord(props) {
  const { english, transcription, russian, tags } = props.word;
  const { word, onModeChange, onDelete } = props;

  return (
    <>
      <td className={styles.table__data}>{english}</td>
      <td className={styles.table__data}>{transcription}</td>
      <td className={styles.table__data}>{russian}</td>
      <td className={styles.table__data}>{tags || '-'}</td>
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <ViewButtons
            onModeChange={onModeChange}
            onDelete={onDelete}
            word={word}
          />
        </div>
      </td>
    </>
  );
}

ViewWord.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};
