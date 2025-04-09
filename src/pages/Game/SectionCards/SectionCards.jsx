import styles from './SectionCards.module.scss';
import Loader from '../../../components/Loader/Loader';
import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import NoWordsMessage from '../Card/Notification/NoWordsMessage.jsx';
import CompletionMessage from '../Card/Notification/CompletionMessage.jsx';
import Options from '../Options/Options.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
    handleSaveLearnedWord,
    handleDeleteLearnedWord
  } = useLearningSession(inProgressWords, initialWordIndex);

  const {
    isAnimating,
    setIsAnimating,
    isFlipped,
    handleFlipCard,
    moveAnimationType,
    handleMoveCard
  } = useCardAnimation({
    words: inProgressWords,
    wordIndex,
    setWordIndex
  });

  const { isShuffling, handleShuffleWords } = useShuffle({
    updateWordsList: setInProgressWords,
    wordIndex,
    setSessionStartIndex,
    isFlipped,
    handleFlipCard
  });

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
            onFlip={handleFlipCard}
            isCompleted={isCompleted}
            moveAnimationType={moveAnimationType}
            isAnimating={isAnimating}
            onAnimating={setIsAnimating}
            isShuffling={isShuffling}
          />
          <Options
            currentCount={wordIndex}
            amount={inProgressWords.length}
            sessionStartIndex={sessionStartIndex}
            onMoveCard={handleMoveCard}
            onShuffleCards={handleShuffleWords}
          />
          <ProgressButtons
            word={word}
            onMoveCard={handleMoveCard}
            onSaveLearnedWord={handleSaveLearnedWord}
            onDeleteLearnedWord={handleDeleteLearnedWord}
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
