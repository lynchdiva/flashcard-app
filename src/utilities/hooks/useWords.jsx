import { useCallback, useEffect, useState } from 'react';

export function useWords() {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWords = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/words');
      if (!response.ok) throw new Error('Error loading words');
      const data = await response.json();
      setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addWord = async newWord => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/words/add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newWord)
      });
      if (!response.ok) throw new Error('Error adding word');
      const data = await response.json();
      setWords(prevWords => [...prevWords, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateWord = async updatedWord => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/words/${updatedWord.id}/update`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedWord)
      });
      if (!response.ok) throw new Error('Error updating word');
      const data = await response.json();
      setWords(prevWords =>
        prevWords.map(word => (word.id === updatedWord.id ? data : word))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteWord = async word => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/words/${word.id}/delete`, {
        method: 'POST'
      });
      if (!response.ok) throw new Error('Error deleting word');
      setWords(prevWords =>
        prevWords.filter(prevWord => prevWord.id !== word.id)
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);

  return {
    words,
    isLoading,
    error,
    addWord,
    updateWord,
    deleteWord
  };
}
