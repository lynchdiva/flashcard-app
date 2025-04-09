import PropTypes from 'prop-types';
import Loader from '../../../components/Loader/Loader.jsx';
import WordsGroup from '../WordsGroups/WordsGroup.jsx';
import WordListEmpty from '../WordListEmpty/WordListEmpty.jsx';
import { wordsStore } from '../../../stores/WordsStore.js';
import { observer } from 'mobx-react-lite';

const STATUS_IN_PROGRESS = 'In progress';
const STATUS_LEARNED = 'Learned';

const WordList = observer(({ words, chosenFilterItem }) => {
  const { isLoading, inProgressWordsObjects, learnedWordsObjects } = wordsStore;
  const isNoWords = words.length === 0;
  const filterMap = {
    [STATUS_IN_PROGRESS]: inProgressWordsObjects,
    [STATUS_LEARNED]: learnedWordsObjects
  };
  const filteredWords = filterMap[chosenFilterItem];

  if (isLoading) return <Loader />;

  if (isNoWords) return <WordListEmpty />;

  return (
    <>
      {filteredWords ? (
        <WordsGroup title={chosenFilterItem} group={filteredWords} />
      ) : (
        <>
          <WordsGroup
            title={STATUS_IN_PROGRESS}
            group={inProgressWordsObjects}
          />
          <WordsGroup title={STATUS_LEARNED} group={learnedWordsObjects} />
        </>
      )}
    </>
  );
});

WordList.propTypes = {
  words: PropTypes.array.isRequired
};

export default WordList;
