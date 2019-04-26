import React from 'react';
import styled from '@emotion/styled';
import { Fonts, Colors } from '../../constants/style';

interface ButtonProps {
  onClick?(): void;
}

export const Button: React.SFC<ButtonProps> = props => {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled('button')({
  fontWeight: Fonts.fontWeightBold,
  border: `3px solid ${Colors.buttonColorDark}`,
  padding: '10px 40px',
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.defaultFontSize,
  outline: '0px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: Colors.buttonColorDark,
    color: Colors.fontColorBright
  }
});
