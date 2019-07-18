import React from 'react';
import { CSSProperties } from '@emotion/serialize';

export interface Styleable {
  style?: React.CSSProperties;
  emotionStyles?: CSSProperties;
}
