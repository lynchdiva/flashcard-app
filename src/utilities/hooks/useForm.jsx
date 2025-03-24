import { useState, useEffect } from 'react';
import setObjectValues from '../utils/setObjectValues';

export function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    setObjectValues(initialFormData, null)
  );
  const [touched, setTouched] = useState(() =>
    setObjectValues(initialFormData, false)
  );

  const [isFormInvalid, setIsFormInvalid] = useState(false);

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
    setTouched(prevState => setObjectValues(prevState, false));
    setErrors(prevState => setObjectValues(prevState, null));
  };

  useEffect(() => {
    const noValidationErrors = areAllFieldsValid();
    setIsFormInvalid(!noValidationErrors);

    function areAllFieldsValid() {
      const currentErrors = Object.keys(validationRules).reduce((acc, key) => {
        acc[key] = validationRules[key]?.(formData[key]);
        return acc;
      }, {});
      const noErrors = Object.values(currentErrors).every(error => !error);
      return noErrors;
    }
  }, [formData, validationRules]);

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
