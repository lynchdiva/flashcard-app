import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FrontSideOfCard from './FrontSideOfCard';
import BackSideOfCard from './BackSideOfCard';
import SlidingCard from './SlidingCard';

const cx = classNames.bind(styles);

export default function Card(props) {
  const {
    word,
    isFlipped,
    onFlip,
    moveAnimationType,
    isAnimating,
    onAnimating,
    isShuffling
  } = props;

  const handleClick = () => {
    if (isAnimating) return;

    onAnimating(true);
    onFlip();
  };

  const handleAnimationEnd = () => {
    onAnimating(false);
  };

  return (
    <>
      {moveAnimationType ? (
        <SlidingCard word={word} moveAnimationType={moveAnimationType} />
      ) : (
        <div
          className={cx('card__container', 'card__animation-container', {
            'card__animation-container_flip': isFlipped,
            card__shake: isShuffling
          })}
          onClick={handleClick}
          onTransitionEnd={handleAnimationEnd}
        >
          <BackSideOfCard word={word} />
          <FrontSideOfCard word={word} />
        </div>
      )}
    </>
  );
}

Card.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
  moveAnimationType: PropTypes.string.isRequired,
  onAnimating: PropTypes.func.isRequired,
  isAnimating: PropTypes.bool.isRequired,
  isShuffling: PropTypes.bool.isRequired
};
