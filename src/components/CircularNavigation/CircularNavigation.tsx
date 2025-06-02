import React from 'react';
import type { HistoricalPeriod, CircularPoint } from '../../types/historical.ts';
import { useCircularPosition } from '../../hooks/useCircularPosition.ts';
import { Container, Circle, Point, PointNumber, PointLabel, Center } from './CircularNavigation.styles.ts';

interface CircularNavigationProps {
  periods: HistoricalPeriod[];
  activeIndex: number;
  onPeriodChange(index: number): void;
  isAnimating: boolean;
}

export const CircularNavigation: React.FC<CircularNavigationProps> = ({
  periods, activeIndex, onPeriodChange, isAnimating,
}) => {
  const points = useCircularPosition(periods.length, 265, activeIndex);

  const calculateRotatedPosition = (point: CircularPoint, activeIndex: number) => {
    const activePoint = points[activeIndex];
    const rotationAngle = -activePoint.angle + 90;

    const rad = rotationAngle * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const rotatedX = point.x * cos - point.y * sin;
    const rotatedY = point.x * sin + point.y * cos;

    return { x: rotatedX, y: rotatedY };
  };

  return (<Container>
    <Circle>
      {points.map((point, index) => {
        const rotatedPos = calculateRotatedPosition(point, activeIndex);
        const period = periods[index];
        const eventsCount = period.events.length;

        return (<Point
          key={point.id}
          $isActive={point.isActive}
          style={{
            left: `calc(50% + ${rotatedPos.x}px - 28px)`, top: `calc(50% + ${rotatedPos.y}px - 28px)`,
          }}
          onClick={() => !isAnimating && onPeriodChange(index)}
          disabled={isAnimating}
        >
          <PointNumber $isActive={point.isActive}>{eventsCount}</PointNumber>
          <PointLabel $isActive={point.isActive}>{period.name}</PointLabel>
        </Point>);
      })}
    </Circle>
    <Center />
  </Container>);
};

