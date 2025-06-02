import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 20px 10px 0;
    }
`;

export const NavigationContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 10;

    @media (max-width: 768px) {
        left: 10px;
        right: 10px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const NavButton = styled.button<{
  $direction: 'prev' | 'next'; $visible?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    pointer-events: auto;
    transition: all ${props => props.theme.transitions.default};
    opacity: ${props => props.$visible === false ? 0 : 1};
    visibility: ${props => props.$visible === false ? 'hidden' : 'visible'};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &:hover:not(:disabled) {
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-top: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: ${props => props.$direction === 'prev' ? 'rotate(-135deg)' : 'rotate(45deg)'};
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
    }
`;

export const SwiperContainer = styled.div`
    position: relative;
    padding: 20px 60px;
    overflow: hidden;
    max-width: 100%;

    @media (max-width: 768px) {
        padding: 20px 40px 56px;
    }

    @media (max-width: 480px) {
        padding: 0;
    }

    .swiper {
        overflow: hidden;
        width: 100%;
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    .swiper-wrapper {
        display: flex;
        align-items: stretch;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        width: fit-content;
        box-sizing: border-box;
    }

    .swiper-slide {
        width: 320px;
        height: auto;
        flex-shrink: 0;
        display: flex;
        box-sizing: border-box;

        @media (max-width: 768px) {
            width: 280px;
        }

        @media (max-width: 480px) {
            width: 250px;
        }
    }

    .swiper-pagination {
        position: relative;
        margin-top: 20px;
        text-align: center;
    }

    .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background: ${props => props.theme.colors.textMuted};
        border-radius: 50%;
        cursor: pointer;
        transition: all ${props => props.theme.transitions.default};
        margin: 0 4px;

        &.swiper-pagination-bullet-active {
            background: ${props => props.theme.colors.primary};
        }
    }
`;

export const EventCard = styled.article`
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
`;

export const EventYear = styled.div`
    font-size: 25px;
    font-weight: 400;
    color: ${props => props.theme.colors.blue};
    line-height: 1.2;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const EventDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    line-height: 1.4;
    margin: 0;
    flex-grow: 1;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
`;

export const EmptyMessage = styled.p`
    color: ${props => props.theme.colors.textLight};
    font-size: 16px;
    text-align: center;
`;
