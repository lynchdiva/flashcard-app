import styles from './WordList.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Loader from '../../../components/Loader/Loader.jsx';
import Word from '../Word/Word.jsx';
import WordListEmpty from '../WordListEmpty/WordListEmpty.jsx';
import { wordsStore } from '../../../stores/WordsStore.js';
import { observer } from 'mobx-react-lite';

const cx = classNames.bind(styles);

const STATUS_IN_PROGRESS = 'In progress';
const STATUS_LEARNED = 'Learned';

const WordList = observer(({ words }) => {
  const { isLoading } = wordsStore;
  const isNoWords = words.length === 0;

  if (isLoading) return <Loader />;

  return (
    <>
      {isNoWords ? (
        <WordListEmpty />
      ) : (
        <WordsGroup title={STATUS_IN_PROGRESS} words={words} />
      )}
    </>
  );
});

const WordsGroup = ({ title, words }) => {
  const header =
    title === STATUS_IN_PROGRESS
      ? cx('table__header', 'table__header_blue')
      : cx('table__header', 'table__header_orange');

  return (
    <section>
      <div className={cx('words-group__container')}>
        <table className={cx('table')}>
          <thead>
            <tr>
              <th colSpan={5} className={header}>
                {title === STATUS_IN_PROGRESS
                  ? STATUS_IN_PROGRESS
                  : STATUS_LEARNED}{' '}
                (<span>{words.length}</span>)
              </th>
            </tr>
          </thead>
          <tbody className={cx('table__body')}>
            {words.map(word => (
              <Word key={word.id} word={word} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

WordList.propTypes = {
  words: PropTypes.array.isRequired
};

WordsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired
};

export default WordList;
