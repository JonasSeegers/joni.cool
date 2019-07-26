import React, { useState, useEffect } from 'react';

interface BreakpointProps {
  minWidth?: number;
  maxWidth?: number;
  // you can, of course, call the function as a child of Breakpoint. However, this will lead to the function being called
  // although the resulting ReactNode doesn't get rendered. By using this prop, it will be evaluated if the function needs
  // to be called for the current screen size
  renderFunction?(): React.ReactNode;
}

const screenWidth = () => window.innerWidth;

export const Breakpoint: React.SFC<BreakpointProps> = ({
  children,
  renderFunction,
  maxWidth,
  minWidth
}) => {
  if (renderFunction && children) {
    console.warn(
      `Found breakpoint with renderFunction and children ${JSON.stringify(
        children
      )}. Note that the children will be ignored`
    );
  }

  const [width, setWidth] = useState(screenWidth);

  // this is highly inspired by https://github.com/contra/react-responsive/
  useEffect(() => {
    const callback = () => {
      if (width !== screenWidth()) {
        // this check is done to prevent unnecessary reloads
        setWidth(screenWidth());
      }
    };

    window.addEventListener('resize', callback);

    return () => window.removeEventListener('resize', callback);
  });

  if (!shouldElementBeRendered({ maxWidth, minWidth }, width)) {
    return null;
  }

  if (renderFunction) {
    return <>{renderFunction()}</>;
  }

  return <>{children}</>;
};

const shouldElementBeRendered = (
  { maxWidth, minWidth }: BreakpointProps,
  currWidth: number
) => {
  if (isNumber(maxWidth) && isNumber(minWidth)) {
    return currWidth <= maxWidth && currWidth >= minWidth;
  }

  if (isNumber(maxWidth)) {
    return currWidth <= maxWidth;
  }

  if (isNumber(minWidth)) {
    return currWidth >= minWidth;
  }

  // if neither maxWidth nor minWidth are defined, just render the element
  return true;
};

/**
 * This utility function helps to find out if the given parameter is a defined number. You can't just use isNaN, because
 * isNaN(null) === false
 * @param n
 */
const isNumber = (n: unknown): n is number => n !== null && !isNaN(n as number);
