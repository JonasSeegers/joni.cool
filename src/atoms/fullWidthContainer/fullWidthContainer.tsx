import React from 'react';
import styled from '@emotion/styled';
import { CSSProperties } from '@emotion/serialize';
import { Breakpoints } from '../../constants/style';

interface FullWidthContainerProps {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}

export const FullWidthContainer: React.SFC<FullWidthContainerProps> = props => (
  <StyledContainer {...props} />
);

const StyledContainer = styled.div(
  ({ emotionStyles }: FullWidthContainerProps) => ({
    width: '100%',
    maxWidth: `${Breakpoints.smallComputer}px`,
    boxSizing: 'border-box',
    [`@media (max-width: ${Breakpoints.smallComputer}px)`]: {
      padding: '0px 40px'
    },
    ...emotionStyles
  })
);
