import styled from '@emotion/styled';
import React from 'react';
import i18n from '../../utility/i18n';
import { Link } from '../../atoms/link/Link';
import { Colors, Breakpoints } from '../../constants/style';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { InlineText } from '../../atoms/text/text';
import { Breakpoint } from '../../utility/responsive';

export const Footer: React.SFC = () => (
  <FooterContainer>
    <FullWidthContainer style={fullWidthContainerStyles}>
      <LeftContainer>
        <StyledUl>
          <StyledLi>
            <Link>{i18n.t('footer.backToTop')}</Link>
          </StyledLi>
          <Breakpoint minWidth={Breakpoints.smallComputer}>
            <StyledLi>
              <Link>{i18n.t('navigation.projects')}</Link>
            </StyledLi>
            <StyledLi>
              <Link>{i18n.t('navigation.cv')}</Link>
            </StyledLi>
            <StyledLi>
              <Link>{i18n.t('navigation.contact')}</Link>
            </StyledLi>
            <StyledLi>
              <Link>{i18n.t('navigation.imprint')}</Link>
            </StyledLi>
          </Breakpoint>
        </StyledUl>
      </LeftContainer>

      <RightContainer>
        <InlineText>
          {`${i18n.t('footer.mail1')} `}
          <Link to="mailto:moin@joni.cool">moin@joni.cool</Link>
          {` ${i18n.t('footer.mail2')}`}
        </InlineText>
      </RightContainer>
    </FullWidthContainer>
  </FooterContainer>
);

const fullWidthContainerStyles: React.CSSProperties = {
  display: 'flex'
};

const StyledLi = styled('li')({
  display: 'inline  '
});

const StyledUl = styled('ul')({
  '& li': {
    '&:not(:last-child)': {
      marginRight: '20px'
    }
  }
});

const LeftContainer = styled('div')({ display: 'flex', flex: 1 });

const RightContainer = styled('div')({});

const FooterContainer = styled('footer')({
  width: '100vw',
  padding: '20px 0px',
  marginTop: '40px',
  borderTop: `1px solid ${Colors.lineColor}`,
  display: 'flex',
  justifyContent: 'center'
});
