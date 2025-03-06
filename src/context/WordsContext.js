import { createContext } from 'react';

export const WordsContext = createContext({
  words: [],
  learnedWords: [],
  inProgressWords: [],
  addWord: () => {},
  updateWord: () => {},
  deleteWord: () => {},
  isLoading: false,
  error: '',
  addLearnedWord: () => {},
  updateLearnedWord: () => {},
  deleteLearnedWord: () => {}
});
