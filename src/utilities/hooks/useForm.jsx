import { useState } from 'react';
import mapObjectValues from '../utils/mapObjectValues';
import { validateWord } from '../utils/validation';

export default function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    mapObjectValues(initialFormData, '')
  );

  const isFormInvalid = Object.values(errors).some(value => value);

  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevState => ({
      ...prevState,
      [name]: validationRules[name]?.(value)
    }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setErrors(prevState => ({
      ...prevState,
      [name]: validateWord(value)
    }));
  };

  const resetValues = () => {
    setFormData(prevState => mapObjectValues(prevState, ''));
  };

  return {
    formData,
    errors,
    isFormInvalid,
    handleChangeFormData,
    handleBlur,
    resetValues
  };
}
