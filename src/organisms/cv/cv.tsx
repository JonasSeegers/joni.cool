import React from 'react';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import i18n from '../../utility/i18n';
import { Button } from '../../atoms/button/button';
import styled from '@emotion/styled';

export const Cv: React.SFC = () => (
  <FullWidthContainer>
    <Paragraph>{i18n.t('cv.text')}</Paragraph>
    <ButtonContainer>
      <Button
        onClick={() => window.open('data/cv_jonas_seegers.pdf', '_blank')}
      >
        {i18n.t('cv.downloadCta')}
      </Button>
    </ButtonContainer>
  </FullWidthContainer>
);

const ButtonContainer = styled('div')({
  marginTop: '20px'
});
