import React from 'react';
import { Button } from '../../atoms/button/button';
import styled from '@emotion/styled';
import i18n from '../../utility/i18n';
import { ScrollingService } from '../../services/scrollingService';
import { CategoryIds } from '../../constants/ids';

export const Navigation: React.SFC = () => (
  <StyledUl>
    <StyledLi>
      <Button
        onClick={() => ScrollingService.scrollIntoView(CategoryIds.projects)}
      >
        {i18n.t('navigation.projects')}
      </Button>
    </StyledLi>
    <StyledLi>
      <Button onClick={() => ScrollingService.scrollIntoView(CategoryIds.cv)}>
        {i18n.t('navigation.cv')}
      </Button>
    </StyledLi>
    <StyledLi>
      <Button
        onClick={() => ScrollingService.scrollIntoView(CategoryIds.contact)}
      >
        {i18n.t('navigation.contact')}
      </Button>
    </StyledLi>
    <StyledLi>
      <Button
        onClick={() => ScrollingService.scrollIntoView(CategoryIds.imprint)}
      >
        {i18n.t('navigation.imprint')}
      </Button>
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
