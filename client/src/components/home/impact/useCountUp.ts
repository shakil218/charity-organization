'use client';

import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Custom hook to animate numerical count-up with reduced-motion accessibility support.
 * @param target The target number to count up to.
 * @param duration Duration of the animation in milliseconds (defaults to 1600ms).
 * @param startTrigger Boolean flag indicating whether to start the count-up (e.g., when in view).
 */
export function useCountUp(target: number, duration: number = 1600, startTrigger: boolean = true): number {
  const prefersReducedMotion = useReducedMotion();
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion || !startTrigger || target <= 0) {
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, startTrigger, prefersReducedMotion]);

  if (prefersReducedMotion || target <= 0) {
    return target;
  }

  return currentValue;
}
