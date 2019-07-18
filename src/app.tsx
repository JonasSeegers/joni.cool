import React from 'react';
import { Button } from './atoms/button/button';
import { Heading } from './atoms/heading/heading';
import styled from '@emotion/styled-base';
import { Header } from './organisms/header/header';
import { HeroTeaser } from './atoms/heroTeaser/heroTeaser';
import i18n from './utility/i18n';

export const App: React.SFC = () => (
  <AppContainer>
    <Header />
    <HeroTeaser emotionStyles={{ backgroundImage: "url('assets/hero-1.png')" }}>
      <Heading style={{ color: 'white' }}>
        Freiberuflicher Full Stack Entwickler <br /> TypeScript, React, Node.js
      </Heading>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10px' }}>
          <Button invert>{i18n.t('general.contactCta')}</Button>
        </div>
        <div>
          <Button invert>{i18n.t('general.projectsCta')}</Button>
        </div>
      </div>
    </HeroTeaser>
  </AppContainer>
);

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});
