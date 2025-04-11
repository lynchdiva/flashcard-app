import styles from './SectionCards.module.scss';
import Loader from '../../../components/Loader/Loader';
import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import NoWordsMessage from '../Card/Notification/NoWordsMessage.jsx';
import CompletionMessage from '../Card/Notification/CompletionMessage.jsx';
import Options from '../Options/Options.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';
import { wordsStore } from '../../../stores/WordsStore';
import { observer } from 'mobx-react-lite';
import useCardAnimation from '../../../utilities/hooks/useCardAnimation';
import useShuffle from '../../../utilities/hooks/useShuffle.jsx';
import useLearningSession from '../../../utilities/hooks/useLearningSession.jsx';

const SectionCards = observer(({ initialWordIndex = 0 }) => {
  const { inProgressWordsObjects, isLoading } = wordsStore;
  const [inProgressWords, setInProgressWords] = useState([]);
  const {
    word,
    wordIndex,
    setWordIndex,
    sessionStartIndex,
    setSessionStartIndex,
    sessionProgress,
    isCompleted,
    saveToProgress,
    removeFromProgress
  } = useLearningSession(inProgressWords, initialWordIndex);

  const {
    isAnimating,
    setIsAnimating,
    isFlipped,
    toggleFlipWithDelay,
    moveAnimationType,
    moveCardWithAnimation
  } = useCardAnimation({
    words: inProgressWords,
    wordIndex,
    setWordIndex
  });

  const { isShuffling, shuffleRemainingWords } = useShuffle({
    setInProgressWords,
    wordIndex,
    setSessionStartIndex,
    isFlipped,
    toggleFlipWithDelay
  });

  const safeActions = useMemo(
    () => ({
      moveCard: (animationType, direction) => {
        if (isShuffling || isAnimating) return;
        moveCardWithAnimation(animationType, direction);
      },
      shuffleWords: () => {
        if (isShuffling || isAnimating) return;
        shuffleRemainingWords();
      }
    }),
    [isShuffling, isAnimating, moveCardWithAnimation, shuffleRemainingWords]
  );

  const isNoWords = !inProgressWords.length;

  useEffect(() => {
    setInProgressWords([...inProgressWordsObjects]);
  }, [inProgressWordsObjects]);

  if (isLoading) return <Loader />;
  if (isNoWords) return <NoWordsMessage />;

  return (
    <section className={styles['flashcards-section']}>
      {isCompleted ? (
        <CompletionMessage amountLearnedWords={sessionProgress.length} />
      ) : (
        <>
          <Card
            word={word}
            isFlipped={isFlipped}
            toggleFlipWithDelay={toggleFlipWithDelay}
            isCompleted={isCompleted}
            moveAnimationType={moveAnimationType}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            isShuffling={isShuffling}
          />
          <Options
            currentCount={wordIndex}
            amount={inProgressWords.length}
            sessionStartIndex={sessionStartIndex}
            moveCard={safeActions.moveCard}
            isShuffling={isShuffling}
            shuffleWords={safeActions.shuffleWords}
          />
          <ProgressButtons
            word={word}
            moveCard={safeActions.moveCard}
            saveToProgress={saveToProgress}
            removeFromProgress={removeFromProgress}
            isShuffling={isShuffling}
          />
        </>
      )}
    </section>
  );
});

SectionCards.propTypes = {
  initialWordIndex: PropTypes.number
};

export default SectionCards;
