// // See the following link for the official espresso Typography System
// // https://coda.io/d/_dHtL-ZWhKM0/Typography_su_zj

// ///////////////////////////////
// typography style definitions
// ///////////////////////////////
const typeface_ref = {
  'es-ref-typeface-brand': ['worksans', 'Arial', 'sans-serif'],
  'es-ref-typeface-special': ['vidaloka', 'serif'],
};

const typescale_system = {
  // display
  'es-sys-typescale-display-extralarge-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-display-extralarge-size': '5rem',
  'es-sys-typescale-display-extralarge-lineheight': '6rem',
  'es-sys-typescale-display-extralarge-tracking': '0rem',
  'es-sys-typescale-display-extralarge-weight': '700',

  'es-sys-typescale-display-large-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-display-large-size': '3.6rem',
  'es-sys-typescale-display-large-lineheight': '4.29rem',
  'es-sys-typescale-display-large-tracking': '0rem',
  'es-sys-typescale-display-large-weight': '700',

  'es-sys-typescale-display-medium-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-display-medium-size': '2.85rem',
  'es-sys-typescale-display-medium-lineheight': '3.43rem',
  'es-sys-typescale-display-medium-tracking': '0rem',
  'es-sys-typescale-display-medium-weight': '700',

  'es-sys-typescale-display-small-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-display-small-size': '2.25rem',
  'es-sys-typescale-display-small-lineheight': '2.79rem',
  'es-sys-typescale-display-small-tracking': '0rem',
  'es-sys-typescale-display-small-weight': '700',

  // not updated
  // 'es-sys-typescale-display-extrasmall-typeface':
  //   typeface_ref['es-ref-typeface-brand'],
  // 'es-sys-typescale-display-extrasmall-size': '1.4rem',
  // 'es-sys-typescale-display-extrasmall-lineheight': '2.14rem',
  // 'es-sys-typescale-display-extrasmall-tracking': '0rem',
  // 'es-sys-typescale-display-extrasmall-weight': '700',

  // heading
  'es-sys-typescale-heading-extralarge-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-extralarge-size': '2.5rem',
  'es-sys-typescale-heading-extralarge-lineheight': '3rem',
  'es-sys-typescale-heading-extralarge-tracking': '0rem',
  'es-sys-typescale-heading-extralarge-weight': '700',

  'es-sys-typescale-heading-large-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-large-size': '2rem',
  'es-sys-typescale-heading-large-lineheight': '2.43rem',
  'es-sys-typescale-heading-large-tracking': '0rem',
  'es-sys-typescale-heading-large-weight': '700',

  'es-sys-typescale-heading-medium-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-medium-size': '1.75rem',
  'es-sys-typescale-heading-medium-lineheight': '2.14rem',
  'es-sys-typescale-heading-medium-tracking': '0rem',
  'es-sys-typescale-heading-medium-weight': '700',

  'es-sys-typescale-heading-small-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-small-size': '1.15rem',
  'es-sys-typescale-heading-small-lineheight': '1.71rem',
  'es-sys-typescale-heading-small-tracking': '0rem',
  'es-sys-typescale-heading-small-weight': '700',

  // 'es-sys-typescale-heading-small-light-typeface':
  //   typeface_ref['es-ref-typeface-brand'],
  // 'es-sys-typescale-heading-small-lightsize': '1.15rem',
  // 'es-sys-typescale-heading-small-light-lineheight': '1.71rem',
  // 'es-sys-typescale-heading-small-light-tracking': '0rem',
  // 'es-sys-typescale-heading-small-light-weight': '400',

  'es-sys-typescale-heading-extrasmall-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-extrasmall-size': '1rem',
  'es-sys-typescale-heading-extrasmall-lineheight': '1.5rem',
  'es-sys-typescale-heading-extrasmall-tracking': '0rem',
  'es-sys-typescale-heading-extrasmall-weight': '700',

  // subheading
  'es-sys-typescale-subheading-extralarge-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extralarge-size': '1.85rem',
  'es-sys-typescale-subheading-extralarge-lineheight': '2.29rem',
  'es-sys-typescale-subheading-extralarge-tracking': '0rem',
  'es-sys-typescale-subheading-extralarge-weight': '400',

  'es-sys-typescale-subheading-extralarge-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extralarge-heavy-size': '1.85rem',
  'es-sys-typescale-subheading-extralarge-heavy-lineheight': '2.29rem',
  'es-sys-typescale-subheading-extralarge-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-extralarge-heavy-weight': '700',

  'es-sys-typescale-subheading-large-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-large-size': '1.5rem',
  'es-sys-typescale-subheading-large-lineheight': '2.29rem',
  'es-sys-typescale-subheading-large-tracking': '0rem',
  'es-sys-typescale-subheading-large-weight': '400',

  'es-sys-typescale-subheading-large-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-large-heavy-size': '1.5rem',
  'es-sys-typescale-subheading-large-heavy-lineheight': '2.29rem',
  'es-sys-typescale-subheading-large-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-large-heavy-weight': '700',

  'es-sys-typescale-subheading-medium-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-medium-size': '1.4rem',
  'es-sys-typescale-subheading-medium-lineheight': '2.14rem',
  'es-sys-typescale-subheading-medium-tracking': '0rem',
  'es-sys-typescale-subheading-medium-weight': '400',

  'es-sys-typescale-subheading-medium-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-medium-heavy-size': '1.4rem',
  'es-sys-typescale-subheading-medium-heavy-lineheight': '2.14rem',
  'es-sys-typescale-subheading-medium-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-medium-heavy-weight': '700',

  'es-sys-typescale-subheading-small-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-small-size': '1.05rem',
  'es-sys-typescale-subheading-small-lineheight': '1.64rem',
  'es-sys-typescale-subheading-small-tracking': '0rem',
  'es-sys-typescale-subheading-small-weight': '400',

  'es-sys-typescale-subheading-small-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-small-heavy-size': '1.05rem',
  'es-sys-typescale-subheading-small-heavy-lineheight': '1.64rem',
  'es-sys-typescale-subheading-small-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-small-heavy-weight': '700',

  'es-sys-typescale-subheading-extrasmall-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extrasmall-size': '0.85rem',
  'es-sys-typescale-subheading-extrasmall-lineheight': '1.29rem',
  'es-sys-typescale-subheading-extrasmall-tracking': '0rem',
  'es-sys-typescale-subheading-extrasmall-weight': '400',

  'es-sys-typescale-subheading-extrasmall-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extrasmall-heavy-size': '0.85rem',
  'es-sys-typescale-subheading-extrasmall-heavy-lineheight': '1.29rem',
  'es-sys-typescale-subheading-extrasmall-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-extrasmall-heavy-weight': '700',

  // label
  'es-sys-typescale-label-extralarge-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extralarge-size': '1.4rem',
  'es-sys-typescale-label-extralarge-lineheight': '2.14rem',
  'es-sys-typescale-label-extralarge-tracking': '0rem',
  'es-sys-typescale-label-extralarge-weight': '400',

  'es-sys-typescale-label-extralarge-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extralarge-heavy-size': '1.4rem',
  'es-sys-typescale-label-extralarge-heavy-lineheight': '2.14rem',
  'es-sys-typescale-label-extralarge-heavy-tracking': '0rem',
  'es-sys-typescale-label-extralarge-heavy-weight': '700',

  'es-sys-typescale-label-large-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-large-size': '1.25rem',
  'es-sys-typescale-label-large-lineheight': '1.93rem',
  'es-sys-typescale-label-large-tracking': '0rem',
  'es-sys-typescale-label-large-weight': '400',

  'es-sys-typescale-label-large-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-large-heavy-size': '1.25rem',
  'es-sys-typescale-label-large-heavy-lineheight': '1.93rem',
  'es-sys-typescale-label-large-heavy-tracking': '0rem',
  'es-sys-typescale-label-large-heavy-weight': '700',

  'es-sys-typescale-label-medium-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-medium-size': '1rem',
  'es-sys-typescale-label-medium-lineheight': '1.5rem',
  'es-sys-typescale-label-medium-tracking': '0rem',
  'es-sys-typescale-label-medium-weight': '400',

  'es-sys-typescale-label-medium-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-medium-heavy-size': '1rem',
  'es-sys-typescale-label-medium-heavy-lineheight': '1.5rem',
  'es-sys-typescale-label-medium-heavy-tracking': '0rem',
  'es-sys-typescale-label-medium-heavy-weight': '700',

  'es-sys-typescale-label-small-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-small-size': '0.85rem',
  'es-sys-typescale-label-small-lineheight': '1.29rem',
  'es-sys-typescale-label-small-tracking': '0rem',
  'es-sys-typescale-label-small-weight': '400',

  'es-sys-typescale-label-small-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-small-heavy-size': '0.85rem',
  'es-sys-typescale-label-small-heavy-lineheight': '1.29rem',
  'es-sys-typescale-label-small-heavy-tracking': '0rem',
  'es-sys-typescale-label-small-heavy-weight': '700',

  'es-sys-typescale-label-extrasmall-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extrasmall-size': '0.75rem',
  'es-sys-typescale-label-extrasmall-lineheight': '1.21rem',
  'es-sys-typescale-label-extrasmall-tracking': '0rem',
  'es-sys-typescale-label-extrasmall-weight': '400',

  'es-sys-typescale-label-extrasmall-heavy-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extrasmall-heavy-size': '0.75rem',
  'es-sys-typescale-label-extrasmall-heavy-lineheight': '1.21rem',
  'es-sys-typescale-label-extrasmall-heavy-tracking': '0rem',
  'es-sys-typescale-label-extrasmall-heavy-weight': '700',

  // body
  'es-sys-typescale-body-extralarge-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-extralarge-size': '1.4rem',
  'es-sys-typescale-body-extralarge-lineheight': '2.14rem',
  'es-sys-typescale-body-extralarge-tracking': '0rem',
  'es-sys-typescale-body-extralarge-weight': '400',

  'es-sys-typescale-body-large-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-large-size': '1.25rem',
  'es-sys-typescale-body-large-lineheight': '1.93rem',
  'es-sys-typescale-body-large-tracking': '0rem',
  'es-sys-typescale-body-large-weight': '400',

  'es-sys-typescale-body-medium-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-medium-size': '1rem',
  'es-sys-typescale-body-medium-lineheight': '1.5rem',
  'es-sys-typescale-body-medium-tracking': '0rem',
  'es-sys-typescale-body-medium-weight': '400',

  'es-sys-typescale-body-small-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-small-size': '0.85rem',
  'es-sys-typescale-body-small-lineheight': '1.29rem',
  'es-sys-typescale-body-small-tracking': '0rem',
  'es-sys-typescale-body-small-weight': '400',

  'es-sys-typescale-body-extrasmall-typeface': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-extrasmall-size': '0.75rem',
  'es-sys-typescale-body-extrasmall-lineheight': '1.21rem',
  'es-sys-typescale-body-extrasmall-tracking': '0rem',
  'es-sys-typescale-body-extrasmall-weight': '400',
};

