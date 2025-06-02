import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useAnimatedNumbers = (targetValue: number, duration: number = 0.8) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const currentValue = useRef(targetValue);

  useEffect(() => {
    if (!elementRef.current) return;

    const startValue = currentValue.current;
    const endValue = targetValue;

    if (startValue === endValue) return;

    gsap.to(currentValue, {
      current: endValue, duration, ease: 'power2.out', onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.textContent = Math.round(currentValue.current).toString();
        }
      },
    });

  }, [targetValue, duration]);

  return elementRef;
};
