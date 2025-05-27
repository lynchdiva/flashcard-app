import styles from './App.module.scss';
import Home from '../../pages/Home/Home';
import Game from '../../pages/Game/Game';
import Page404 from '../../pages/Page404/Page404';
import ServerFeedback from '../ServerFeedback/ServerFeedback';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { wordsStore } from '../../stores/WordsStore';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  useEffect(() => {
    wordsStore.fetchWords();
  }, []);

  return (
    <div className={styles['app-container']}>
      <ServerFeedback feedback={wordsStore.serverFeedback} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
});

export default App;
