import Card from './Card/Card';
import CardButtons from './Buttons/Buttons.jsx';
import styles from './FlashcardsSection.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Notification from './Notification/Notification.jsx';

export default function FlashcardsSection({ words }) {
  const isNoWords = words.length === 0;

  const [counter, setCounter] = useState(0);
  const [word, setWord] = useState(words[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsComleted] = useState(false);

  const handleFlipCard = () => {
    return new Promise(res => {
      setIsFlipped(prevState => {
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

  const handleCompleteSession = state => {
    setIsComleted(state);
  };

  const handleMoveList = async () => {
    if (isFlipped) {
      await handleFlipCard();
    }

    if (counter < words.length) {
      setCounter(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (words[counter]) {
      setWord(words[counter]);
    } else {
      handleCompleteSession(true);
    }
  }, [counter, words]);

  return (
    <section className={styles['flashcards-section']}>
      {isNoWords ? (
        <Notification src={'typing-woman.svg'} alt={'Typing woman'}>
          No words yet! <br /> Add some to get started.
        </Notification>
      ) : (
        <>
          <Card
            word={word}
            isFlipped={isFlipped}
            flip={handleFlipCard}
            isCompleted={isCompleted}
          />
          <CardButtons goToNext={handleMoveList} isCompleted={isCompleted} />
        </>
      )}
    </section>
  );
}

FlashcardsSection.propTypes = {
  words: PropTypes.array.isRequired
};
