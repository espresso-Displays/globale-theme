/** @type {import('tailwindcss').Config} */

// import espresso Beans Design System object for Tailwind
// need full relative path here for design system, can't use alias
import { ColorsTW } from './espressoBeans/v1/styles/color';
import { FontsTW } from './espressoBeans/v1/styles/typography';
import { LayoutTW } from './espressoBeans/v1/styles/layout';

module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    screens: {
      // need to add custom breakpoint names for espressoBeans Design system breakpoints
      // to not lose the standard Tailwind breakpoints, we need to explicitely add them here
      // and add the espressoBeans breakpoints as well
      // using theme extend to add espressoBeans breakpoints, would add the new breakpoints to the end of the list, and then the breakpoint order would not be correct
      // so need to do it this way

      // eb custom breakpoints - mobile-small
      // 'mobile-small': // less than 375, but no need for a definition for this

      // eb custom breakpoints - mobile
      mobile: '375px',

      // tailwind standard breakpoints - sm
      sm: '640px',

      // tailwind standard breakpoints - md
      md: '768px',

      // tailwind standard breakpoints - lg
      lg: '1024px',

      // eb custom breakpoints - desktop-small
      'desktop-small': '1024px',

      // tailwind standard breakpoints - xl
      xl: '1280px',

      // eb custom breakpoints - desktop
      desktop: '1280px',

      // tailwind standard breakpoints - 2xl
      '2xl': '1536px',

      // eb custom breakpoints - desktop-large
      'desktop-large': '1800px',
    },

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

      height: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-bottom))',
      },

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
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/container-queries')],
};
