import { useMemo } from 'react';
import type { CircularPoint } from '../types/historical.ts';

export const useCircularPosition = (itemsCount: number, radius: number = 265, activeIndex: number = 0) => {
  return useMemo(() => {
    const points: CircularPoint[] = [];
    const angleStep = (2 * Math.PI) / itemsCount;
    const startAngle = -Math.PI / 2;

    for (let i = 0; i < itemsCount; i++) {
      const angle = startAngle + (i * angleStep);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      points.push({
        id: `point-${i}`, angle: angle * (180 / Math.PI),
        x, y, label: `${i + 1}`, isActive: i === activeIndex,
      });
    }

    return points;
  }, [itemsCount, radius, activeIndex]);
};
