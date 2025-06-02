import styled from 'styled-components';

export const StartYear = styled.span`
    position: absolute;
    left: -42%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.accent};

    @media (max-width: ${props => props.theme.breakpoints.desktop}) {
        font-size: 150px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 120px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: 80px;
    }
`;

export const EndYear = styled.span`
    position: absolute;
    right: -42%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.accentSecondary};

    @media (max-width: ${props => props.theme.breakpoints.desktop}) {
        font-size: 150px;
    }

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 120px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: 80px;
    }
`;

