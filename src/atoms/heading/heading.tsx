import React from 'react';
import styled from '@emotion/styled';
import { Fonts } from '../../constants/style';
import { Styleable } from '../../utility/types';

interface HeadingProps extends Styleable {}

export const Heading: React.SFC<HeadingProps> = props => (
  <StyledHeading {...props} />
);

const StyledHeading = styled('h1')(({ emotionStyles }: HeadingProps) => ({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.headingFontSize,
  fontWeight: Fonts.fontWeightBold,
  marginBottom: '40px',
  lineHeight: '50px',
  '@media (max-width: 500px)': {
    fontSize: Fonts.headingFontSizeMobile,
    lineHeight: '36px'
  },
  ...emotionStyles
}));
