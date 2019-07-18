import React from 'react';
import styled from '@emotion/styled';
import { FullWidthContainer } from '../fullWidthContainer/fullWidthContainer';
import { CSSProperties } from '@emotion/serialize';

interface HeroTeaserProps {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}

export const HeroTeaser: React.SFC<HeroTeaserProps> = props => (
  <FullWidthContainer>
    <HeroTeaserContainer {...props} />
  </FullWidthContainer>
);

const HeroTeaserContainer = styled('div')(
  ({ emotionStyles }: HeroTeaserProps) => ({
    backgroundColor: 'papayawhip',
    padding: '75px 40px',
    ...emotionStyles
  })
);
