import React, { useState, useCallback } from 'react';
import './HistoricalDates.styles.ts';
import type { HistoricalData } from '../../types/historical.ts';
import { CircularNavigation } from '../CircularNavigation/CircularNavigation.tsx';
import { PeriodDisplay } from '../PeriodDisplay/PeriodDisplay.tsx';
import { Navigation } from './Navigation/Navigation.tsx';
import { EventsSlider } from './EventsSlider/EventsSlider.tsx';
import { ThemeProvider } from 'styled-components';
import {
  Container, Content, Header, Title, MainSection, SliderSection, CircleContainer, NavigationWrapper, MobileNavigation, MobileCounter, MobileNavButtons,
  MobileNavButton, MobileDates, MobileDateYear,
} from './HistoricalDates.styles.ts';
import { theme } from '../../styles/theme.ts';

interface HistoricalDatesProps {
  data: HistoricalData;
  className?: string;
}

export const HistoricalDates: React.FC<HistoricalDatesProps> = ({
  data, className = '',
}) => {
  const [activePeriodIndex, setActivePeriodIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activePeriod = data.periods[activePeriodIndex];
  const periodsCount = data.periods.length;

  const handlePeriodChange = useCallback(async (newIndex: number) => {
    if (newIndex === activePeriodIndex || isAnimating) return;

    setIsAnimating(true);
    setActivePeriodIndex(newIndex);

    setTimeout(() => setIsAnimating(false), 800);
  }, [activePeriodIndex, isAnimating]);

  const handleNext = () => {
    const nextIndex = (activePeriodIndex + 1) % periodsCount;
    handlePeriodChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activePeriodIndex - 1 + periodsCount) % periodsCount;
    handlePeriodChange(prevIndex);
  };

  return (<ThemeProvider theme={theme}>
      <Container className={className}>
        <Content>
          <Header>
            <Title>Исторические <br /> даты</Title>
          </Header>

          <MainSection>
            <CircleContainer>
              <CircularNavigation
                periods={data.periods}
                activeIndex={activePeriodIndex}
                onPeriodChange={handlePeriodChange}
                isAnimating={isAnimating}
              />

              <PeriodDisplay period={activePeriod} />
            </CircleContainer>
          </MainSection>

          <NavigationWrapper>
            <Navigation
              currentIndex={activePeriodIndex}
              totalCount={periodsCount}
              onNext={handleNext}
              onPrev={handlePrev}
              disabled={isAnimating}
            />
          </NavigationWrapper>

          <MobileDates>
            <MobileDateYear $isStart={true}>
              {activePeriod.startYear}
            </MobileDateYear>
            <MobileDateYear $isStart={false}>
              {activePeriod.endYear}
            </MobileDateYear>
          </MobileDates>

          <SliderSection>
            <EventsSlider
              events={activePeriod.events}
              key={activePeriod.id}
            />
          </SliderSection>

          <MobileNavigation>
            <MobileCounter>
              {String(activePeriodIndex + 1).padStart(2, '0')} / {String(periodsCount).padStart(2, '0')}
            </MobileCounter>
            <MobileNavButtons>
              <MobileNavButton
                onClick={handlePrev}
                disabled={isAnimating}
              />
              <MobileNavButton
                onClick={handleNext}
                disabled={isAnimating}
              />
            </MobileNavButtons>
          </MobileNavigation>
        </Content>
      </Container>
    </ThemeProvider>);
};
