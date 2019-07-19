import React from 'react';
import { TeaserContainer } from '../../atoms/teaserContainer/teaserContainer';
import { Heading } from '../../atoms/heading/heading';
import { Button } from '../../atoms/button/button';
import i18n from '../../utility/i18n';
import styled from '@emotion/styled';

export const HeroTeaser: React.SFC = () => (
  <TeaserContainer
    emotionStyles={{ backgroundImage: "url('assets/hero-1.png')" }}
  >
    <Heading style={{ color: 'white' }}>
      Freiberuflicher Full Stack Entwickler <br /> TypeScript, React, Node.js
    </Heading>

    <ButtonContainer>
      <InnerButtonContainer>
        <Button invert>{i18n.t('general.contactCta')}</Button>
      </InnerButtonContainer>
      <InnerButtonContainer>
        <Button invert>{i18n.t('general.projectsCta')}</Button>
      </InnerButtonContainer>
    </ButtonContainer>
  </TeaserContainer>
);

const ButtonContainer = styled('div')({ display: 'flex' });
const InnerButtonContainer = styled('div')({
  marginRight: '10px',
  '&:last-child': {
    marginRight: '0px'
  }
});
