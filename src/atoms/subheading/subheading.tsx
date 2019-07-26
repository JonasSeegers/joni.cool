import React from 'react';
import styled from '@emotion/styled';
import { Fonts } from '../../constants/style';
import { Styleable } from '../../utility/types';

interface SubheadingProps extends Styleable {}

export const Subheading: React.SFC<SubheadingProps> = props => (
  <StyledSubheading {...props} />
);

const StyledSubheading = styled('h2')(({ emotionStyles }: Styleable) => ({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.subHeadingFontSize,
  fontWeight: Fonts.fontWeightBold,
  '@media (max-width: 500px)': {
    fontSize: Fonts.subHeadingFontSizeMobile
  },
  ...emotionStyles
}));
