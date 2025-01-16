import styles from './FlashcardsSection.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import CardContent from './CardContent/CardContent.jsx';
export default function FlashcardsSection({ words, initialWordIndex = 0 }) {
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [word, setWord] = useState(words[initialWordIndex]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsComleted] = useState(false);
  const [progress, setProgress] = useState('');

  const handleFlipCard = () => {
    return new Promise(res => {
      setIsFlipped(prevState => {
        if (prevState && wordIndex !== words.length - 1) {
          setTimeout(res, 200);
        } else {
          res();
        }
        return !prevState;
      });
    });
  };

  const handleMoveForward = async progress => {
    await handleMarkProgress(progress);

    if (isFlipped) {
      await handleFlipCard();
    }

    if (wordIndex < words.length) {
      setWordIndex(prev => prev + 1);
    }
  };

  const handleMarkProgress = progress => {
    return new Promise(res => {
      setProgress(progress);

      setTimeout(() => {
        setProgress('');
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
    flip: handleFlipCard,
    onMoveForward: handleMoveForward
  };

  return (
    <section className={styles['flashcards-section']}>
      <CardContent attributes={attributes} />
    </section>
  );
}

FlashcardsSection.propTypes = {
  words: PropTypes.array.isRequired,
  initialWordIndex: PropTypes.number
};