const FontsTW = {
  typeface: {
    'typeface-brand': typeface_ref['es-ref-typeface-brand'],
    'typeface-special': typeface_ref['es-ref-typeface-special'],
  },

  typescales: {
    'display-extralarge': [
      typescale_system['es-sys-typescale-display-extralarge-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-display-extralarge-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-display-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-extralarge-weight'],
      },
    ],

    'display-large': [
      typescale_system['es-sys-typescale-display-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-display-large-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-display-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-large-weight'],
      },
    ],
    'display-medium': [
      typescale_system['es-sys-typescale-display-medium-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-display-medium-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-display-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-medium-weight'],
      },
    ],
    'display-small': [
      typescale_system['es-sys-typescale-display-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-display-small-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-display-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-small-weight'],
      },
    ],
    'display-extrasmall': [
      typescale_system['es-sys-typescale-display-extrasmall-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-display-extrasmall-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-display-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-extrasmall-weight'],
      },
    ],

    'heading-extralarge': [
      typescale_system['es-sys-typescale-heading-extralarge-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-heading-extralarge-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-heading-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-extralarge-weight'],
      },
    ],
    'heading-large': [
      typescale_system['es-sys-typescale-heading-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-heading-large-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-heading-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-large-weight'],
      },
    ],
    'heading-medium': [
      typescale_system['es-sys-typescale-heading-medium-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-heading-medium-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-heading-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-medium-weight'],
      },
    ],
    'heading-small': [
      typescale_system['es-sys-typescale-heading-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-heading-small-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-heading-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-small-weight'],
      },
    ],
    // 'heading-small-light': [
    //   typescale_system['es-sys-typescale-heading-small-light-size'],
    //   {
    //     lineHeight:
    //       typescale_system['es-sys-typescale-heading-small-light-lineheight'],
    //     letterSpacing:
    //       typescale_system['es-sys-typescale-heading-small-light-tracking'],
    //     fontWeight:
    //       typescale_system['es-sys-typescale-heading-small-light-weight'],
    //   },
    // ],
    'heading-extrasmall': [
      typescale_system['es-sys-typescale-heading-extrasmall-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-heading-extrasmall-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-heading-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-extrasmall-weight'],
      },
    ],

    'subheading-extralarge': [
      typescale_system['es-sys-typescale-subheading-extralarge-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-extralarge-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-extralarge-weight'],
      },
    ],
    'subheading-extralarge-heavy': [
      typescale_system['es-sys-typescale-subheading-extralarge-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-extralarge-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-extralarge-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-extralarge-heavy-weight'],
      },
    ],
    'subheading-large': [
      typescale_system['es-sys-typescale-subheading-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-large-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-large-weight'],
      },
    ],
    'subheading-large-heavy': [
      typescale_system['es-sys-typescale-subheading-large-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-large-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-large-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-large-heavy-weight'],
      },
    ],
    'subheading-medium': [
      typescale_system['es-sys-typescale-subheading-medium-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-medium-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-medium-weight'],
      },
    ],
    'subheading-medium-heavy': [
      typescale_system['es-sys-typescale-subheading-medium-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-medium-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-medium-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-medium-heavy-weight'],
      },
    ],
    'subheading-small': [
      typescale_system['es-sys-typescale-subheading-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-small-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-small-weight'],
      },
    ],
    'subheading-small-heavy': [
      typescale_system['es-sys-typescale-subheading-small-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-small-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-small-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-small-heavy-weight'],
      },
    ],
    'subheading-extrasmall': [
      typescale_system['es-sys-typescale-subheading-extrasmall-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-extrasmall-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-extrasmall-weight'],
      },
    ],
    'subheading-extrasmall-heavy': [
      typescale_system['es-sys-typescale-subheading-extrasmall-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-subheading-extrasmall-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-subheading-extrasmall-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-subheading-extrasmall-heavy-weight'],
      },
    ],

    'label-extralarge': [
      typescale_system['es-sys-typescale-label-extralarge-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-extralarge-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-extralarge-weight'],
      },
    ],
    'label-extralarge-heavy': [
      typescale_system['es-sys-typescale-label-extralarge-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-extralarge-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-extralarge-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-extralarge-heavy-weight'],
      },
    ],
    'label-large': [
      typescale_system['es-sys-typescale-label-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-large-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-large-weight'],
      },
    ],
    'label-large-heavy': [
      typescale_system['es-sys-typescale-label-large-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-large-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-large-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-large-heavy-weight'],
      },
    ],
    'label-medium': [
      typescale_system['es-sys-typescale-label-medium-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-medium-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-medium-weight'],
      },
    ],
    'label-medium-heavy': [
      typescale_system['es-sys-typescale-label-medium-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-medium-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-medium-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-medium-heavy-weight'],
      },
    ],
    'label-small': [
      typescale_system['es-sys-typescale-label-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-small-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-small-weight'],
      },
    ],
    'label-small-heavy': [
      typescale_system['es-sys-typescale-label-small-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-small-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-small-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-small-heavy-weight'],
      },
    ],
    'label-extrasmall': [
      typescale_system['es-sys-typescale-label-extrasmall-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-extrasmall-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-extrasmall-weight'],
      },
    ],
    'label-extrasmall-heavy': [
      typescale_system['es-sys-typescale-label-extrasmall-heavy-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-label-extrasmall-heavy-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-label-extrasmall-heavy-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-extrasmall-heavy-weight'],
      },
    ],

    'body-extralarge': [
      typescale_system['es-sys-typescale-body-extralarge-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-extralarge-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-body-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-extralarge-weight'],
      },
    ],
    'body-large': [
      typescale_system['es-sys-typescale-body-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-large-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-body-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-large-weight'],
      },
    ],
    'body-medium': [
      typescale_system['es-sys-typescale-body-medium-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-medium-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-body-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-medium-weight'],
      },
    ],
    'body-small': [
      typescale_system['es-sys-typescale-body-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-small-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-body-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-small-weight'],
      },
    ],
    'body-extrasmall': [
      typescale_system['es-sys-typescale-body-extrasmall-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-extrasmall-lineheight'],
        letterSpacing: typescale_system['es-sys-typescale-body-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-extrasmall-weight'],
      },
    ],
  },
};

export { FontsTW };
