// // See the following link for the official espresso Typography System
// // https://coda.io/d/_dHtL-ZWhKM0/Typography_su_zj

// ///////////////////////////////
// layout style definitions
// ///////////////////////////////

const layout_system = {
  // padding
  'es-sys-layout-component-padding': '10px',

  // margin
  'es-sys-layout-content-margin-x': '20px',
  'es-sys-layout-content-margin-y': '50px',

  // max content width
  'es-sys-layout-content-width-max': '1800px',

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
  style: 'h-[35px]',
};

export const offsetHeader = {
  value: heightBanner.value,
  style: 'top-[35px]',
};

export const heightHeader = {
  value: 60,
  style: 'h-[60px]',
};

// height for a full screen height section taking into account banner and header
export const heightSectionFullScreen = {
  // value: (100vh)- heightBanner.value + heightHeader.value,
  // style: 'min-h-[calc(100vh_-_95px)] max-h-[800px]',
  style: 'min-h-[600px] lg:min-h-[800px]',
};

// section navbar
export const offsetSectionNavBar = {
  value: heightBanner.value + heightHeader.value,
  style: 'top-[95px]',
};
export const heightSectionNavBar = {
  value: 60,
  style: 'h-[60px]',
};

export const scrollOffset = {
  value: offsetSectionNavBar.value + heightSectionNavBar.value,
  style: 'top-[-155px]',
};

export const gridPaddingOffset = {
  value: {mobile: 16, desktop: 70},
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
