import React from 'react';
import { ContactTeaser } from '../contactTeaser/contactTeaser';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import i18n from '../../utility/i18n';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';

export const Contact: React.SFC = props => (
  <React.Fragment>
    <FullWidthContainer style={{ marginBottom: '15px' }}>
      <Paragraph>{i18n.t('contact.text')}</Paragraph>
    </FullWidthContainer>
    <ContactTeaser />
  </React.Fragment>
);
