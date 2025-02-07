import Main from '../components/Main/Main';
import PropTypes from 'prop-types';

export default function MinimalLayout({ children }) {
  return <Main>{children}</Main>;
}

MinimalLayout.propTypes = {
  children: PropTypes.node.isRequired
};
