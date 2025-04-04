import styles from './Card.module.scss';
import CardNotice from './CardNotice';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function FrontSideOfCard({ word }) {
  return (
    <div className={cx('card', 'card_animated')}>
      <span className={cx('card__tag')}>{word.tags}</span>
      <div className={cx('card__box')}>
        <p className={cx('card__word')}>{word.english}</p>
        <p className={cx('card__transcription')}>{word.transcription}</p>
      </div>

      <CardNotice />
    </div>
  );
}

FrontSideOfCard.propTypes = {
  word: PropTypes.object.isRequired
};
