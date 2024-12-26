import Word from '../Word/Word';
import styles from './WordList.module.scss';
// import classNames from 'classnames';

export default function WordList() {
  return (
    <ul className={styles.list}>
      <Word />
    </ul>
  );
}

// const ListNotice = () => {
//   return (
//     <p className={styles.list__notice}>
//       Start by adding a word to expand your knowledge!
//     </p>
//   );
// };
