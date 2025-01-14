import Card from './Card/Card';
import CardButtons from './Buttons/Buttons.jsx';
import styles from './FlashcardsSection.module.scss';
import PropTypes from 'prop-types';
import { makeListFromArr } from '../../utilities/makeListFromArr.js';
import { useState, useEffect } from 'react';

export default function FlashcardsSection({ words }) {
  const [list, setList] = useState(makeListFromArr(words));
  const [word, setCurrentWord] = useState(list.value);
  const [isFlipped, setFlipping] = useState(false);
  const [isCompleted, setComleted] = useState(false);

  const handleFlipCard = () => {
    return new Promise(res => {
      setFlipping(prevState => {
        const nextState = !prevState;

        if (prevState) {
          setTimeout(res, 200);
        } else {
          res();
        }

        return nextState;
      });
    });
  };

  const handleCompleteSession = currentState => {
    setComleted(currentState);
  };

  const handleMoveList = async () => {
    if (isFlipped) {
      await handleFlipCard();
    }

    if (!list.next) {
      handleCompleteSession(true);
    } else {
      setList(list.next || list);
    }
  };

  useEffect(() => {
    setCurrentWord(list.value);
  }, [isFlipped, list]);

  return (
    <section className={styles['flashcards-section']}>
      <Card
        word={word}
        isFlipped={isFlipped}
        flip={handleFlipCard}
        isCompleted={isCompleted}
      />
      <CardButtons goToNext={handleMoveList} isCompleted={isCompleted} />
    </section>
  );
}

FlashcardsSection.propTypes = {
  words: PropTypes.array.isRequired
};
