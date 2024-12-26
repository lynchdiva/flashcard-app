import styles from './SectionWordList.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import WordList from '../WordList/WordList.jsx';

export default function SectionWordList() {
  return (
    <section className={styles['section-words']}>
      <div className={styles['section-words__container']}>
        <p className={styles['section-words__title']}>
          Wordlist (<span>95</span>)
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
      <WordList />
    </section>
  );
}
