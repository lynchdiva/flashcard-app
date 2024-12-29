import styles from './WordList.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Word from '../Word/Word.jsx';
// import EmptyWordList from '../EmptyWordList/EmptyWordList';

const cx = classNames.bind(styles);
const inProgress = 'In progress';
const learned = 'Learned';

export default function WordList() {
  const arr = [1];

  return <WordsGroup title={inProgress} words={arr} id="in-progress" />;
  // return <EmptyWordList/>;
}

const WordsGroup = ({ title, words, id }) => {
  const header =
    title === inProgress
      ? cx('table__header', 'table__header_blue')
      : cx('table__header', 'table__header_orange');

  return (
    <section>
      <div className={styles['words-group__container']}>
        <table id={id} className={styles.table}>
          <thead>
            <tr>
              <th colSpan={5} className={header}>
                {title === inProgress ? inProgress : learned} (
                <span>{words.length}</span>)
              </th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            <Word />
            <Word />
          </tbody>
        </table>
      </div>
    </section>
  );
};

WordsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired
};
