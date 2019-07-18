import React from 'react';
import styled from '@emotion/styled-base';
import { Logo } from '../../atoms/logo/logo';
import { Navigation } from '../../molecules/navigation/navigation';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';

export const Header: React.SFC = () => (
  <FullWidthContainer>
    <HeaderContainer>
      <LogoContainer>
        <Logo height={81} />
      </LogoContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </HeaderContainer>
  </FullWidthContainer>
);

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const NavigationContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1
});

const HeaderContainer = styled('div')({
  display: 'flex',
  height: '130px'
});
