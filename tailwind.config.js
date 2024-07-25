/** @type {import('tailwindcss').Config} */

// import espresso Beans Design System object for Tailwind
// need full relative path here for design system, can't use alias
import { ColorsTW } from './espressoBeans/v1/styles/color';
import { FontsTW } from './espressoBeans/v1/styles/typography';
import { LayoutTW } from './espressoBeans/v1/styles/layout';

module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    // espressoBeans color styles
    colors: ColorsTW,

    extend: {
      // espressoBeans typography styles
      fontFamily: FontsTW.typeface,
      fontSize: FontsTW.typescales,

      // espressBeans layout styles
      padding: LayoutTW.padding,
      margin: LayoutTW.margin,
      maxWidth: LayoutTW.maxWidth,

      transitionProperty: {
        height: 'height',
        flex: 'flex',
      },
      animation: {
        wave: 'wave 3s cubic-bezier(.36,.45,.63,.53) infinite',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': {
            left: 0,
          },
          '100%': {
            left: '-600px',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
};
