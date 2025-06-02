import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { HistoricalEvent } from '../../../types/historical.ts';
import {
  EmptyContainer, EmptyMessage, Container, NavigationContainer, NavButton, SwiperContainer, EventCard, EventYear, EventDescription,
} from './EventsSlider.styles.ts';

interface EventsSliderProps {
  events: HistoricalEvent[];
  className?: string;
}

export const EventsSlider: React.FC<EventsSliderProps> = ({
  events, className = '',
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const needsNavigation = events.length > slidesPerView;

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      const swiper = swiperRef.current;

      if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = prevButtonRef.current;
        swiper.params.navigation.nextEl = nextButtonRef.current;
      }

      swiper.navigation.init();
      swiper.navigation.update();

      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  }, [events]);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleProgress = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleBreakpoint = (breakpointParams: any) => {
    const newSlidesPerView = breakpointParams.slidesPerView || 3;
    setSlidesPerView(newSlidesPerView);
  };

  if (!events.length) {
    return (<EmptyContainer className={className}>
        <EmptyMessage>События не найдены</EmptyMessage>
      </EmptyContainer>);
  }

  return (<Container className={className}>
      {needsNavigation && (<NavigationContainer>
          <NavButton
            ref={prevButtonRef}
            $direction='prev'
            $visible={!isBeginning}
            aria-label='Предыдущие события'
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <NavButton
            ref={nextButtonRef}
            $direction='next'
            $visible={!isEnd}
            aria-label='Следующие события'
            onClick={() => swiperRef.current?.slideNext()}
          />
        </NavigationContainer>)}

      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={'auto'}
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          simulateTouch={true}
          allowTouchMove={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          onProgress={handleProgress}
          onBreakpoint={handleBreakpoint}
          navigation={needsNavigation ? {
            prevEl: prevButtonRef.current, nextEl: nextButtonRef.current,
          } : false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2, spaceBetween: 25,
            }, 640: {
              slidesPerView: 'auto', spaceBetween: 20,
            }, 1024: {
              slidesPerView: 'auto', spaceBetween: 40,
            },
          }}
          watchOverflow={true}
          observer={true}
          observeParents={true}
          centerInsufficientSlides={false}
          freeMode={false}
          watchSlidesProgress={true}
        >
          {events.map((event) => (<SwiperSlide key={event.id}>
              <EventCard>
                <EventYear>{event.year}</EventYear>
                <EventDescription>{event.description}</EventDescription>
              </EventCard>
            </SwiperSlide>))}
        </Swiper>
      </SwiperContainer>
    </Container>);
};
