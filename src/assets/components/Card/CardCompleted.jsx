import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function CardCompleted() {
  return (
    <div
      className={cx({
        card__container: true,
        card: true,
        card_compleated: true
      })}
    >
      <p className={styles['card__completed-text']}>
        Great job! <br /> You&apos;ve completed your session.
      </p>
      <img
        className={styles['card__completed-img']}
        src="./src/assets/images/man-with-flag.svg"
        alt="Man with flag"
      />
    </div>
  );
}
