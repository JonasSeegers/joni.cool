import React from 'react';
import styled from '@emotion/styled-base';
import { Header } from './organisms/header/header';
import { HeroTeaser } from './organisms/heroTeaser/heroTeaser';
import { CategoryHeader } from './molecules/categoryHeader/categoryHeader';
import i18next from 'i18next';
import { Projects } from './organisms/projects/projects';
import { Cv } from './organisms/cv/cv';
import { Contact } from './organisms/contact/contact';
import { Footer } from './organisms/footer/footer';
import { Imprint } from './organisms/imprint/imprint';
import { Global } from '@emotion/core';

export const App: React.SFC = () => (
  <AppContainer>
    <Header />
    <HeroTeaser />

    <CategoryHeader id="cat-projects">
      {i18next.t('navigation.projects')}
    </CategoryHeader>
    <Projects />

    <CategoryHeader id="cat-cv">{i18next.t('navigation.cv')}</CategoryHeader>
    <Cv />

    <CategoryHeader id="cat-contact">
      {i18next.t('navigation.contact')}
    </CategoryHeader>
    <Contact />

    <CategoryHeader id="cat-imprint">
      {i18next.t('navigation.imprint')}
    </CategoryHeader>
    <Imprint />

    <Footer />

    <Global styles={{ body: { overflowX: 'hidden' } }} />
  </AppContainer>
);

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});
