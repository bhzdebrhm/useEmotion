import { Global } from '@emotion/react'
import React from 'react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'IRANYekan';
        font-style: normal;
        font-weight: 700;
        font-display: swap; 
        src: url('../../assets/fonts/iranYekan/iranyekanwebbold.woff2') format('woff2');
      }
      @font-face {
        font-family: 'IRANYekan';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../assets/fonts/iranYekan/iranyekanwebregular.woff2') format('woff2');
      }
      `}
  />
)
