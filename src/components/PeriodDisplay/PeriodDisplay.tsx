import React from 'react';
import { useAnimatedNumbers } from '../../hooks/useAnimatedNumbers.ts';
import type { HistoricalPeriod } from '../../types/historical.ts';
import { StartYear, EndYear } from './PeriodDisplay.styles.ts';

interface PeriodDisplayProps {
  period: HistoricalPeriod;
}

export const PeriodDisplay: React.FC<PeriodDisplayProps> = ({ period }) => {
  const startYearRef = useAnimatedNumbers(period.startYear);
  const endYearRef = useAnimatedNumbers(period.endYear);

  return (
    <>
      <StartYear ref={startYearRef}>
        {period.startYear}
      </StartYear>
      <EndYear ref={endYearRef}>
        {period.endYear}
      </EndYear>
    </>
  );
};
