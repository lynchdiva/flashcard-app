import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Card({ word, isFlipped, flip }) {
  return (
    <div
      className={cx({
        'card__animation-container': true,
        'card__animation-container_flip': isFlipped
      })}
      onClick={flip}
    >
      <div className={styles['card-other-side']}>
        <span className={styles.card__tag}>{'Tags'}</span>
        <p className={styles['card-other-side__word']}>{word.russian}</p>

        <Notice />
      </div>

      <div className={styles.card}>
        <span className={styles.card__tag}>{'Tags'}</span>
        <div className={styles.card__box}>
          <p className={styles.card__word}>{word.english}</p>
          <p className={styles.card__transcription}>{word.transcription}</p>
        </div>

        <Notice />
      </div>
    </div>
  );
}

const Notice = () => {
  return <span className={styles.card__notice}>click to flip</span>;
};

Card.propTypes = {
  isFlipped: PropTypes.bool.isRequired,
  flip: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired
};
