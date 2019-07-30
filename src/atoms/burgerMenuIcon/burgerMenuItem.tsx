import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

interface BurgerMenuIconProps {
  isOpen?: boolean;
  onClick?(): void;
}

export const BurgerMenuIcon: React.SFC<BurgerMenuIconProps> = ({
  isOpen,
  onClick
}) => (
  <IconContainer onClick={onClick}>
    {isOpen ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : (
      <FontAwesomeIcon icon={faBars} />
    )}
  </IconContainer>
);

const IconContainer = styled('div')({
  cursor: 'pointer'
});
