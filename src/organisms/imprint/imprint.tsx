import React from 'react';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import i18n from '../../utility/i18n';
import { Link } from '../../atoms/link/Link';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { InlineText } from '../../atoms/text/text';

export const Imprint: React.SFC = () => (
  <FullWidthContainer>
    <Paragraph>
      Jonas Seegers <br />
      {i18n.t('imprint.developer')} <br />
      Wrangelstraße 71c <br />
      20253 Hamburg <br />
    </Paragraph>

    <br />

    <Paragraph>
      {i18n.t('imprint.phoneNumber')}: 0172/3684278 <br />{' '}
      {i18n.t('imprint.email')}:{' '}
      <Link to="mailto:moin@joni.cool">moin@joni.cool</Link>
    </Paragraph>

    <br />

    <Paragraph>
      {i18n.t('imprint.credits.photographs')}:<br />
      {i18n.t('imprint.credits.heroTeaser')}:{' '}
      {createUnsplashLink(
        'Florian Olivo',
        'https://unsplash.com/@rxspawn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      )}
      <br />
      {i18n.t('imprint.credits.mailTeaser')}:{' '}
      {createUnsplashLink(
        'Mathyas Kurmann',
        'https://unsplash.com/@mathyaskurmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      )}
    </Paragraph>
  </FullWidthContainer>
);

const createUnsplashLink = (name: string, url: string) => (
  <InlineText>
    Photo by{' '}
    <Link target="_blank" to={url}>
      {name}
    </Link>{' '}
    on{' '}
    <Link target="_blank" to={url}>
      Unsplash
    </Link>
  </InlineText>
);
