import React from 'react';
import { Button } from '../../atoms/button/button';
import styled from '@emotion/styled';
import i18n from '../../utility/i18n';

export const Navigation: React.SFC = () => (
  <StyledUl>
    <StyledLi>
      <Button>{i18n.t('navigation.projects')}</Button>
    </StyledLi>
    <StyledLi>
      <Button>{i18n.t('navigation.cv')}</Button>
    </StyledLi>
    <StyledLi>
      <Button>{i18n.t('navigation.contact')}</Button>
    </StyledLi>
    <StyledLi>
      <Button>{i18n.t('navigation.imprint')}</Button>
    </StyledLi>
  </StyledUl>
);

const StyledUl = styled('ul')({});
const StyledLi = styled('li')({
  display: 'inline',
  marginRight: '10px',
  '&:last-child': {
    marginRight: '0px'
  }
});
