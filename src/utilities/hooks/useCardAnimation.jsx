import { useState, useCallback } from 'react';

export default function useCardAnimation({
  words = [],
  wordIndex = 0,
  setWordIndex = () => {}
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [moveAnimationType, setMoveAnimationType] = useState('');

  const handleFlipCard = useCallback(() => {
    return new Promise(res => {
      setIsFlipped(prevState => {
        if (prevState) {
          setTimeout(res, 100);
        } else {
          res();
        }
        return !prevState;
      });
    });
  }, []);

  const handleMoveAnimation = useCallback(animationType => {
    return new Promise(res => {
      setMoveAnimationType(animationType);
      setTimeout(() => {
        res();
      }, 500);
    });
  }, []);

  const handleMoveCard = useCallback(
    async (animationType, direction) => {
      if (isAnimating) return;

      setIsAnimating(true);

      const moveForward = () => {
        if (wordIndex < words.length) {
          setWordIndex(prev => prev + 1);
        }
      };
      const moveBack = () => {
        if (wordIndex > 0) {
          setWordIndex(prev => prev - 1);
        }
      };

      if (direction === 'forward') {
        await handleMoveAnimation(animationType);
        if (isFlipped) {
          await handleFlipCard();
        }
        moveForward();
      } else if (direction === 'back') {
        if (isFlipped) {
          await handleFlipCard();
        } //сняала
        await handleMoveAnimation(animationType);
        moveBack();
      }

      setMoveAnimationType('');
      setIsAnimating(false);
    },
    [
      isAnimating,
      words,
      wordIndex,
      isFlipped,
      handleFlipCard,
      handleMoveAnimation,
      setWordIndex
    ]
  );

  return {
    isAnimating,
    setIsAnimating,
    isFlipped,
    handleFlipCard,
    moveAnimationType,
    handleMoveCard
  };
}
