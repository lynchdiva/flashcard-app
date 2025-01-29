import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FrontSideOfCard from './FrontSideOfCard';

const cx = classNames.bind(styles);

export default function SlidingCard({ word, moveAnimationType }) {
  return (
    <>
      {moveAnimationType === 'undo' ? (
        <div className={cx('card__container', moveAnimationType)}>
          <FrontSideOfCard word={word} />
        </div>
      ) : (
        <div className={cx('card__progress', moveAnimationType)}>
          <p>{moveAnimationType === 'learned' ? 'Know' : 'Don’t know'}</p>
        </div>
      )}
    </>
  );
}

SlidingCard.propTypes = {
  word: PropTypes.object.isRequired,
  moveAnimationType: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired
};
