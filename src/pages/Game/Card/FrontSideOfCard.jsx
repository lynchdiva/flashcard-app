import styles from './Card.module.scss';
import CardNotice from './CardNotice';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function FrontSideOfCard({ word }) {
  return (
    <div
      className={cx({
        card: true,
        card_animated: true
      })}
    >
      <span className={styles.card__tag}>{word.tags}</span>
      <div className={styles.card__box}>
        <p className={styles.card__word}>{word.english}</p>
        <p className={styles.card__transcription}>{word.transcription}</p>
      </div>

      <CardNotice />
    </div>
  );
}

FrontSideOfCard.propTypes = {
  word: PropTypes.object.isRequired
};
