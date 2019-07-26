import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from '@emotion/styled';

interface BurgerMenuIconProps {
  isOpen?: boolean;
  iconSize?: number;
  onClick?(): void;
}

export const BurgerMenuIcon: React.SFC<BurgerMenuIconProps> = ({
  isOpen,
  iconSize = 22,
  onClick
}) => {
  return (
    <IconContainer onClick={onClick}>
      {isOpen ? <FaTimes size={iconSize} /> : <FaBars size={iconSize} />}
    </IconContainer>
  );
};

const IconContainer = styled('div')({
  cursor: 'pointer'
});
