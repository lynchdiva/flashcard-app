import Card from '../Card/Card.jsx';
import ProgressButtons from '../ProgressButtons/ProgressButtons.jsx';
import Counter from '../Counter/Counter.jsx';
import Notification from '../Notification/Notification.jsx';
import PropTypes from 'prop-types';

export default function CardContent(props) {
  const {
    words,
    word,
    isFlipped,
    isAnimating,
    isCompleted,
    progress,
    currentCount,
    onMoveForward,
    onFlip,
    onAnimating
  } = props.attributes;

  const isNoWords = words.length === 0;

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
            progress={progress}
            isAnimating={isAnimating}
            onAnimating={onAnimating}
          />
          <Counter currentCount={currentCount} amount={words.length} />
          <ProgressButtons onMoveForward={onMoveForward} />
        </>
      )}
    </>
  );
}

const NoWordsMessage = () => (
  <Notification src={'typing-woman.svg'} alt={'Typing woman'}>
    No words yet! <br /> Add some to get started.
  </Notification>
);

const CompletionMessage = () => (
  <Notification src={'man-with-flag.svg'} alt={'Man with flag'}>
    Great job! <br /> You&apos;ve completed your session.
  </Notification>
);

CardContent.propTypes = {
  attributes: PropTypes.object.isRequired
};
