import PropTypes from 'prop-types';
import EditWord from './EditWord';
import ViewWord from './ViewWord';

export default function Word(props) {
  const editState = false;

  return editState ? (
    <EditWord word={props.word} />
  ) : (
    <ViewWord word={props.word} />
  );
}

Word.propTypes = {
  word: PropTypes.object.isRequired
};
