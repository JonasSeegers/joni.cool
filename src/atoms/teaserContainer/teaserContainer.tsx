import React from 'react';
import styled from '@emotion/styled';
import { FullWidthContainer } from '../fullWidthContainer/fullWidthContainer';
import { CSSProperties } from '@emotion/serialize';
import { Breakpoints } from '../../constants/style';

interface TeaserContainerProps {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}

export const TeaserContainer: React.SFC<TeaserContainerProps> = props => (
  <FullWidthContainer emotionStyles={fullWidthContainertStyles}>
    <TeaserContainerContainer {...props} />
  </FullWidthContainer>
);

const fullWidthContainertStyles: CSSProperties = {
  [`@media (max-width: ${Breakpoints.smallComputer}px)`]: {
    padding: '0px'
  }
};

const TeaserContainerContainer = styled('div')(
  ({ emotionStyles }: TeaserContainerProps) => ({
    padding: '75px 40px',
    [`@media (max-width: ${Breakpoints.mobile}px)`]: {
      padding: '40px'
    },
    ...emotionStyles
  })
);
