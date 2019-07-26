import React from 'react';
import styled from '@emotion/styled';
import { Fonts, Colors } from '../../constants/style';

export const InlineText: React.SFC = props => <StyledSpan {...props} />;

const StyledSpan = styled('span')({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.defaultFontSize,
  color: Colors.fontColorDark
});
