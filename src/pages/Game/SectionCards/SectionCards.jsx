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
import { learnedWordsStore } from '../../../stores/LearnedWordsStore.js';
import { observer } from 'mobx-react-lite';
import useCardAnimation from '../../../utilities/hooks/useCardAnimation';

const SectionCards = observer(({ initialWordIndex = 0 }) => {
  const { words, isLoading } = wordsStore;
  const { learnedWords } = learnedWordsStore;
  const isNoWords = words.length === 0;

  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [word, setWord] = useState(words[initialWordIndex]);
  const [isCompleted, setIsComleted] = useState(false);

  const {
    isAnimating,
    setIsAnimating,
    isFlipped,
    handleFlipCard,
    moveAnimationType,
    handleMoveCard
  } = useCardAnimation({ words, wordIndex, setWordIndex });

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

  if (isLoading) return <Loader />;
  if (isNoWords) return <NoWordsMessage />;

  return (
    <section className={styles['flashcards-section']}>
      {isCompleted ? (
        <CompletionMessage amountLearnedWords={learnedWords.length} />
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
          />
          <Options
            currentCount={wordIndex + 1}
            amount={words.length}
            onMoveCard={handleMoveCard}
          />
          <ProgressButtons word={word} onMoveCard={handleMoveCard} />
        </>
      )}
    </section>
  );
});

SectionCards.propTypes = {
  initialWordIndex: PropTypes.number
};

export default SectionCards;
