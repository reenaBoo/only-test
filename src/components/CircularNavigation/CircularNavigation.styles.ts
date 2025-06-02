import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Circle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 50%;
`;

export const Point = styled.button<{ $isActive: boolean }>`
    position: absolute;
    width: 56px;
    height: 56px;
    background: ${props => props.$isActive ? props.theme.colors.secondary : props.theme.colors.grey};
    border: 1px solid ${props => props.$isActive ? props.theme.colors.secondary : props.theme.colors.border};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.8s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    &:hover:not(:disabled) {
        background: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};
    }

    &:disabled {
        pointer-events: none;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        width: 40px;
        height: 40px;
    }
`;


export const PointNumber = styled.span<{ $isActive: boolean }>`
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.$isActive ? props.theme.colors.white : props.theme.colors.primary};
    transition: color ${props => props.theme.transitions.default};

    ${Point}:hover & {
        opacity: 1;
        color: ${props => props.theme.colors.white};
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 16px;
    }
`;

export const PointLabel = styled.span<{ $isActive: boolean }>`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    opacity: ${props => props.$isActive ? 1 : 0};
    transition: opacity ${props => props.theme.transitions.default};
    pointer-events: none;

    ${Point}:hover & {
        opacity: 1;
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 12px;
        margin-top: 15px;
    }
`;

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;
