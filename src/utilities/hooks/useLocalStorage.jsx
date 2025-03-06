import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const data = JSON.parse(window.localStorage.getItem(key));
      return data !== null ? data : initialValue;
    } catch (err) {
      console.error(`Ошибка чтения из localStorage по ключу '${key}':`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    if (value === null || value === undefined) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return { value, setValue };
}
