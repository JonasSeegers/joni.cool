import React from 'react';
import styled from '@emotion/styled';
import { Fonts } from '../../constants/style';

export const Heading: React.SFC = props => {
  const { children } = props;

  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled('h1')({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.headingFontSize,
  fontWeight: Fonts.fontWeightBold,
  marginBottom: '40px',
  lineHeight: '50px'
});
