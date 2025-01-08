import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import ViewButtons from './ViewButtons';

export default function ViewWord(props) {
  const { english, transcription, russian, tags } = props.word;

  return (
    <>
      <td className={styles.table__data}>{english}</td>
      <td className={styles.table__data}>{transcription}</td>
      <td className={styles.table__data}>{russian}</td>
      <td className={styles.table__data}>{tags || '-'}</td>
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <ViewButtons
            onEdit={props.onStateChange}
            onDelete={() => console.log('Delete word')}
          />
        </div>
      </td>
    </>
  );
}

ViewWord.propTypes = {
  onStateChange: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired
};
