import React from 'react';
import styled from '@emotion/styled-base';
import { Fonts } from '../../constants/style';
import { Styleable } from '../../utility/types';

interface ParagraphProps extends Styleable {}

export const Paragraph: React.SFC<ParagraphProps> = props => (
  <StyledParagraph {...props} />
);

const StyledParagraph = styled('p')(({ emotionStyles }: ParagraphProps) => ({
  fontFamily: Fonts.fontFamily,
  fontSize: Fonts.defaultFontSize,
  lineHeight: '20px',
  ...emotionStyles
}));
