import styles from './Word.module.scss';
import PropTypes from 'prop-types';
import EditButtons from './EditButtons';

export default function EditWord(props) {
  const { english, transcription, russian, tags } = props.word;
  return (
    <>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="english"
          value={english}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="transcription"
          value={transcription}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="russian"
          value={russian}
        />
      </td>
      <td className={styles.table__data}>
        <input
          className={styles.table__input}
          type="text"
          name="tags"
          value={tags}
        />
      </td>
      <td className={styles.table__data}>
        <div className={styles.table__options}>
          <EditButtons
            onSave={() => 'сохранить значения'}
            onCancle={props.onStateChange}
          />
        </div>
      </td>
    </>
  );
}

EditWord.propTypes = {
  word: PropTypes.object.isRequired,
  onStateChange: PropTypes.func.isRequired
};
