import styles from './Word.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const EditableWordCell = forwardRef(({ name, value, error, onChange }, ref) => {
  return (
    <td className={styles.table__data}>
      <input
        className={cx('table__input', { ['invalid']: error })}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      {error ? (
        <span className={styles['table__error-message']}>{error}</span>
      ) : null}
    </td>
  );
});

EditableWordCell.displayName = 'EditableCell';

EditableWordCell.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditableWordCell;
