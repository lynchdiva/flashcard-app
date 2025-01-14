import Card from './Card/Card';
import ButtonsMark from './ButtonsMark/ButtonsMark.jsx';
import styles from './FlashcardsSection.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Notification from './Notification/Notification.jsx';
import Counter from './Counter/Counter.jsx';

export default function FlashcardsSection({ words, initialWordIndex = 0 }) {
  const isNoWords = words.length === 0;

  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [word, setWord] = useState(words[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsComleted] = useState(false);

  const handleFlipCard = () => {
    return new Promise(res => {
      setIsFlipped(prevState => {
        const nextState = !prevState;

        if (prevState && wordIndex !== words.length - 1) {
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

    if (wordIndex < words.length) {
      setWordIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (words[wordIndex]) {
      setWord(words[wordIndex]);
    } else {
      handleCompleteSession(true);
    }
  }, [wordIndex, words]);

  return (
    <section className={styles['flashcards-section']}>
      {isNoWords ? (
        <NoWordsMessage />
      ) : isCompleted ? (
        <CompletionMessage />
      ) : (
        <>
          <Card
            word={word}
            isFlipped={isFlipped}
            flip={handleFlipCard}
            isCompleted={isCompleted}
          />
          <Counter currentCount={wordIndex + 1} amount={words.length} />
          <ButtonsMark goToNext={handleMoveList} />
        </>
      )}
    </section>
  );
}

const NoWordsMessage = () => (
  <Notification src={'typing-woman.svg'} alt={'Typing woman'}>
    No words yet! <br /> Add some to get started.
  </Notification>
);

const CompletionMessage = () => (
  <Notification src={'man-with-flag.svg'} alt={'Man with flag'}>
    Great job! <br /> You&apos;ve completed your session.
  </Notification>
);

FlashcardsSection.propTypes = {
  words: PropTypes.array.isRequired,
  initialWordIndex: PropTypes.number
};
