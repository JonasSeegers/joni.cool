import React from 'react';
import styled from '@emotion/styled';

export const Subheading: React.SFC = props => {
  const { children } = props;

  return <StyledSubheading>{children}</StyledSubheading>;
};

const StyledSubheading = styled('h2')({});
