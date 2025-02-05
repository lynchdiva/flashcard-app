import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function EditButtons({ onSave, onCancel }) {
  const onClick = () => {
    onSave();
    onCancel();
  };

  return (
    <>
      <button
        className={cx('table__button', 'table__button_orange')}
        onClick={onClick}
      >
        <svg className={cx('table__icon', 'table__icon_orange')}>
          <use xlinkHref="src/assets/icons/sprite.svg#check-mark"></use>
        </svg>
      </button>
      <button className={styles.table__button} onClick={onCancel}>
        <svg className={styles.table__icon}>
          <use xlinkHref="src/assets/icons/sprite.svg#cancel"></use>
        </svg>
      </button>
    </>
  );
}

EditButtons.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired
};
