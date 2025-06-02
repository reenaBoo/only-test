import React from 'react';
import '../../CircularNavigation/CircularNavigation.styles.ts';
import { Container, Counter, Current, Separator, Total, ButtonsContainer, PrevButton, NextButton } from './Navigation.styles.ts';

interface NavigationProps {
  currentIndex: number;
  totalCount: number;
  onNext(): void;
  onPrev(): void;
  disabled?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentIndex,
  totalCount,
  onNext,
  onPrev,
  disabled = false
}) => {
  return (
    <Container>
      <Counter>
        <Current>{String(currentIndex + 1).padStart(2, '0')}</Current>
        <Separator>/</Separator>
        <Total>{String(totalCount).padStart(2, '0')}</Total>
      </Counter>

      <ButtonsContainer>
        <PrevButton onClick={onPrev} disabled={disabled} aria-label="Предыдущий период">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </PrevButton>

        <NextButton onClick={onNext} disabled={disabled} aria-label="Следующий период">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </NextButton>
      </ButtonsContainer>
    </Container>
  );
};
