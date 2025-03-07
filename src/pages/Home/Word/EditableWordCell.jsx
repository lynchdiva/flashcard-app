import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const EditableWordCell = forwardRef(
  ({ name, value, error, isTouched, onChange, onBlur }, ref) => {
    const isInputInvalid = error && isTouched;
    return (
      <td className={styles.table__data}>
        <input
          className={cx('table__input', { ['invalid']: isInputInvalid })}
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {isInputInvalid ? (
          <span className={styles['table__error-message']}>{error}</span>
        ) : null}
      </td>
    );
  }
);

EditableWordCell.displayName = 'EditableCell';

EditableWordCell.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isTouched: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default EditableWordCell;
