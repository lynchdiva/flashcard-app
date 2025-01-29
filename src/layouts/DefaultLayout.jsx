import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
        <BackToTopButton />
      </Main>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};
