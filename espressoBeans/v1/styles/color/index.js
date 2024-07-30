// See the following link for the official espresso Colour System
// https://coda.io/d/Espresso-Design-System_dHtL-ZWhKM0/Colors_suQW8#_luZfF

// ///////////////////////////////
// color style definitions
// ///////////////////////////////

const palette = {
  'es-ref-palette-primary00': '#000000',
  'es-ref-palette-primary0': '#111111',
  'es-ref-palette-primary10': '#130820',
  'es-ref-palette-primary20': '#30134F',
  'es-ref-palette-primary30': '#4B1E7B',
  'es-ref-palette-primary40': '#60269E',
  'es-ref-palette-primary50': '#7D31CE',
  'es-ref-palette-primary60': '#975BD7',
  'es-ref-palette-primary70': '#B184E1',
  'es-ref-palette-primary80': '#CBADEB',
  'es-ref-palette-primary90': '#E5D6F5',
  'es-ref-palette-primary100': '#FAFAFA',
  'es-ref-palette-primary101': '#FFFFFF',

  'es-ref-palette-secondary00': '#000000',
  'es-ref-palette-secondary0': '#111111',
  'es-ref-palette-secondary10': '#891F10',
  'es-ref-palette-secondary20': '#B64C3D',
  'es-ref-palette-secondary30': '#CF5543',
  'es-ref-palette-secondary40': '#EA5D49',
  'es-ref-palette-secondary50': '#EF8576',
  'es-ref-palette-secondary60': '#F19386',
  'es-ref-palette-secondary70': '#F4ADA4',
  'es-ref-palette-secondary80': '#F8C9C2',
  'es-ref-palette-secondary90': '#FCEBE8',
  'es-ref-palette-secondary100': '#FAFAFA',
  'es-ref-palette-secondary101': '#FFFFFF',

  // 'es-ref-palette-tertiary101': '#FFFFFF',
  // 'es-ref-palette-tertiary100': '#FAFAFA',
  // 'es-ref-palette-tertiary80': '#E5FF99',
  // 'es-ref-palette-tertiary60': '#D9FF66',
  // 'es-ref-palette-tertiary40': '#CCFF33',
  // 'es-ref-palette-tertiary20': '#91C200',
  // 'es-ref-palette-tertiary0': '#111111',
  // 'es-ref-palette-tertiary00': '#000000',

  'es-ref-palette-neutral00': '#000000',
  'es-ref-palette-neutral0': '#111111',
  'es-ref-palette-neutral10': '#1A1A1A',
  'es-ref-palette-neutral20': '#303030',
  'es-ref-palette-neutral30': '#4D4D4D',
  'es-ref-palette-neutral40': '#5A5A5A',
  'es-ref-palette-neutral50': '#808080',
  'es-ref-palette-neutral60': '#ACACAC',
  'es-ref-palette-neutral70': '#BFBFBF',
  'es-ref-palette-neutral80': '#DCDCDC',
  'es-ref-palette-neutral90': '#F0F0F0',
  'es-ref-palette-neutral100': '#FAFAFA',
  'es-ref-palette-neutral101': '#FFFFFF',

  'es-ref-palette-error00': '#000000',
  'es-ref-palette-error0': '#111111',
  'es-ref-palette-error40': '#B3261E',
  'es-ref-palette-error100': '#FAFAFA',
  'es-ref-palette-error101': '#FFFFFF',

  'es-ref-palette-transparent': '#FFffFF00',
};

