import React from 'react';
import styled from '@emotion/styled-base';
import { Header } from './organisms/header/header';
import { HeroTeaser } from './organisms/heroTeaser/heroTeaser';
import { CategoryHeader } from './molecules/categoryHeader/categoryHeader';
import i18next from 'i18next';
import { Projects } from './organisms/projects/projects';

export const App: React.SFC = () => (
  <AppContainer>
    <Header />
    <HeroTeaser />

    <CategoryHeader id="cat-projects">
      {i18next.t('navigation.projects')}
    </CategoryHeader>
    <Projects />

    <CategoryHeader id="cat-cv">{i18next.t('navigation.cv')}</CategoryHeader>
    <CategoryHeader id="cat-contact">
      {i18next.t('navigation.contact')}
    </CategoryHeader>
    <CategoryHeader id="cat-imprint">
      {i18next.t('navigation.imprint')}
    </CategoryHeader>
  </AppContainer>
);

const AppContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});
