import styles from './Main.module.scss';
import SectionHero from '../SectionHero/SectionHero.jsx';
import SectionWordList from '../SectionWordList/SectionWordList.jsx';

export default function Main() {
  return (
    <main className={styles.main}>
      <SectionHero />
      <SectionWordList />
    </main>
  );
}
