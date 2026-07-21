/**
 * ENCGT Design System
 * Centralized design tokens for consistent premium corporate aesthetic
 */

export const colors = {
  primary: '#0B5D3A', // ENCGT Green
  accent: '#8CC63F', // Lime Green
  background: '#FAFAFA', // Off-white
  surface: '#FFFFFF', // Pure white
  text: {
    primary: '#1B1B1B', // Charcoal
    secondary: '#6B7280', // Muted gray
  },
  border: '#E5E7EB', // Light gray
};

export const typography = {
  family: {
    sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  size: {
    h1: '72px',
    h2: '48px',
    h3: '32px',
    body: '16px',
    caption: '14px',
    small: '12px',
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
    luxury: 1.8,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.05em',
  },
};

export const spacing = {
  container: {
    maxWidth: '1440px',
  },
  padding: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '40px',
    xxl: '60px',
    xxxl: '80px',
  },
  gap: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
};

export const transitions = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

export const zIndex = {
  header: 50,
  dropdown: 40,
  modal: 100,
};
