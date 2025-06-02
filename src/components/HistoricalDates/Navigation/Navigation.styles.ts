import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 56px;
    padding: 0 60px;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom: 40px;
    }
`;

export const Counter = styled.div`
    display: flex;
    align-items: baseline;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
`;

export const Current = styled.span`
    font-weight: 400;
`;

export const Separator = styled.span`
    margin: 0 4px;
    opacity: 0.5;
`;

export const Total = styled.span`
    font-weight: 400;
    opacity: 0.5;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.textLight};
    border-radius: 50%;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    transition: all ${props => props.theme.transitions.default};

    &:hover:not(:disabled) {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.primary};
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    svg {
        width: 8px;
        height: 12px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
    }
`;

export const PrevButton = styled(NavButton)`
    svg {
        transform: translateX(-1px);
    }
`;

export const NextButton = styled(NavButton)`
    svg {
        transform: translateX(1px);
    }
`;
