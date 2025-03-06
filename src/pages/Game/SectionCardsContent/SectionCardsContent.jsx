import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import NoWordsMessage from '../Card/Notification/NoWordsMessage.jsx';
import CompletionMessage from '../Card/Notification/CompletionMessage.jsx';
import Options from '../Options/Options.jsx';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { WordsContext } from '../../../context/WordsContext.js';
export default function SectionCardsContent(props) {
  const {
    words,
    word,
    isFlipped,
    isAnimating,
    isCompleted,
    moveAnimationType,
    currentCount,
    onMoveCard,
    onFlip,
    onAnimating
  } = props.attributes;
  const { learnedWords } = useContext(WordsContext);

  const isNoWords = words.length === 0;
  return (
    <>
      {isNoWords ? (
        <NoWordsMessage />
      ) : isCompleted ? (
        <CompletionMessage amountLearnedWords={learnedWords.length} />
      ) : (
        <>
          <Card
            word={word}
            isFlipped={isFlipped}
            onFlip={onFlip}
            isCompleted={isCompleted}
            moveAnimationType={moveAnimationType}
            isAnimating={isAnimating}
            onAnimating={onAnimating}
          />
          <Options
            currentCount={currentCount}
            amount={words.length}
            onMoveCard={onMoveCard}
          />
          <ProgressButtons word={word} onMoveCard={onMoveCard} />
        </>
      )}
    </>
  );
}

SectionCardsContent.propTypes = {
  attributes: PropTypes.object.isRequired
};
