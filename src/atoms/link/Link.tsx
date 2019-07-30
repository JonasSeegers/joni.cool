import * as React from 'react';
import styled from '@emotion/styled';
import { Styleable } from '../../utility/types';
import { Colors, Fonts } from '../../constants/style';

interface LinkProps extends Styleable {
  to?: string;
  target?: string;
  onClick?(): void;
}

export const Link: React.SFC<LinkProps> = (props: LinkProps) => (
  <StyledA href={props.to} target="" {...props} />
);

const StyledA = styled('a')(({ emotionStyles }: Styleable) => ({
  color: Colors.fontColorDark,
  fontSize: Fonts.defaultFontSize,
  fontFamily: Fonts.fontFamily,
  textDecoration: 'underline',
  cursor: 'pointer', // this will make sure the cursor is a pointer even when there is no href defined
  '&:hover': {
    textDecoration: 'none'
  },
  ...emotionStyles
}));
