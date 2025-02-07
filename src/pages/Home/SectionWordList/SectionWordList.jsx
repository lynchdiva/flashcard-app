import styles from './SectionWordList.module.scss';
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu.jsx';
import WordList from '../WordList/WordList.jsx';
import ModalWindow from '../../../components/ModalWindow/ModalWindow.jsx';
import FormAddWord from '../FormAddWord/FormAddWord.jsx';
import PropTypes from 'prop-types';
import { FaFolderOpen } from 'react-icons/fa';
import { useState } from 'react';

export default function SectionWordList({ words, onSave, onDelete }) {
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
              <use xlinkHref="src/assets/icons/sprite.svg#add-button"></use>
            </svg>
          </button>

          <DropdownMenu />
        </div>
      </div>

      <WordList words={words} onSave={onSave} onDelete={onDelete} />

      <ModalWindow isShown={isClicked}>
        <FormAddWord onCloseModal={handleToggleModal} />
      </ModalWindow>
    </section>
  );
}

SectionWordList.propTypes = {
  words: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
