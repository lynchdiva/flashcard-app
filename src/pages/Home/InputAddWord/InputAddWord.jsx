import styles from './InputAddWord.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function InputAddWord({
  name,
  value,
  error,
  wasTouched,
  onChange,
  onBlur
}) {
  const isInputInvalid = error && wasTouched;
  return (
    <>
      <input
        className={cx('add-form__input', { ['invalid']: isInputInvalid })}
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isInputInvalid ? (
        <span className={styles['add-form__error-message']}>{error}</span>
      ) : null}
    </>
  );
}

InputAddWord.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  wasTouched: PropTypes.bool.isRequired
};
