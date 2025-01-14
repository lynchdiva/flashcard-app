import styles from './WordList.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Word from '../Word/Word.jsx';
import WordListEmpty from '../WordListEmpty/WordListEmpty.jsx';

const cx = classNames.bind(styles);
const inProgress = 'In progress';
const learned = 'Learned';

export default function WordList({ words, onSave }) {
  const isNoWords = !words || words.length === 0;

  return (
    <>
      {isNoWords ? (
        <WordListEmpty />
      ) : (
        <WordsGroup title={inProgress} words={words} onSave={onSave} />
      )}
    </>
  );
}

const WordsGroup = ({ title, words, onSave }) => {
  const header =
    title === inProgress
      ? cx('table__header', 'table__header_blue')
      : cx('table__header', 'table__header_orange');

  return (
    <section>
      <div className={styles['words-group__container']}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={5} className={header}>
                {title === inProgress ? inProgress : learned} (
                <span>{words.length}</span>)
              </th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {words.map(word => (
              <Word key={word.id} word={word} onSave={onSave} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

WordList.propTypes = {
  words: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};

WordsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};
