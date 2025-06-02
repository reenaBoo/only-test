export const theme = {
  colors: {
    primary: '#42567A',
    secondary: '#303E58',
    accent: '#5D5FEF',
    accentSecondary: '#EF5DA8',
    blue: '#3877EE',
    textLight: 'rgba(66, 86, 122, 0.5)',
    textMuted: 'rgba(66, 86, 122, 0.2)',
    white: '#FFFFFF',
    grey: '#F4F5F9',
    border: 'rgba(66, 86, 122, 0.1)',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.8s ease',
    bounce: '0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

export type Theme = typeof theme;

import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
