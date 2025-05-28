import styles from './WordsGroup.module.scss';
import Word from '../Word/Word.jsx';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { WordStatuses } from '../../../utilities/constants.js';
import { FaFolderOpen } from 'react-icons/fa';

const cx = classNames.bind(styles);

export default function WordsGroup({ title, words }) {
  const header =
    title === WordStatuses.IN_PROGRESS
      ? cx('table__header', 'table__header_blue')
      : cx('table__header', 'table__header_orange');

  return (
    <section>
      <div className={cx('words-group__container')}>
        <table className={cx('table')}>
          <thead>
            <tr>
              <th colSpan={5} className={header}>
                {title}{' '}
                <span>
                  {words.length ? `(${words.length})` : <FaFolderOpen />}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className={cx('table__body')}>
            {words.length ? (
              words.map(word => <Word key={word.id} word={word} />)
            ) : (
              <tr>
                <td colSpan={5} className={cx('table__text')}>
                  No words yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

WordsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired
};
