import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Card(props) {
  const { word, isFlipped, flip, progress } = props;

  return (
    <div
      className={cx('card__container', 'card__animation-container', {
        'card__animation-container_flip': isFlipped
      })}
      onClick={flip}
    >
      <FrontSideOfCard word={word} progress={progress} />
      <BackSideOfCard word={word} progress={progress} />
    </div>
  );
}
const FrontSideOfCard = ({ word, progress }) => {
  return (
    <div
      className={cx(progress, {
        'card-other-side': true,
        'card-other-side_animated': true
      })}
    >
      <span className={styles.card__tag}>{word.tags}</span>
      <p className={styles['card-other-side__word']}>{word.russian}</p>

      <Notice />
    </div>
  );
};
const BackSideOfCard = ({ word, progress }) => {
  return (
    <div
      className={cx(progress, {
        card: true,
        card_animated: true
      })}
    >
      <span className={styles.card__tag}>{word.tags}</span>
      <div className={styles.card__box}>
        <p className={styles.card__word}>{word.english}</p>
        <p className={styles.card__transcription}>{word.transcription}</p>
      </div>

      <Notice />
    </div>
  );
};

const Notice = () => {
  return <span className={styles.card__notice}>click to flip</span>;
};

Card.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  flip: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
  progress: PropTypes.string.isRequired
};

FrontSideOfCard.propTypes = {
  word: PropTypes.object.isRequired,
  progress: PropTypes.string.isRequired
};

BackSideOfCard.propTypes = {
  word: PropTypes.object.isRequired,
  progress: PropTypes.string.isRequired
};
