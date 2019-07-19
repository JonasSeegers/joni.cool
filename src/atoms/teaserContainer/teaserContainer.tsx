import React from 'react';
import styled from '@emotion/styled';
import { FullWidthContainer } from '../fullWidthContainer/fullWidthContainer';
import { CSSProperties } from '@emotion/serialize';

interface TeaserContainerProps {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}

export const TeaserContainer: React.SFC<TeaserContainerProps> = props => (
  <FullWidthContainer>
    <TeaserContainerContainer {...props} />
  </FullWidthContainer>
);

const TeaserContainerContainer = styled('div')(
  ({ emotionStyles }: TeaserContainerProps) => ({
    backgroundColor: 'papayawhip',
    padding: '75px 40px',
    ...emotionStyles
  })
);
