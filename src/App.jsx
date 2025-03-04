import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Missing from './pages/Missing/Missing';
import { useState } from 'react';
import { Routes, Route } from 'react-router';

function App() {
  const [words, setWords] = useState([]);
  const [learnedWords, setLearnedWords] = useState([]);
  const [inProgressWords, setInProgressWords] = useState([]);

  const handleWordsChange = replacement => {
    for (let key in replacement) {
      replacement[key] = replacement[key].trim();
    }
    setWords(
      words.map(originalWord => {
        return originalWord.id === replacement.id ? replacement : originalWord;
      })
    );
  };

  const handleDeleteWord = word => {
    setWords(words.filter(originalWord => originalWord.id !== word.id));
  };

  return (
    <div className={styles['app-container']}>
      <Routes>
        <Route
          index
          element={
            <Home
              words={words}
              onSave={handleWordsChange}
              onDelete={handleDeleteWord}
            />
          }
        />
        <Route path="game" element={<Game words={words} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
