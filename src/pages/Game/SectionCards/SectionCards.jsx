import styles from './SectionCards.module.scss';
import SectionCardsContent from '../SectionCardsContent/SectionCardsContent';
import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { WordsContext } from '../../../context/WordsContext';

export default function SectionCards({ initialWordIndex = 0 }) {
  const { words } = useContext(WordsContext);
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [word, setWord] = useState(words[initialWordIndex]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsComleted] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const [moveAnimationType, setMoveAnimationType] = useState('');

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

  const handleMoveCard = async (animationType, direction) => {
    if (isAnimating) return;

    setAnimating(true);

    const moveForward = () => {
      if (wordIndex < words.length) {
        setWordIndex(prev => prev + 1);
      }
    };
    const moveBack = () => {
      if (wordIndex > 0) {
        setWordIndex(prev => prev - 1);
      }
    };

    if (direction === 'forward') {
      await handleMoveAnimation(animationType);
      if (isFlipped) {
        await handleFlipCard();
      }
      moveForward();
    } else if (direction === 'back') {
      if (isFlipped) {
        await handleFlipCard();
      }
      await handleMoveAnimation(animationType);
      moveBack();
    }

    setMoveAnimationType('');
    setAnimating(false);
  };

  const handleMoveAnimation = animationType => {
    return new Promise(res => {
      setMoveAnimationType(animationType);
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
      handleCompleteSession(false);
    } else {
      handleCompleteSession(true);
    }
  }, [wordIndex, words]);

  const attributes = {
    words,
    word,
    isFlipped,
    isCompleted,
    moveAnimationType,
    currentCount: wordIndex + 1,
    isAnimating,
    onFlip: handleFlipCard,
    onMoveCard: handleMoveCard,
    onAnimating: setAnimating
  };

  return (
    <section className={styles['flashcards-section']}>
      <SectionCardsContent attributes={attributes} />
    </section>
  );
}

SectionCards.propTypes = {
  initialWordIndex: PropTypes.number
};
