import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 170px 80px;
    background: transparent;
    overflow-x: hidden;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 60px 20px;
    }
`;


export const Content = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
`;

export const Header = styled.div`
    margin-bottom: 56px;
    position: relative;
    padding-left: 40px;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom: 40px;
        padding-left: 24px;
    }
`;

export const Title = styled.h2`
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    color: ${props => props.theme.colors.primary};
    margin: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -40px;
        top: 0;
        bottom: 0;
        width: 5px;
        background: linear-gradient(45deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.accentSecondary});
        border-radius: 3px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 32px;

        &::before {
            left: -24px;
            width: 4px;
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: 24px;

        &::before {
            left: -20px;
            width: 3px;
        }
    }
`;


export const MainSection = styled.div`
    position: relative;
    width: 100%;
    height: 530px;
    margin-bottom: 104px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${props => props.theme.breakpoints.desktop}) {
        height: 400px;
        margin-bottom: 60px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        height: auto;
        flex-direction: column;
        gap: 40px;
        margin-bottom: 40px;
        display: none;
    }
`;


export const CircleContainer = styled.div`
    position: relative;
    width: 530px;
    height: 530px;

    @media (max-width: ${props => props.theme.breakpoints.desktop}) {
        width: 400px;
        height: 400px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const MobileCounter = styled.div`
    font-size: 14px;
    color: ${props => props.theme.colors.textMuted};
    font-weight: 400;
`;

export const MobileNavButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const MobileNavButton = styled.button<{ disabled?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    border: 1px solid ${props => props.theme.colors.textLight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        color: white;
    }

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-top: 2px solid currentColor;
        border-right: 2px solid currentColor;
    }

    &:first-child::before {
        transform: rotate(-135deg);
    }

    &:last-child::before {
        transform: rotate(45deg);
    }
`;


export const SliderSection = styled.div`
    margin-bottom: 60px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom: 0;

        .swiper-pagination {
            display: block;
            position: relative;
            margin-top: 0;
            text-align: center;
        }

        .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            background: ${props => props.theme.colors.textMuted};
            border-radius: 50%;
            margin: 0 4px;

            &.swiper-pagination-bullet-active {
                background: ${props => props.theme.colors.primary};
            }
        }
    }
`;


export const NavigationWrapper = styled.div`
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const MobileNavigation = styled.div`
    display: none;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0 20px;
    }
`;

export const MobileDates = styled.div`
    display: none;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 40px 0;
        padding: 0 20px;
        
        @media (max-width: 480px) {
            gap: 15px;
            margin: 30px 0;
        }
    }
`;

export const MobileDateYear = styled.div<{ $isStart?: boolean }>`
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    color: ${props => props.$isStart ? props.theme.colors.blue : props.theme.colors.accentSecondary};
    
    @media (max-width: 480px) {
        font-size: 120px;
    }
    
    @media (max-width: 360px) {
        font-size: 56px;
    }
`;





