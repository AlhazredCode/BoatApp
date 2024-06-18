import React from 'react';
import { Box } from "../../components/index";


const backgroundColors = {
  primary: {
    light: '$primary300',
    dark: '$backgroundDark500',
  },
  primaryHeavy: {
    light: '$primary400',
    dark: '$backgroundDark500',
  },
  primaryLight: {
    light: '$primary200', 
    dark: '$backgroundDark300',
  },
  primaryLight2: {
    light: '$primary100', 
    dark: '$backgroundDark300',
  },
  secondary: {
    light: '$secondary400', 
    dark: '$secondary900',
  },
  secondaryLight: {
    light: '$secondary200', 
    dark: '$secondary400',
  },
  secondaryLight2: {
    light: '$secondary100', 
    dark: '$secondary400',
  },
  Header: {
    light: '$secondary400', 
    dark: '$secondary400',
  },

  Surfaces1: {
    light: '$backgroundLight0', 
    dark: '$secondary400',
  },
  Surfaces2: {
    light: '$backgroundLight50', 
    dark: '$secondary400',
  },
  Surfaces3: {
    light: '$backgroundLight100', 
    dark: '$secondary400',
  },
};

export const Background = ({ children, color = 'primary', style }) => {
    return (
      <Box
        flex={1}
        sx={{
          _dark: {
            bg: backgroundColors[color].dark, 
          },
          _light: {
            bg: backgroundColors[color].light,
          },
        }}
        style={style}
      >
        {children}
      </Box>
    );
  };

  export const useBackground = (color = 'primary') => ({
    _dark: {
      bg: backgroundColors[color].dark,
    },
    _light: {
      bg: backgroundColors[color].light,
    },
  });
  