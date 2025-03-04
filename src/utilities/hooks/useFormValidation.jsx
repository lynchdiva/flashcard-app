import { useState } from 'react';
import setObjectValues from '../utils/setObjectValues';
import { validateWord } from '../utils/validation';

export default function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    setObjectValues(initialFormData, '')
  );

  const isFormDataInvalid = Object.values(errors).some(value => value);

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
    setFormData(prevState => setObjectValues(prevState, ''));
  };

  return {
    formData,
    errors,
    isFormDataInvalid,
    handleChangeFormData,
    handleBlur,
    resetValues
  };
}
