import styles from './Main.module.scss';
import PropTypes from 'prop-types';

export default function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};
