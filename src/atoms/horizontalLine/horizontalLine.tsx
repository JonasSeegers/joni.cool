import React from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../constants/style';

export const HorizontalLine: React.SFC = () => <StyledHr />;

const StyledHr = styled('hr')({
  borderTop: `0.02pt solid ${Colors.lineColor}`,
  width: '100%',
  margin: '0px'
});
