import React from 'react';
import styled from '@emotion/styled';
import { Subheading } from '../../atoms/subheading/subheading';
import { HorizontalLine } from '../../atoms/horizontalLine/horizontalLine';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { Fonts } from '../../constants/style';

interface CategoryHeaderProps {
  id?: string;
}

export const CategoryHeader: React.SFC<CategoryHeaderProps> = props => (
  <CategoryHeaderComponent id={props.id}>
    <FullWidthContainer emotionStyles={containerStyles}>
      <Subheading>{props.children}</Subheading>
    </FullWidthContainer>
    <HorizontalLine />
  </CategoryHeaderComponent>
);

const CategoryHeaderComponent = styled('div')({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '30px',
  marginBottom: '20px',
  '@media (max-width: 420px)': {
    margin: '20px 0px',
    '& h2': {
      paddingLeft: '30px'
    }
  }
});

const containerStyles = {
  marginBottom: '15px'
};
