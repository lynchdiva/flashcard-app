import styles from './SectionCards.module.scss';
import SectionCardsContent from '../SectionCardsContent/SectionCardsContent';
import PropTypes from 'prop-types';
import Loader from '../../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { wordsStore } from '../../../stores/WordsStore';
import { observer } from 'mobx-react-lite';

const SectionCards = observer(({ initialWordIndex = 0 }) => {
  const { words, isLoading } = wordsStore;
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
      {isLoading ? <Loader /> : <SectionCardsContent attributes={attributes} />}
    </section>
  );
});

SectionCards.propTypes = {
  initialWordIndex: PropTypes.number
};

export default SectionCards;
