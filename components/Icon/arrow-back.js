import React from 'react';

const BackArrow = ({ width = 24, height = 24, colorFill = '#5697FA', className }) => (
  <svg className={className} width={width} height={height} fillRule="evenodd" clipRule="evenodd" viewBox="-10 -6 36 36" fill={colorFill}>
    <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
  </svg>
);

export default BackArrow;
