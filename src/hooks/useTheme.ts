import { colors } from '../theme/colors';

export const useTheme = () => {
  return {
    colors,
    // Add more theme properties as needed
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  };
};