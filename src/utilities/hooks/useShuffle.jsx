import { useState } from 'react';
import shuffleArray from '../utils/shuffleArray';

export default function useShuffle({
  updateWordsList,
  wordIndex,
  setSessionStartIndex,
  isFlipped,
  handleFlipCard
}) {
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffleWords = async () => {
    if (isShuffling) return;

    if (isFlipped) {
      await handleFlipCard();
    }

    setIsShuffling(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsShuffling(false);

    updateWordsList(prevWords => {
      const wordsToShuffle = prevWords.slice(wordIndex);
      const shuffled = shuffleArray(wordsToShuffle);
      const beforeCurrent = prevWords.slice(0, wordIndex);
      return beforeCurrent.concat(shuffled);
    });
    setSessionStartIndex(wordIndex);
  };

  return { isShuffling, handleShuffleWords };
}
