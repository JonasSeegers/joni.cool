import styled from '@emotion/styled-base';
import React from 'react';
import { Colors } from '../../constants/style';

export const BurgerMenuItem: React.SFC = ({ children }) => (
  <ItemContainer>{children}</ItemContainer>
);

const ItemContainer = styled('div')({
  '&:not(:last-child)': { borderBottom: `1px solid ${Colors.lineColor}` },
  padding: '15px 10px',
  display: 'flex',
  justifyContent: 'center'
});
