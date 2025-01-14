import styles from './App.module.scss';
import Header from './assets/components/Header/Header.jsx';
import Main from './assets/components/Main/Main.jsx';
import Footer from './assets/components/Footer/Footer.jsx';

function App() {
  return (
    <div className={styles['app-container']}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
