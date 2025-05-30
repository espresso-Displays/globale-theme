import { extendTailwindMerge } from 'tailwind-merge';
import { FontsTW } from './styles/typography/index';

const textStyles = Object.keys(FontsTW.typescales).map((style) => 'text-' + style);

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': textStyles,
    },
  },
});

export { twMerge };
