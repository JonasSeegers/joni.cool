import React from 'react';
import { Styleable } from '../../utility/types';
import styled from '@emotion/styled';
import { Breakpoints } from '../../constants/style';

interface LogoProps extends Styleable {
  height?: number;
  width?: number;
}

export const Logo = styled.div({
  backgroundImage: `url(assets/logo.svg)`,
  height: '40px',
  width: '100px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [`@media (min-width: ${Breakpoints.tablet}px)`]: { height: '81px' },
});

const StyledDiv = styled.div({
  background: `url(assets/logo.svg)`,
});

const StyledObject = styled('object')(({ emotionStyles }: Styleable) => ({
  ...emotionStyles,
  backgroundColor: 'red',
}));
