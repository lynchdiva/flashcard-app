import Card from '../Card/Card';
import CardButtons from '../Card/CardButtons/CardButtons';
import styles from './FlashcardsSection.module.scss';
import PropTypes from 'prop-types';
import { makeListFromArr } from '../../utilities/makeListFromArr.js';
import { useState, useEffect } from 'react';

export default function FlashcardsSection({ words }) {
  const [list, setList] = useState(makeListFromArr(words));
  const [word, setCurrentWord] = useState(list.value);
  const [isFlipped, setFlipping] = useState(false);

  const flipCard = () => {
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

  const handleMoveList = async () => {
    if (isFlipped) {
      await flipCard();
    }
    setList(prevList => prevList.next || prevList);
  };

  useEffect(() => {
    setCurrentWord(list.value);
  }, [isFlipped, list]);

  return (
    <section className={styles['flashcards-section']}>
      <Card
        word={word}
        goToNext={handleMoveList}
        isFlipped={isFlipped}
        flip={flipCard}
      />
      <CardButtons goToNext={handleMoveList} />
    </section>
  );
}

FlashcardsSection.propTypes = {
  words: PropTypes.array.isRequired
};
