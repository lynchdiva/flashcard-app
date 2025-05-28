import { useState } from 'react';
import shuffleArray from '../utils/shuffleArray';

export default function useShuffle({
  setInProgressWords,
  wordIndex,
  setSessionStartIndex,
  isFlipped,
  toggleFlipWithDelay
}) {
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleRemainingWords = async () => {
    if (isShuffling) return;

    if (isFlipped) {
      await toggleFlipWithDelay();
    }

    setIsShuffling(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsShuffling(false);

    setInProgressWords(prevWords => {
      const wordsToShuffle = prevWords.slice(wordIndex);
      const shuffled = shuffleArray(wordsToShuffle);
      const beforeCurrent = prevWords.slice(0, wordIndex);
      const updatedWordsList = beforeCurrent.concat(shuffled);
      return updatedWordsList;
    });

    setSessionStartIndex(wordIndex);
  };

  return { isShuffling, shuffleRemainingWords };
}
