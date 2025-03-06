import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useWordsFilter(words) {
  const { value: learnedWords, setValue: setLearnedWords } = useLocalStorage(
    'learnedWords',
    []
  );
  const [inProgressWords, setInProgressWords] = useState(
    words.filter(word => !learnedWords.includes(word.english))
  );

  const addLearnedWord = newWord => {
    setLearnedWords(learnedWords => {
      const learnedWordsSet = new Set(learnedWords);
      learnedWordsSet.add(newWord.english);
      return Array.from(learnedWordsSet);
    });
  };

  const updateLearnedWord = (prevLearnedWord, updatedLearnedWord) => {
    setLearnedWords(learnedWords => {
      const learnedWordsSet = new Set(learnedWords);
      if (learnedWordsSet.delete(prevLearnedWord.english)) {
        learnedWordsSet.add(updatedLearnedWord.english);
      }
      return Array.from(learnedWordsSet);
    });
  };

  const deleteLearnedWord = word => {
    setLearnedWords(learnedWords => {
      const learnedWordsSet = new Set(learnedWords);
      learnedWordsSet.delete(word.english);
      return Array.from(learnedWordsSet);
    });
  };

  useEffect(() => {
    setInProgressWords(
      words.filter(word => !learnedWords.includes(word.english))
    );
  }, [learnedWords, words]);

  return {
    learnedWords,
    inProgressWords,
    addLearnedWord,
    updateLearnedWord,
    deleteLearnedWord
  };
}
