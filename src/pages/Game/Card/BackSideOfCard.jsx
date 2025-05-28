import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CardNotice from './CardNotice';

const cx = classNames.bind(styles);

export default function BackSideOfCard({ word }) {
  return (
    <div className={cx('card-other-side', 'card-other-side_animated')}>
      <span className={cx('card__tag')}>{word.tags}</span>
      <p className={cx('card-other-side__word')}>{word.russian}</p>

      <CardNotice />
    </div>
  );
}

BackSideOfCard.propTypes = {
  word: PropTypes.object.isRequired
};
