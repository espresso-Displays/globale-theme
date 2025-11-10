// // See the following link for the official espresso Typography System
// // https://coda.io/d/_dHtL-ZWhKM0/Typography_su_zj

// ///////////////////////////////
// layout style definitions
// ///////////////////////////////

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const layout_system = {
  // padding
  'es-sys-layout-component-padding': '10px',

  // margin
  'es-sys-layout-content-margin-x': '20px',
  'es-sys-layout-content-margin-y': '50px',

  // max content width
  'es-sys-layout-content-width-max': '1800px',
  'es-sys-layout-background-width-max': '2560px',

  // header height
  'es-sys-layout-header-height': '65px',
  'es-sys-layout-header-height-lg': '78px',
};

export const LayoutTW = {
  padding: {
    'component-padding': layout_system['es-sys-layout-component-padding'],
  },

  margin: {
    'content-margin-x': layout_system['es-sys-layout-content-margin-x'],
    'content-margin-y': layout_system['es-sys-layout-content-margin-y'],
  },

  maxWidth: {
    'content-max-width': layout_system['es-sys-layout-content-width-max'],
    'background-max-width': layout_system['es-sys-layout-background-width-max'],
  },

  height: {
    'header-height': layout_system['es-sys-layout-header-height'],
    'header-height-lg': layout_system['es-sys-layout-header-height-lg'],
  },
};

// export const offsetBanner = {
//   value: 0,
//   style: 'top-[0px]',
// };

// heights and offsets of banner and header
// used for various calcs and positioning of other elements
// to take into account height of those sticky elements
export const offsetBanner = {
  value: 0,
  style: 'top-[0px]',
};

export const heightBanner = {
  value: 35,
  style: 'h-[35px] min-h-[35px]',
};

export const offsetHeader = {
  value: heightBanner.value,
  style: 'top-[35px]',
};

export const offsetHeaderNoBanner = {
  value: offsetBanner.value,
  style: 'top-[0px]',
};

export const heightHeader = {
  value: 60,
  style: 'h-[60px]',
};

export const offsetHeaderMenu = {
  value: heightHeader.value,
  style: 'top-[60px]',
};

export const offsetOverlayFull = {
  value: heightBanner.value + heightHeader.value,
  style: 'top-[95px]',
};

export const offsetOverlayFullNoBanner = {
  value: heightHeader.value,
  style: 'top-[60px]',
};

export const heightOverlayFull = {
  // value: 60,

  style: 'h-[calc(100vh_-_95px)]',
  // style: 'h-[calc(var(h-screen-safe)_-_96px)]',
  // style: 'h-[calc(100vh_-_env(safe-area-inset-bottom)_-_95px)]',
};

export const heightOverlayFullNoBanner = {
  // value: 60,
  style: 'h-[calc(100vh_-_60px)]',
  // style: 'h-[calc(100vh_-_env(safe-area-inset-bottom)_-_60px)]',
};

export const heightMaxMenuDesktop = {
  // value: 60,

  style: 'max-h-[calc(100vh_-_95px)]',
  // style: 'h-[calc(var(h-screen-safe)_-_96px)]',
  // style: 'h-[calc(100vh_-_env(safe-area-inset-bottom)_-_95px)]',
};

export const heightMaxMenuDesktopNoBanner = {
  // value: 60,
  style: 'max-h-[calc(100vh_-_60px)]',
  // style: 'h-[calc(100vh_-_env(safe-area-inset-bottom)_-_60px)]',
};

// section navbar
export const offsetSectionNavBar = {
  value: heightBanner.value + heightHeader.value,
  style: 'top-[95px]',
};
export const offsetSectionNavBarNoBanner = {
  value: heightHeader.value,
  style: 'top-[60px]',
};
export const heightSectionNavBar = {
  value: 60,
  style: 'h-[60px]',
};

export const offsetMiniCart = {
  value: heightBanner.value + heightHeader.value,
  style: 'top-[96px]',
};
export const heightMiniCart = {
  // value: 60,
  style: 'h-[calc(100vh_-_96px)]',
};

export const offsetMiniCartNoBanner = {
  value: heightHeader.value,
  style: 'top-[60px]',
};
export const heightMiniCartNoBanner = {
  // value: 60,
  style: 'h-[calc(100vh_-_60px)]',
};

export const heightMiniCartContent = {
  // value: 60,
  style: 'h-[calc(100vh_-_146px)]',
};
export const heightMiniCartContentNoBanner = {
  // value: 60,
  style: 'h-[calc(100vh_-_110px)]',
};

export const scrollOffset = {
  value: offsetSectionNavBar.value + heightSectionNavBar.value,
  style: '-top-[155px]',
};

export const scrollOffsetNoBanner = {
  value: offsetSectionNavBarNoBanner.value + heightSectionNavBar.value,
  style: '-top-[120px]',
};

export const gridPaddingOffset = {
  value: { mobile: 16, desktop: 70 },
  style: {
    mobile: {
      left: 'relative left-[16px] lg:left-[0px]',
      right: 'relative right-[16px] lg:right-[0px]',
    },
    desktop: {
      left: 'relative lg:left-[70px]',
      right: 'relative lg:right-[70px]',
    },
  },
};

export const gridSettingsTW = {
  cols: 'grid-cols-4 lg:grid-cols-12',
  gutter: 'gap-x-[8px] lg:gap-x-[20px]',
  paddingX: 'px-[32px] lg:px-[70px]',
  start: 'col-start-1',
  end: 'col-end-5 lg:col-end-13',
};

export const paddingYReset = 'pt-[0px] pb-[0px] desktop-small:pt-[0px] desktop-small:pb-[0px]';

export const paddingSectionsY = {
  top: {
    full: {
      value: { mobile: 32, desktop: 70 },
      style: {
        mobile: 'pt-[32px]',
        desktop: 'desktop-small:pt-[70px]',
      },
    },
    half: {
      value: { mobile: 16, desktop: 35 },
      style: {
        mobile: 'pt-[16px]',
        desktop: 'desktop-small:pt-[35px]',
      },
    },
    none: {
      value: { mobile: 0, desktop: 0 },
      style: {
        mobile: 'pt-[0px]',
        desktop: 'desktop-small:pt-[0px]',
      },
    },
  },
  bottom: {
    full: {
      value: { mobile: 32, desktop: 70 },
      style: {
        mobile: 'pb-[32px]',
        desktop: 'desktop-small:pb-[70px]',
      },
    },
    half: {
      value: { mobile: 16, desktop: 35 },
      style: {
        mobile: 'pb-[16px]',
        desktop: 'desktop-small:pb-[35px]',
      },
    },
    none: {
      value: { mobile: 0, desktop: 0 },
      style: {
        mobile: 'pt-[0px]',
        desktop: 'desktop-small:pt-[0px]',
      },
    },
  },
};
