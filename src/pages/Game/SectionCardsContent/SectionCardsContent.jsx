import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import NoWordsMessage from '../Card/Notification/NoWordsMessage.jsx';
import CompletionMessage from '../Card/Notification/CompletionMessage.jsx';
import Options from '../Options/Options.jsx';
import PropTypes from 'prop-types';
import useLocalStorage from '../../../utilities/hooks/useLocalStorage.jsx';
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

  const isNoWords = words.length === 0;
  const [learnedWords, setLearnedWords] = useLocalStorage('learnedWords', []);

  const handleSaveLearnedWord = () => {
    setLearnedWords(learnedWords => {
      const learnedWordsSet = new Set(learnedWords);
      learnedWordsSet.add(word.english);
      return Array.from(learnedWordsSet);
    });
  };

  const handleDeleteLearnedWord = () => {
    setLearnedWords(learnedWords => {
      const learnedWordsSet = new Set(learnedWords);
      learnedWordsSet.delete(word.english);
      return Array.from(learnedWordsSet);
    });
  };
  // window.localStorage.clear();
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
          <ProgressButtons
            onMoveCard={onMoveCard}
            onSaveLearnedWords={handleSaveLearnedWord}
            onDeleteLearnedWords={handleDeleteLearnedWord}
          />
        </>
      )}
    </>
  );
}

SectionCardsContent.propTypes = {
  attributes: PropTypes.object.isRequired
};
