import React from 'react';
import styled from '@emotion/styled';
import { CSSProperties } from '@emotion/serialize';

interface FullWidthContainerProps {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}

export const FullWidthContainer: React.SFC<FullWidthContainerProps> = props => (
  <StyledContainer {...props} />
);

const StyledContainer = styled.div((props: FullWidthContainerProps) => ({
  width: '100%',
  maxWidth: '940px',
  ...props.emotionStyles
}));
