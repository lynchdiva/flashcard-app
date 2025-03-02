import { useState } from 'react';
import mapObjectValues from '../utils/mapObjectValues';

export default function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    mapObjectValues(initialFormData, '')
  );
  const [touched, setTouched] = useState(() =>
    mapObjectValues(initialFormData, false)
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
    setFormData(prevState => mapObjectValues(prevState, ''));
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
