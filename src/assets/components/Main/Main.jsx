import styles from './Main.module.scss';
import SectionHero from '../SectionHero/SectionHero.jsx';
import SectionWordList from '../SectionWordList/SectionWordList.jsx';
import BackToTopButton from '../BackToTopButton/BackToTopButton.jsx';

export default function Main() {
  return (
    <main className={styles.main}>
      <SectionHero />
      <SectionWordList />
      <BackToTopButton />
    </main>
  );
}
