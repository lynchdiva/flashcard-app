import { useState, useEffect } from 'react';
import { learnedWordsStore } from '../../stores/LearnedWordsStore';

export default function useLearningSession(inProgressWords, initialWordIndex) {
  const [word, setWord] = useState(null);
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [sessionStartIndex, setSessionStartIndex] = useState(initialWordIndex);
  const [sessionProgress, setSessionProgress] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const updateSessionCompletion = sessionState => {
    setIsCompleted(sessionState);
  };

  const saveToProgress = learnedWord => {
    setSessionProgress(prevSessionProgress => [
      ...prevSessionProgress,
      learnedWord
    ]);
  };

  const removeFromProgress = learnedWord => {
    setSessionProgress(prevSessionProgress =>
      prevSessionProgress.filter(word => word !== learnedWord)
    );
  };

  useEffect(() => {
    if (wordIndex < inProgressWords.length) {
      setWord(inProgressWords[wordIndex]);
      if (isCompleted) updateSessionCompletion(false);
    }
  }, [wordIndex, inProgressWords, isCompleted]);

  useEffect(() => {
    if (wordIndex >= inProgressWords.length) {
      sessionProgress.forEach(learnedWord =>
        learnedWordsStore.addLearnedWord(learnedWord)
      );
      updateSessionCompletion(true);
    }
  }, [wordIndex, inProgressWords, sessionProgress]);

  return {
    word,
    wordIndex,
    setWordIndex,
    sessionStartIndex,
    setSessionStartIndex,
    sessionProgress,
    isCompleted,
    saveToProgress,
    removeFromProgress
  };
}
