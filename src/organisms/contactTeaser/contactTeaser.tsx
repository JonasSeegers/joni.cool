import React from 'react';
import { TeaserContainer } from '../../atoms/teaserContainer/teaserContainer';
import { Heading } from '../../atoms/heading/heading';
import i18n from '../../utility/i18n';
import { Link } from '../../atoms/link/Link';
import { Colors, Fonts, Breakpoints } from '../../constants/style';

export const ContactTeaser: React.SFC = () => (
  <TeaserContainer
    emotionStyles={{ backgroundImage: "url('assets/hero-2.png')" }}
  >
    <Heading style={{ color: 'white', marginBottom: '0px' }}>
      {i18n.t('contact.headline')} <br />
      <Link
        to="mailto:moin@joni.cool"
        emotionStyles={{
          color: Colors.fontColorBright,
          fontSize: Fonts.headingFontSize,
          [`@media (max-width: ${Breakpoints.mobile}px)`]: {
            fontSize: Fonts.headingFontSizeMobile,
            lineHeight: '36px'
          }
        }}
      >
        moin@joni.cool
      </Link>
    </Heading>
  </TeaserContainer>
);
