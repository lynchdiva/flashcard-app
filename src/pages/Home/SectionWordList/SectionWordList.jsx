import styles from './SectionWordList.module.scss';
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu.jsx';
import WordList from '../WordList/WordList.jsx';
import ModalWindow from '../../../components/ModalWindow/ModalWindow.jsx';
import FormAddWord from '../FormAddWord/FormAddWord.jsx';
import { FaFolderOpen } from 'react-icons/fa';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../../stores/WordsStore.js';

const SectionWordList = observer(() => {
  const { words } = wordsStore;
  const [isClicked, setIsClicked] = useState(false);

  const handleToggleModal = () => {
    setIsClicked(prev => !prev);
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

          <DropdownMenu />
        </div>
      </div>

      <WordList words={words} />

      <ModalWindow isShown={isClicked}>
        <FormAddWord onCloseModal={handleToggleModal} />
      </ModalWindow>
    </section>
  );
});

export default SectionWordList;
