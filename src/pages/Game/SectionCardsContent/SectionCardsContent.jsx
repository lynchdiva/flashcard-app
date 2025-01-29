import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import NoWordsMessage from '../Card/Notification/NoWordsMessage.jsx';
import CompletionMessage from '../Card/Notification/CompletionMessage.jsx';
import Options from '../Options/Options.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function SectionCardsContent(props) {
  const {
    words,
    word,
    isFlipped,
    isAnimating,
    isCompleted,
    moveAnimationType,
    currentCount,
    onMoveForward: onMoveCard,
    onFlip,
    onAnimating
  } = props.attributes;

  const isNoWords = words.length === 0;

  const [learnedWords, setlearnedWords] = useState(new Set());

  useEffect(() => {
    const data = window.localStorage.getItem('learnedWords');
    if (data) {
      setlearnedWords(new Set(JSON.parse(data)));
    } else {
      window.localStorage.setItem('learnedWords', JSON.stringify([]));
    }
  }, []);

  const handleSaveLearnedWord = () => {
    setlearnedWords(learnedWords => {
      learnedWords.add(word.english);
      window.localStorage.setItem(
        'learnedWords',
        JSON.stringify([...learnedWords])
      );

      return learnedWords;
    });
  };

  const handleDeleteLearnedWord = () => {
    setlearnedWords(learnedWords => {
      learnedWords.delete(word.english);
      window.localStorage.setItem(
        'learnedWords',
        JSON.stringify([...learnedWords])
      );

      return learnedWords;
    });
  };

  // window.localStorage.clear();
  console.log(learnedWords);

  return (
    <>
      {isNoWords ? (
        <NoWordsMessage />
      ) : isCompleted ? (
        <CompletionMessage />
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
