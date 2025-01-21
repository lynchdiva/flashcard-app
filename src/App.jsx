import styles from './App.module.scss';
import Header from './assets/components/Header/Header.jsx';
import Main from './assets/components/Main/Main.jsx';
import Footer from './assets/components/Footer/Footer.jsx';
import { BrowserRouter as Router } from 'react-router';

function App() {
  return (
    <Router>
      <div className={styles['app-container']}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
