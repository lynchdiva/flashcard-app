import DefaultLayout from '../../layouts/DefaultLayout';
import SectionHero from './SectionHero/SectionHero.jsx';
import SectionWordList from './SectionWordList/SectionWordList';

export default function Home() {
  return (
    <DefaultLayout>
      <SectionHero />
      <SectionWordList />
    </DefaultLayout>
  );
}
