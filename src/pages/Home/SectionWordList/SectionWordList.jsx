import styles from './SectionWordList.module.scss';
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu.jsx';
import WordList from '../WordList/WordList.jsx';
import PropTypes from 'prop-types';

export default function SectionWordList({ words, onSave, onDelete }) {
  return (
    <section className={styles['section-words']}>
      <div className={styles['section-words__container']}>
        <p className={styles['section-words__title']}>
          Wordlist (<span>{words.length}</span>)
        </p>

        <div className={styles['section-words__box']}>
          <button className={styles['section-words__add-button']}>
            Add word
            <svg className={styles['section-words__plus-icon']}>
              <use xlinkHref="src/assets/icons/sprite.svg#add-button"></use>
            </svg>
          </button>

          <DropdownMenu />
        </div>
      </div>

      <WordList words={words} onSave={onSave} onDelete={onDelete} />
    </section>
  );
}

SectionWordList.propTypes = {
  words: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
