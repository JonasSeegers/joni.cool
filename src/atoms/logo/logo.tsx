import React from 'react';
import { Styleable } from '../../utility/types';
import styled from '@emotion/styled';
import i18n from '../../utility/i18n';

interface LogoProps extends Styleable {
  height?: number;
  width?: number;
}

export const Logo: React.SFC<LogoProps> = props => (
  <StyledObject data="assets/logo.svg" type="image/svg+xml" {...props}>
    {i18n.t('general.noSvg')}
  </StyledObject>
);

const StyledObject = styled('object')(({ emotionStyles }: Styleable) => ({
  ...emotionStyles
}));