const color_system = {
  'es-sys-color-lm-primary': palette['es-ref-palette-primary40'],
  'es-sys-color-lm-on-primary': palette['es-ref-palette-primary101'],
  'es-sys-color-lm-primary-hover': palette['es-ref-palette-primary50'],
  'es-sys-color-lm-primary-click': palette['es-ref-palette-primary60'],

  'es-sys-color-lm-inverse-primary': palette['es-ref-palette-primary101'],
  'es-sys-color-lm-inverse-on-primary': palette['es-ref-palette-primary40'],
  'es-sys-color-lm-inverse-primary-hover': palette['es-ref-palette-primary90'],
  'es-sys-color-lm-inverse-primary-click': palette['es-ref-palette-primary80'],
  'es-sys-color-lm-outline-primary': palette['es-ref-palette-primary40'],

  'es-sys-color-lm-secondary': palette['es-ref-palette-secondary40'],
  'es-sys-color-lm-secondary-hover': palette['es-ref-palette-secondary30'],
  'es-sys-color-lm-secondary-click': palette['es-ref-palette-secondary20'],

  'es-sys-color-lm-on-secondary': palette['es-ref-palette-secondary100'],
  'es-sys-color-lm-on-secondary-hover': palette['es-ref-palette-secondary00'],

  'es-sys-color-lm-inverse-secondary': palette['es-ref-palette-secondary101'],
  'es-sys-color-lm-inverse-on-secondary': palette['es-ref-palette-secondary40'],
  'es-sys-color-lm-inverse-secondary-hover': palette['es-ref-palette-secondary90'],
  'es-sys-color-lm-inverse-secondary-click': palette['es-ref-palette-secondary80'],
  'es-sys-color-lm-outline-secondary': palette['es-ref-palette-secondary40'],

  'es-sys-color-lm-neutral': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-on-neutral': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-neutral-hover': palette['es-ref-palette-neutral10'],
  'es-sys-color-lm-neutral-click': palette['es-ref-palette-neutral30'],

  'es-sys-color-lm-inverse-neutral': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-inverse-on-neutral': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-inverse-neutral-hover': palette['es-ref-palette-neutral90'],
  'es-sys-color-lm-inverse-neutral-click': palette['es-ref-palette-neutral80'],
  'es-sys-color-lm-outline-neutral': palette['es-ref-palette-neutral00'],

  // 'es-sys-color-lm-tertiary': palette['es-ref-palette-tertiary40'],
  // 'es-sys-color-lm-on-tertiary': palette['es-ref-palette-tertiary0'],
  // 'es-sys-color-lm-tertiary-hover': palette['es-ref-palette-tertiary60'],
  // 'es-sys-color-lm-tertiary-click': palette['es-ref-palette-tertiary80'],

  // 'es-sys-color-lm-inverse-tertiary': palette['es-ref-palette-tertiary0'],
  // 'es-sys-color-lm-inverse-on-tertiary': palette['es-ref-palette-tertiary40'],
  // 'es-sys-color-lm-outline-tertiary': palette['es-ref-palette-tertiary40'],

  'es-sys-color-lm-neutral-1': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-on-neutral-1': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-on-neutral-1-hover': palette['es-ref-palette-neutral20'],

  'es-sys-color-lm-neutral-2': palette['es-ref-palette-neutral80'],
  'es-sys-color-lm-on-neutral-2': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-on-neutral-2-hover': palette['es-ref-palette-neutral20'],

  'es-sys-color-lm-neutral-3': palette['es-ref-palette-neutral0'],
  'es-sys-color-lm-on-neutral-3': palette['es-ref-palette-neutral80'],
  'es-sys-color-lm-on-neutral-3-hover': palette['es-ref-palette-neutral70'],
  'es-sys-color-lm-on-neutral-3-active': palette['es-ref-palette-neutral60'],

  'es-sys-color-lm-neutral-4': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-on-neutral-4': palette['es-ref-palette-neutral80'],
  'es-sys-color-lm-on-neutral-4-hover': palette['es-ref-palette-neutral101'],

  'es-sys-color-lm-background-0': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-on-background-0': palette['es-ref-palette-neutral00'],

  'es-sys-color-lm-background-1': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-on-background-1': palette['es-ref-palette-neutral00'],

  'es-sys-color-lm-background-2': palette['es-ref-palette-neutral100'],
  'es-sys-color-lm-on-background-2': palette['es-ref-palette-neutral00'],

  'es-sys-color-lm-background-3': palette['es-ref-palette-neutral60'],
  'es-sys-color-lm-on-background-3': palette['es-ref-palette-neutral00'],

  'es-sys-color-lm-background-4': palette['es-ref-palette-neutral40'],
  'es-sys-color-lm-on-background-4': palette['es-ref-palette-neutral101'],

  'es-sys-color-lm-background-5': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-on-background-5': palette['es-ref-palette-neutral101'],

  'es-sys-color-lm-container': palette['es-ref-palette-neutral90'],
  'es-sys-color-lm-on-container': palette['es-ref-palette-neutral00'],
  'es-sys-color-lm-outline-container': palette['es-ref-palette-neutral80'],

  'es-sys-color-lm-disabled': palette['es-ref-palette-neutral80'],
  'es-sys-color-lm-on-disabled': palette['es-ref-palette-neutral60'],

  'es-sys-color-lm-inverse-disabled': palette['es-ref-palette-neutral101'],
  'es-sys-color-lm-inverse-on-disabled': palette['es-ref-palette-neutral60'],
  'es-sys-color-lm-outline-disabled': palette['es-ref-palette-neutral60'],

  'es-sys-color-lm-transparent': palette['es-ref-palette-transparent'],

  'es-sys-color-primary-00': palette['es-ref-palette-primary00'],
  'es-sys-color-primary-0': palette['es-ref-palette-primary0'],
  'es-sys-color-primary-10': palette['es-ref-palette-primary10'],
  'es-sys-color-primary-20': palette['es-ref-palette-primary20'],
  'es-sys-color-primary-30': palette['es-ref-palette-primary30'],
  'es-sys-color-primary-40': palette['es-ref-palette-primary40'],
  'es-sys-color-primary-50': palette['es-ref-palette-primary50'],
  'es-sys-color-primary-60': palette['es-ref-palette-primary60'],
  'es-sys-color-primary-70': palette['es-ref-palette-primary70'],
  'es-sys-color-primary-80': palette['es-ref-palette-primary80'],
  'es-sys-color-primary-90': palette['es-ref-palette-primary90'],
  'es-sys-color-primary-100': palette['es-ref-palette-primary100'],
  'es-sys-color-primary-101': palette['es-ref-palette-primary101'],

  'es-sys-color-secondary-00': palette['es-ref-palette-secondary00'],
  'es-sys-color-secondary-0': palette['es-ref-palette-secondary0'],
  'es-sys-color-secondary-10': palette['es-ref-palette-secondary10'],
  'es-sys-color-secondary-20': palette['es-ref-palette-secondary20'],
  'es-sys-color-secondary-30': palette['es-ref-palette-secondary30'],
  'es-sys-color-secondary-40': palette['es-ref-palette-secondary40'],
  'es-sys-color-secondary-50': palette['es-ref-palette-secondary50'],
  'es-sys-color-secondary-60': palette['es-ref-palette-secondary60'],
  'es-sys-color-secondary-70': palette['es-ref-palette-secondary70'],
  'es-sys-color-secondary-80': palette['es-ref-palette-secondary80'],
  'es-sys-color-secondary-90': palette['es-ref-palette-secondary90'],
  'es-sys-color-secondary-100': palette['es-ref-palette-secondary100'],
  'es-sys-color-secondary-101': palette['es-ref-palette-secondary101'],

  'es-sys-color-neutral-00': palette['es-ref-palette-neutral00'],
  'es-sys-color-neutral-0': palette['es-ref-palette-neutral0'],
  'es-sys-color-neutral-10': palette['es-ref-palette-neutral10'],
  'es-sys-color-neutral-20': palette['es-ref-palette-neutral20'],
  'es-sys-color-neutral-30': palette['es-ref-palette-neutral30'],
  'es-sys-color-neutral-40': palette['es-ref-palette-neutral40'],
  'es-sys-color-neutral-50': palette['es-ref-palette-neutral50'],
  'es-sys-color-neutral-60': palette['es-ref-palette-neutral60'],
  'es-sys-color-neutral-70': palette['es-ref-palette-neutral70'],
  'es-sys-color-neutral-80': palette['es-ref-palette-neutral80'],
  'es-sys-color-neutral-90': palette['es-ref-palette-neutral90'],
  'es-sys-color-neutral-100': palette['es-ref-palette-neutral100'],
  'es-sys-color-neutral-101': palette['es-ref-palette-neutral101'],
};

