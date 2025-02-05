import Notification from './Notification';
import PropTypes from 'prop-types';

export default function CompletionMessage({ amountLearnedWords }) {
  return (
    <Notification src={'man-with-flag.svg'} alt={'Man with flag'}>
      You&apos;ve completed your session <br />
      <span>Learned words: {amountLearnedWords}</span>
    </Notification>
  );
}

CompletionMessage.propTypes = {
  amountLearnedWords: PropTypes.number.isRequired
};
