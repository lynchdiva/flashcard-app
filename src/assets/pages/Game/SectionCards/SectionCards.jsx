import styles from './SectionCards.module.scss';
import SectionCardsContent from '../SectionCardsContent/SectionCardsContent';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function SectionCards({ words, initialWordIndex = 0 }) {
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [word, setWord] = useState(words[initialWordIndex]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsComleted] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const [progress, setProgress] = useState('');

  const handleFlipCard = () => {
    return new Promise(res => {
      setIsFlipped(prevState => {
        if (prevState) {
          setTimeout(res, 100);
        } else {
          res();
        }
        return !prevState;
      });
    });
  };

  const handleMoveForward = async progress => {
    if (isAnimating) return;

    setAnimating(true);

    await handleMarkProgress(progress);

    if (isFlipped) {
      await handleFlipCard();
    }

    if (wordIndex < words.length) {
      setWordIndex(prev => prev + 1);
    }

    setProgress('');
    setAnimating(false);
  };

  const handleMarkProgress = progress => {
    return new Promise(res => {
      setProgress(progress);

      setTimeout(() => {
        res();
      }, 500);
    });
  };

  const handleCompleteSession = sessionState => {
    setIsComleted(sessionState);
  };

  useEffect(() => {
    if (words[wordIndex]) {
      setWord(words[wordIndex]);
    } else {
      handleCompleteSession(true);
    }
  }, [wordIndex, words]);

  const attributes = {
    words,
    word,
    isFlipped,
    isCompleted,
    progress,
    currentCount: wordIndex + 1,
    isAnimating,
    onFlip: handleFlipCard,
    onMoveForward: handleMoveForward,
    onAnimating: setAnimating
  };

  return (
    <section className={styles['flashcards-section']}>
      <SectionCardsContent attributes={attributes} />
    </section>
  );
}

SectionCards.propTypes = {
  words: PropTypes.array.isRequired,
  initialWordIndex: PropTypes.number
};
