import { useState, useEffect, useCallback } from 'react';
import setObjectValues from '../utils/setObjectValues';

export default function useForm(initialFormData, validationRules) {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState(() =>
    setObjectValues(initialFormData, null)
  );
  const [touched, setTouched] = useState(() =>
    setObjectValues(initialFormData, false)
  );
  const [validationEnabled, setValidationEnabled] = useState(true);
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
    if (!validationEnabled) return;

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

  const resetValues = useCallback(() => {
    setFormData(prevState => setObjectValues(prevState, ''));
    setTouched(prevState => setObjectValues(prevState, false));
    setErrors(prevState => setObjectValues(prevState, null));
  }, []);

  const validateField = useCallback(
    (name, value) => validationRules[name]?.(value) || null,
    [validationRules]
  );

  const areAllFieldsValid = useCallback(() => {
    return Object.keys(validationRules).every(key => {
      return !validateField(key, formData[key]);
    });
  }, [formData, validationRules, validateField]);

  useEffect(() => {
    setIsFormInvalid(!areAllFieldsValid());
  }, [formData, areAllFieldsValid]);

  return {
    formData,
    errors,
    touched,
    isFormInvalid,
    handleChangeFormData,
    handleBlur,
    resetValues,
    setValidationEnabled
  };
}
