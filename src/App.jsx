import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Missing from './pages/Missing/Missing';
import { Routes, Route } from 'react-router';
import { useWords } from './utilities/hooks/useWords';
import { WordsContext } from './context/WordsContext';

function App() {
  const {
    words,
    isLoading,
    error,
    addWord,
    updateWord,
    deleteWord,
    learnedWords,
    inProgressWords,
    addLearnedWord,
    updateLearnedWord,
    deleteLearnedWord
  } = useWords();

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
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </WordsContext.Provider>
  );
}

export default App;
