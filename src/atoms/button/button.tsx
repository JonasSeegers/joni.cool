import React from 'react';
import styled from '@emotion/styled';
import { Fonts, Colors } from '../../constants/style';

interface ButtonProps {
  onClick?(): void;
  invert?: boolean;
}

export const Button: React.SFC<ButtonProps> = props => {
  return <StyledButton {...props} />;
};

const StyledButton = styled('button')(({ invert }: ButtonProps) => ({
  color: invert ? Colors.buttonColorBright : Colors.buttonColorDark,
  fontWeight: Fonts.fontWeightBold,
  border: `3px solid ${
    invert ? Colors.buttonColorBright : Colors.buttonColorDark
  }`,
  padding: '10px 20px',
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.defaultFontSize,
  outline: '0px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: 'all 0.4s linear',
  '&:hover': {
    backgroundColor: invert ? Colors.buttonColorBright : Colors.buttonColorDark,
    color: invert ? Colors.buttonColorDark : Colors.fontColorBright
  }
}));
