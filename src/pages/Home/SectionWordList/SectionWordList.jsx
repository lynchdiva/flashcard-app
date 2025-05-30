import styles from './SectionWordList.module.scss';
import FilterDropdown from '../../../components/FilterDropdown/FilterDropdown.jsx';
import WordList from '../WordList/WordList.jsx';
import ModalWindow from '../../../components/ModalWindow/ModalWindow.jsx';
import FormAddWord from '../FormAddWord/FormAddWord.jsx';
import { WordStatuses } from '../../../utilities/constants.js';
import { FaFolderOpen } from 'react-icons/fa';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../../stores/WordsStore.js';

const filterItems = Object.values(WordStatuses);

const SectionWordList = observer(() => {
  const { words } = wordsStore;
  const [isModalShown, setIsModalShown] = useState(false);
  const [chosenFilterItem, setChosenFilterItem] = useState(WordStatuses.ALL);

  const handleToggleModal = () => {
    setIsModalShown(prev => !prev);
  };

  const handleChoseFilterItem = item => {
    setChosenFilterItem(item);
  };

  return (
    <section className={styles['section-words']}>
      <div className={styles['section-words__container']}>
        <p className={styles['section-words__title']}>
          Wordlist{' '}
          <span>{words.length ? `(${words.length})` : <FaFolderOpen />}</span>
        </p>

        <div className={styles['section-words__box']}>
          <button
            className={styles['section-words__add-button']}
            onClick={handleToggleModal}
          >
            Add word
            <svg className={styles['section-words__plus-icon']}>
              <use href="src/assets/icons/sprite.svg#add-button"></use>
            </svg>
          </button>

          <FilterDropdown
            chosenFilterItem={chosenFilterItem}
            onChoseItem={handleChoseFilterItem}
            filterItems={filterItems}
          />
        </div>
      </div>

      <WordList chosenFilterItem={chosenFilterItem} />

      <ModalWindow isShown={isModalShown}>
        <FormAddWord onToggleModal={handleToggleModal} isShown={isModalShown} />
      </ModalWindow>
    </section>
  );
});

export default SectionWordList;
