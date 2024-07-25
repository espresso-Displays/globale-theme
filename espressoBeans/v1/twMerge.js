import {FontsTW} from './styles/typography/index';
import {extendTailwindMerge} from 'tailwind-merge';

const textStyles = Object.keys(FontsTW.typescales).map(
  (style) => 'text-' + style,
);

const twMerge = extendTailwindMerge({
  classGroups: {
    'line-height': textStyles,
  },
});

export {twMerge};
