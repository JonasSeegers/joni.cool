import React, { useState } from 'react';
import styled from '@emotion/styled-base';
import { Logo } from '../../atoms/logo/logo';
import { Navigation } from '../navigation/navigation';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { Breakpoint } from '../../utility/responsive';
import { BurgerMenuIcon } from '../../atoms/burgerMenuIcon/burgerMenuItem';
import { BurgerMenuItem } from '../../atoms/burgerMenuItem/burgerMenuItem';
import i18n from '../../utility/i18n';
import { Link } from '../../atoms/link/Link';
import { Breakpoints } from '../../constants/style';

export const Header: React.SFC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FullWidthContainer>
        <HeaderContainer>
          <LogoContainer>
            <Logo
              height={81}
              emotionStyles={{
                height: '81px',
                [`@media (max-width: ${Breakpoints.tablet}px)`]: {
                  height: '40px'
                }
              }}
            />
            {/* <Logo height={40} /> */}
          </LogoContainer>
          <NavigationContainer>
            <Breakpoint minWidth={Breakpoints.tablet + 1}>
              <Navigation />
            </Breakpoint>
            <Breakpoint maxWidth={Breakpoints.tablet}>
              <BurgerMenuIcon
                isOpen={isMenuOpen}
                onClick={() => setMenuOpen(!isMenuOpen)}
              />
            </Breakpoint>
          </NavigationContainer>
        </HeaderContainer>
      </FullWidthContainer>

      {isMenuOpen && (
        <MobileNavigationContainer>
          <BurgerMenuItem>
            <Link>{i18n.t('navigation.projects')}</Link>
          </BurgerMenuItem>
          <BurgerMenuItem>
            <Link>{i18n.t('navigation.cv')}</Link>
          </BurgerMenuItem>
          <BurgerMenuItem>
            <Link>{i18n.t('navigation.contact')}</Link>
          </BurgerMenuItem>
          <BurgerMenuItem>
            <Link>{i18n.t('navigation.imprint')}</Link>
          </BurgerMenuItem>
        </MobileNavigationContainer>
      )}
    </>
  );
};

const MobileNavigationContainer = styled('div')({
  border: `1px solid black`,
  borderWidth: '3px  0px 3px 0px',
  width: '100vw'
});

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

const HeaderContainer = styled('header')({
  display: 'flex',
  height: '130px',
  [`@media (max-width: ${Breakpoints.tablet}px)`]: {
    height: '60px'
  },
  '@media (max-width: 400px)': {
    padding: '0px 30px'
  }
});
