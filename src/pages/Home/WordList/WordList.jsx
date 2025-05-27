import Loader from '../../../components/Loader/Loader.jsx';
import WordsGroup from '../WordsGroups/WordsGroup.jsx';
import WordListEmpty from '../WordListEmpty/WordListEmpty.jsx';
import { WordStatuses } from '../../../utilities/constants.js';
import { wordsStore } from '../../../stores/WordsStore.js';
import { observer } from 'mobx-react-lite';

const WordList = observer(({ chosenFilterItem }) => {
  const { words, isLoading, inProgressWordsObjects, learnedWordsObjects } =
    wordsStore;
  const isNoWords = words.length === 0;

  if (isLoading) return <Loader />;

  if (isNoWords) return <WordListEmpty />;

  return (
    <>
      {chosenFilterItem !== WordStatuses.LEARNED && (
        <WordsGroup
          title={WordStatuses.IN_PROGRESS}
          group={inProgressWordsObjects}
        />
      )}
      {chosenFilterItem !== WordStatuses.IN_PROGRESS && (
        <WordsGroup title={WordStatuses.LEARNED} group={learnedWordsObjects} />
      )}
    </>
  );
});

export default WordList;