const ColorsTW = {
  transparent: 'transparent',
  'lm-primary': color_system['es-sys-color-lm-primary'],
  'lm-on-primary': color_system['es-sys-color-lm-on-primary'],
  'lm-primary-hover': color_system['es-sys-color-lm-primary-hover'],
  'lm-primary-click': color_system['es-sys-color-lm-primary-click'],

  'lm-inverse-primary': color_system['es-sys-color-lm-inverse-primary'],
  'lm-inverse-on-primary': color_system['es-sys-color-lm-inverse-on-primary'],
  'lm-inverse-primary-hover': color_system['es-sys-color-lm-inverse-primary-hover'],
  'lm-inverse-primary-click': color_system['es-sys-color-lm-inverse-primary-click'],
  'lm-outline-primary': color_system['es-sys-color-lm-outline-primary'],

  'lm-secondary': color_system['es-sys-color-lm-secondary'],
  'lm-secondary-hover': color_system['es-sys-color-lm-secondary-hover'],
  'lm-secondary-click': color_system['es-sys-color-lm-secondary-click'],

  'lm-on-secondary': color_system['es-sys-color-lm-on-secondary'],
  'lm-on-secondary-hover': color_system['es-sys-color-lm-on-secondary-hover'],

  'lm-inverse-secondary': color_system['es-sys-color-lm-inverse-secondary'],
  'lm-inverse-on-secondary': color_system['es-sys-color-lm-inverse-on-secondary'],
  'lm-inverse-secondary-hover': color_system['es-sys-color-lm-inverse-secondary-hover'],
  'lm-inverse-secondary-click': color_system['es-sys-color-lm-inverse-secondary-click'],
  'lm-outline-secondary': color_system['es-sys-color-lm-outline-secondary'],

  'lm-neutral': color_system['es-sys-color-lm-neutral'],
  'lm-on-neutral': color_system['es-sys-color-lm-on-neutral'],
  'lm-neutral-hover': color_system['es-sys-color-lm-neutral-hover'],
  'lm-neutral-click': color_system['es-sys-color-lm-neutral-click'],

  'lm-inverse-neutral': color_system['es-sys-color-lm-inverse-neutral'],
  'lm-inverse-on-neutral': color_system['es-sys-color-lm-inverse-on-neutral'],
  'lm-inverse-neutral-hover': color_system['es-sys-color-lm-inverse-neutral-hover'],
  'lm-inverse-neutral-click': color_system['es-sys-color-lm-inverse-neutral-click'],
  'lm-outline-neutral': color_system['es-sys-color-lm-outline-neutral'],

  // 'lm-tertiary': color_system['es-sys-color-lm-tertiary'],
  // 'lm-on-tertiary': color_system['es-sys-color-lm-on-tertiary'],
  // 'lm-tertiary-hover': color_system['es-sys-color-lm-tertiary-hover'],
  // 'lm-tertiary-click': color_system['es-sys-color-lm-tertiary-click'],

  // 'lm-inverse-tertiary': color_system['es-sys-color-lm-inverse-tertiary'],
  // 'lm-inverse-on-tertiary': color_system['es-sys-color-lm-inverse-on-tertiary'],
  // 'lm-outline-tertiary': color_system['es-sys-color-lm-outline-tertiary'],

  'lm-neutral-1': color_system['es-sys-color-lm-neutral-1'],
  'lm-on-neutral-1': color_system['es-sys-color-lm-on-neutral-1'],
  'lm-on-neutral-1-hover': color_system['es-sys-color-lm-on-neutral-1-hover'],

  'lm-neutral-2': color_system['es-sys-color-lm-neutral-2'],
  'lm-on-neutral-2': color_system['es-sys-color-lm-on-neutral-2'],
  'lm-on-neutral-2-hover': color_system['es-sys-color-lm-on-neutral-2-hover'],

  'lm-neutral-3': color_system['es-sys-color-lm-neutral-3'],
  'lm-on-neutral-3': color_system['es-sys-color-lm-on-neutral-3'],
  'lm-on-neutral-3-hover': color_system['es-sys-color-lm-on-neutral-3-hover'],
  'lm-on-neutral-3-active': color_system['es-sys-color-lm-on-neutral-3-active'],

  'lm-neutral-4': color_system['es-sys-color-lm-neutral-4'],
  'lm-on-neutral-4': color_system['es-sys-color-lm-on-neutral-4'],
  'lm-on-neutral-4-hover': color_system['es-sys-color-lm-on-neutral-4-hover'],

  'lm-background-0': color_system['es-sys-color-lm-background-0'],
  'lm-on-background-0': color_system['es-sys-color-lm-on-background-0'],

  'lm-background-1': color_system['es-sys-color-lm-background-1'],
  'lm-on-background-1': color_system['es-sys-color-lm-on-background-1'],

  'lm-background-2': color_system['es-sys-color-lm-background-2'],
  'lm-on-background-2': color_system['es-sys-color-lm-on-background-2'],

  'lm-background-3': color_system['es-sys-color-lm-background-3'],
  'lm-on-background-3': color_system['es-sys-color-lm-on-background-3'],

  'lm-background-4': color_system['es-sys-color-lm-background-4'],
  'lm-on-background-4': color_system['es-sys-color-lm-on-background-4'],

  'lm-background-5': color_system['es-sys-color-lm-background-5'],
  'lm-on-background-5': color_system['es-sys-color-lm-on-background-5'],

  'lm-container': color_system['es-sys-color-lm-container'],
  'lm-on-container': color_system['es-sys-color-lm-on-container'],
  'lm-outline-container': color_system['es-sys-color-lm-outline-container'],

  'lm-disabled': color_system['es-sys-color-lm-disabled'],
  'lm-on-disabled': color_system['es-sys-color-lm-on-disabled'],

  'lm-inverse-disabled': color_system['es-sys-color-lm-inverse-disabled'],
  'lm-inverse-on-disabled': color_system['es-sys-color-lm-inverse-on-disabled'],
  'lm-outline-disabled': color_system['es-sys-color-lm-outline-disabled'],

  'lm-transparent': color_system['es-sys-color-lm-transparent'],

  'primary-00': color_system['es-sys-color-primary-00'],
  'primary-0': color_system['es-sys-color-primary-0'],
  'primary-10': color_system['es-sys-color-primary-10'],
  'primary-20': color_system['es-sys-color-primary-20'],
  'primary-30': color_system['es-sys-color-primary-30'],
  'primary-40': color_system['es-sys-color-primary-40'],
  'primary-50': color_system['es-sys-color-primary-50'],
  'primary-60': color_system['es-sys-color-primary-60'],
  'primary-70': color_system['es-sys-color-primary-70'],
  'primary-80': color_system['es-sys-color-primary-80'],
  'primary-90': color_system['es-sys-color-primary-90'],
  'primary-100': color_system['es-sys-color-primary-100'],
  'primary-101': color_system['es-sys-color-primary-101'],

  'secondary-00': color_system['es-sys-color-secondary-00'],
  'secondary-0': color_system['es-sys-color-secondary-0'],
  'secondary-10': color_system['es-sys-color-secondary-10'],
  'secondary-20': color_system['es-sys-color-secondary-20'],
  'secondary-30': color_system['es-sys-color-secondary-30'],
  'secondary-40': color_system['es-sys-color-secondary-40'],
  'secondary-50': color_system['es-sys-color-secondary-50'],
  'secondary-60': color_system['es-sys-color-secondary-60'],
  'secondary-70': color_system['es-sys-color-secondary-70'],
  'secondary-80': color_system['es-sys-color-secondary-80'],
  'secondary-90': color_system['es-sys-color-secondary-90'],
  'secondary-100': color_system['es-sys-color-secondary-100'],
  'secondary-101': color_system['es-sys-color-secondary-101'],

  'neutral-00': color_system['es-sys-color-neutral-00'],
  'neutral-0': color_system['es-sys-color-neutral-0'],
  'neutral-10': color_system['es-sys-color-neutral-10'],
  'neutral-20': color_system['es-sys-color-neutral-20'],
  'neutral-30': color_system['es-sys-color-neutral-30'],
  'neutral-40': color_system['es-sys-color-neutral-40'],
  'neutral-50': color_system['es-sys-color-neutral-50'],
  'neutral-60': color_system['es-sys-color-neutral-60'],
  'neutral-70': color_system['es-sys-color-neutral-70'],
  'neutral-80': color_system['es-sys-color-neutral-80'],
  'neutral-90': color_system['es-sys-color-neutral-90'],
  'neutral-100': color_system['es-sys-color-neutral-100'],
  'neutral-101': color_system['es-sys-color-neutral-101'],
};

// used if it is needed to use the HEX code directly, eg. in a SVG, so the system token name can still be used
const getColorHex = (twColorSystemToken) => {
  return ColorsTW[twColorSystemToken];
};

export { ColorsTW, getColorHex };
