import { useState, useEffect } from 'react';
import { learnedWordsStore } from '../../stores/LearnedWordsStore';

export default function useLearningSession(inProgressWords, initialWordIndex) {
  const [word, setWord] = useState(null);
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [sessionStartIndex, setSessionStartIndex] = useState(initialWordIndex);
  const [sessionProgress, setSessionProgress] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteSession = sessionState => {
    setIsCompleted(sessionState);
  };

  const handleSaveLearnedWord = learnedWord => {
    setSessionProgress(prevSessionProgress => [
      ...prevSessionProgress,
      learnedWord
    ]);
  };

  const handleDeleteLearnedWord = learnedWord => {
    setSessionProgress(prevSessionProgress =>
      prevSessionProgress.filter(word => word !== learnedWord)
    );
  };

  useEffect(() => {
    if (wordIndex < inProgressWords.length) {
      setWord(inProgressWords[wordIndex]);
      if (isCompleted) handleCompleteSession(false);
    }
  }, [wordIndex, inProgressWords, isCompleted]);

  useEffect(() => {
    if (wordIndex >= inProgressWords.length) {
      sessionProgress.forEach(learnedWord =>
        learnedWordsStore.addLearnedWord(learnedWord)
      );
      handleCompleteSession(true);
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
    handleSaveLearnedWord,
    handleDeleteLearnedWord
  };
}
