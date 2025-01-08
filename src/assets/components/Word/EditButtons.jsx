import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function EditButtons({ onSave, onCancle }) {
  return (
    <>
      <button
        className={cx({
          table__button: true,
          table__button_orange: true
        })}
        onClick={onSave}
      >
        <svg
          className={cx({
            table__icon: true,
            table__icon_orange: true
          })}
        >
          <use xlinkHref="src/assets/icons/sprite.svg#check-mark"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onCancle}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#cancel"></use>
        </svg>
      </button>
    </>
  );
}

EditButtons.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancle: PropTypes.func.isRequired
};
