import styles from './App.module.scss';
import Home from './assets/pages/Home/Home';
import Game from './assets/pages/Game/Game';
import Missing from './assets/pages/Missing/Missing';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

function App() {
  //хранить массив слов в локальном состоянии и передать обработчик к дочерним компонентам для изменения этого массива - временное решение до подключения менеджера состояния
  const data = [
    {
      id: '33026',
      english: 'precise',
      transcription: '[prɪˈsaɪs]',
      russian: 'точный',
      tags: ''
    },
    {
      id: '33027',
      english: 'analysis',
      transcription: '[əˈnæləsɪs]',
      russian: 'анализ',
      tags: ''
    },
    {
      id: '33028',
      english: 'approach',
      transcription: '[əˈprəʊtʃ]',
      russian: 'подход',
      tags: ''
    },
    {
      id: '33029',
      english: 'resilience',
      transcription: '[rɪˈzɪlɪəns]',
      russian: 'устойчивость',
      tags: ''
    },
    {
      id: '33047',
      english: 'pacification',
      transcription: '[ˌpæsəfəˈkeɪʃən]',
      russian: 'умиротворение',
      tags: ''
    },
    {
      id: '33050',
      english: 'persistent',
      transcription: '[pərˈsɪstənt]',
      russian: 'упорный',
      tags: ''
    },
    {
      id: '33051',
      english: 'flabbergasted',
      transcription: '[ˈflæbərˌɡæstəd]',
      russian: 'ошеломлённый',
      tags: ''
    },
    {
      id: '33067',
      english: 'kaiser',
      transcription: '[ˈkaɪzər]',
      russian: 'кайзер',
      tags: ''
    },
    {
      id: '33073',
      english: 'melodious',
      transcription: '[mɪˈloʊdɪəs]',
      russian: 'мелодичный, певучий',
      tags: ''
    },
    {
      id: '33074',
      english: 'tidily',
      transcription: '[ˈtaɪdɪli] ',
      russian: 'опрятно',
      tags: ''
    }
  ];

  const [words, changeWords] = useState(data || []);

  const handleWordsChange = replacement => {
    changeWords(
      words.map(originalWord => {
        return originalWord.id === replacement.id ? replacement : originalWord;
      })
    );
  };

  const handleDeleteWord = word => {
    changeWords(words.filter(originalWord => originalWord.id !== word.id));
  };

  return (
    <Router>
      <div className={styles['app-container']}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                words={words}
                onSave={handleWordsChange}
                onDelete={handleDeleteWord}
              />
            }
          />

          <Route path="/game" element={<Game words={words} />} />

          <Route path="/*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
