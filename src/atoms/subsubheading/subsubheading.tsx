import React from 'react';
import styled from '@emotion/styled';
import { Fonts } from '../../constants/style';

export const SubSubHeading: React.SFC = props => (
  <StyledSubSubHeading {...props} />
);

const StyledSubSubHeading = styled('h3')({
  fontSize: Fonts.subSubHeadingFontSize,
  fontFamily: Fonts.fontFamily,
  fontWeight: Fonts.fontWeightBold,
  marginBottom: '10px'
});
