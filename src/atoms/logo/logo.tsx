import React from 'react';

interface LogoProps {
  height?: number;
  width?: number;
}

export const Logo: React.SFC<LogoProps> = props => (
  <object data="assets/logo.svg" type="image/svg+xml" {...props}>
    {/* TODO: i18n here */}
    leider können keine vektoren angezeigt werden
  </object>
);
