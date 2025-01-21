import DefaultLayout from '../../layouts/DefaultLayout';
import SectionCards from './SectionCards/SectionCards.jsx';

export default function Game(props) {
  return (
    <DefaultLayout>
      <SectionCards {...props} />
    </DefaultLayout>
  );
}
