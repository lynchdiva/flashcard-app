import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CardCompleted from './CardCompleted';

const cx = classNames.bind(styles);

export default function Card(props) {
  const { word, isFlipped, flip, isCompleted } = props;

  return (
    <>
      {isCompleted ? (
        <CardCompleted />
      ) : (
        <div
          className={cx({
            card__container: true,
            'card__animation-container': true,
            'card__animation-container_flip': isFlipped
          })}
          onClick={flip}
        >
          <FrontSideOfCard word={word} />
          <BackSideOfCard word={word} />
        </div>
      )}
    </>
  );
}
const FrontSideOfCard = ({ word }) => {
  return (
    <div
      className={cx({
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
const BackSideOfCard = ({ word }) => {
  return (
    <div
      className={cx({
        card: true,
        card_animated: true
      })}
    >
      <span className={styles.card__tag}>{'Tags'}</span>
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
  word: PropTypes.object.isRequired
};

FrontSideOfCard.propTypes = {
  word: PropTypes.object.isRequired
};

BackSideOfCard.propTypes = {
  word: PropTypes.object.isRequired
};
