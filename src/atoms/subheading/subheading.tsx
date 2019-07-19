import React from 'react';
import styled from '@emotion/styled';
import { Fonts } from '../../constants/style';

export const Subheading: React.SFC = props => <StyledSubheading {...props} />;

const StyledSubheading = styled('h2')({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.subHeadingFontSize,
  fontWeight: Fonts.fontWeightBold
});
