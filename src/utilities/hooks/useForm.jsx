import { useState } from 'react';
import setObjectValues from '../utils/setObjectValues';

export default function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    setObjectValues(initialFormData, '')
  );
  const [touched, setTouched] = useState(() =>
    setObjectValues(initialFormData, false)
  );

  const isFormInvalid = Object.values(errors).some(value => value);

  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (touched[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: validationRules[name]?.(value)
      }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setTouched(prevState => ({
      ...prevState,
      [name]: true
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: validationRules[name]?.(value)
    }));
  };

  const resetValues = () => {
    setFormData(prevState => setObjectValues(prevState, ''));
  };

  return {
    formData,
    errors,
    touched,
    isFormInvalid,
    handleChangeFormData,
    handleBlur,
    resetValues
  };
}
