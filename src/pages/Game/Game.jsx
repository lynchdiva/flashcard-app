import PropTypes from 'prop-types';
import DefaultLayout from '../../layouts/DefaultLayout';
import SectionCards from './SectionCards/SectionCards.jsx';

export default function Game() {
  return (
    <DefaultLayout>
      <SectionCards initialWordIndex={0} />
    </DefaultLayout>
  );
}

Game.propTypes = {
  initialWordIndex: PropTypes.number
};
