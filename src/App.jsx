import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Missing from './pages/Missing/Missing';
import { Routes, Route } from 'react-router';
import { useWords } from './utilities/hooks/useWords';
import { useWordsFilter } from './utilities/hooks/useWordsFilter';
import { WordsContext } from './context/WordsContext';

function App() {
  const { words, isLoading, error, addWord, updateWord, deleteWord } =
    useWords();
  const {
    learnedWords,
    inProgressWords,
    addLearnedWord,
    updateLearnedWord,
    deleteLearnedWord
  } = useWordsFilter(words);

  return (
    <WordsContext.Provider
      value={{
        words,
        learnedWords,
        inProgressWords,
        addWord,
        updateWord,
        deleteWord,
        isLoading,
        error,
        addLearnedWord,
        updateLearnedWord,
        deleteLearnedWord
      }}
    >
      <div className={styles['app-container']}>
        <Routes>
          <Route
            index
            element={
              <Home
                words={words}
                onSave={handleWordsChange}
                onDelete={deleteWord}
              />
            }
          />
          <Route path="game" element={<Game words={words} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </WordsContext.Provider>
  );
}

export default App;
