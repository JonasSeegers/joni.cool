import React from 'react';
import { Button } from './atoms/button/button';
import { Heading } from './atoms/heading/heading';
import { Navigation } from './molecules/navigation';

export const App: React.SFC = () => (
  <div>
    <Navigation />
    <Heading>
      Freiberuflicher Full Stack Entwickler
      <br />
      TypeScript, React, Node.js
    </Heading>
    <Button>Button</Button>
  </div>
);
