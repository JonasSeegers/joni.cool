import React from 'react';
import { Button } from '../atoms/button/button';
import styled from '@emotion/styled';

export const Navigation: React.SFC = () => {
  return (
    <StyledUl>
      <StyledLi>
        <Button>Projekte</Button>
      </StyledLi>
      <StyledLi>
        <Button>Projekte</Button>
      </StyledLi>
      <StyledLi>
        <Button>Projekte</Button>
      </StyledLi>
      <StyledLi>
        <Button>Projekte</Button>
      </StyledLi>
    </StyledUl>
  );
};

const StyledUl = styled('ul')({});
const StyledLi = styled('li')({
  display: 'inline',
  marginRight: '10px',
  '&:last-child': {
    marginRight: '0px'
  }
});
