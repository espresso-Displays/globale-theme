// // See the following link for the official espresso Typography System
// // https://coda.io/d/_dHtL-ZWhKM0/Typography_su_zj

// ///////////////////////////////
// typography style definitions
// ///////////////////////////////
const typeface_ref = {
  'es-ref-typeface-brand': ['worksans', 'Arial', 'sans-serif'],
};

const typescale_system = {
  // display
  // not updated
  'es-sys-typescale-display-extralarge-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-display-extralarge-size': '5rem', // mobile: 57px - desktop: 91px
  'es-sys-typescale-display-extralarge-line-height': '6rem', // add px sizes
  'es-sys-typescale-display-extralarge-tracking': '0rem', // add px sizes
  'es-sys-typescale-display-extralarge-weight': '700', // add px sizes

  'es-sys-typescale-display-large-font': typeface_ref['es-ref-typeface-brand'], // not updated
  'es-sys-typescale-display-large-size': '3.6rem', // mobile: 57px - desktop: 91px
  'es-sys-typescale-display-large-line-height': '4.29rem', // add px sizes
  'es-sys-typescale-display-large-tracking': '0rem', // add px sizes
  'es-sys-typescale-display-large-weight': '700', // add px sizes

  'es-sys-typescale-display-medium-font': typeface_ref['es-ref-typeface-brand'], // not updated
  'es-sys-typescale-display-medium-size': '2.85rem',
  'es-sys-typescale-display-medium-line-height': '3.43rem',
  'es-sys-typescale-display-medium-tracking': '0rem',
  'es-sys-typescale-display-medium-weight': '700',

  'es-sys-typescale-display-small-font': typeface_ref['es-ref-typeface-brand'], // not updated
  'es-sys-typescale-display-small-size': '2.25rem',
  'es-sys-typescale-display-small-line-height': '2.79rem',
  'es-sys-typescale-display-small-tracking': '0rem',
  'es-sys-typescale-display-small-weight': '700',

  // not updated
  // 'es-sys-typescale-display-extrasmall-font':
  //   typeface_ref['es-ref-typeface-brand'],
  // 'es-sys-typescale-display-extrasmall-size': '1.4rem',
  // 'es-sys-typescale-display-extrasmall-line-height': '2.14rem',
  // 'es-sys-typescale-display-extrasmall-tracking': '0rem',
  // 'es-sys-typescale-display-extrasmall-weight': '700',

  // heading
  // not updated
  'es-sys-typescale-heading-extralarge-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-extralarge-size': '2.25rem',
  'es-sys-typescale-heading-extralarge-line-height': '2.75rem',
  'es-sys-typescale-heading-extralarge-tracking': '0rem',
  'es-sys-typescale-heading-extralarge-weight': '700',

  'es-sys-typescale-heading-large-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-large-size': '2rem',
  'es-sys-typescale-heading-large-line-height': '2.43rem',
  'es-sys-typescale-heading-large-tracking': '0rem',
  'es-sys-typescale-heading-large-weight': '700',

  'es-sys-typescale-heading-medium-font': typeface_ref['es-ref-typeface-brand'], //   not updated
  'es-sys-typescale-heading-medium-size': '1.5rem',
  'es-sys-typescale-heading-medium-line-height': '2.29rem',
  'es-sys-typescale-heading-medium-tracking': '0rem',
  'es-sys-typescale-heading-medium-weight': '700',

  'es-sys-typescale-heading-small-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-small-size': '1.15rem',
  'es-sys-typescale-heading-small-line-height': '1.71rem',
  'es-sys-typescale-heading-small-tracking': '0rem',
  'es-sys-typescale-heading-small-weight': '700',

  // 'es-sys-typescale-heading-small-light-font':
  //   typeface_ref['es-ref-typeface-brand'],
  // 'es-sys-typescale-heading-small-lightsize': '1.15rem',
  // 'es-sys-typescale-heading-small-light-line-height': '1.71rem',
  // 'es-sys-typescale-heading-small-light-tracking': '0rem',
  // 'es-sys-typescale-heading-small-light-weight': '400',

  'es-sys-typescale-heading-extrasmall-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-heading-extrasmall-size': '1rem',
  'es-sys-typescale-heading-extrasmall-line-height': '1.5rem',
  'es-sys-typescale-heading-extrasmall-tracking': '0rem',
  'es-sys-typescale-heading-extrasmall-weight': '700',

  // subheading
  //not updated
  'es-sys-typescale-subheading-extralarge-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extralarge-size': '1.85rem',
  'es-sys-typescale-subheading-extralarge-line-height': '2.29rem',
  'es-sys-typescale-subheading-extralarge-tracking': '0rem',
  'es-sys-typescale-subheading-extralarge-weight': '400',

  'es-sys-typescale-subheading-extralarge-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extralarge-heavy-size': '1.85rem',
  'es-sys-typescale-subheading-extralarge-heavy-line-height': '2.29rem',
  'es-sys-typescale-subheading-extralarge-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-extralarge-heavy-weight': '700',

  'es-sys-typescale-subheading-large-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-large-size': '1.5rem',
  'es-sys-typescale-subheading-large-line-height': '2.29rem',
  'es-sys-typescale-subheading-large-tracking': '0rem',
  'es-sys-typescale-subheading-large-weight': '400',

  'es-sys-typescale-subheading-large-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-large-heavy-size': '1.5rem',
  'es-sys-typescale-subheading-large-heavy-line-height': '2.29rem',
  'es-sys-typescale-subheading-large-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-large-heavy-weight': '700',

  'es-sys-typescale-subheading-medium-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-medium-size': '1.25rem', // not updated
  'es-sys-typescale-subheading-medium-line-height': '1.93rem',
  'es-sys-typescale-subheading-medium-tracking': '0rem',
  'es-sys-typescale-subheading-medium-weight': '400',

  'es-sys-typescale-subheading-medium-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-medium-heavy-size': '1.25rem', // not updated
  'es-sys-typescale-subheading-medium-heavy-line-height': '1.93rem',
  'es-sys-typescale-subheading-medium-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-medium-heavy-weight': '700',

  'es-sys-typescale-subheading-small-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-small-size': '1.05rem',
  'es-sys-typescale-subheading-small-line-height': '1.64rem',
  'es-sys-typescale-subheading-small-tracking': '0rem',
  'es-sys-typescale-subheading-small-weight': '400',

  'es-sys-typescale-subheading-small-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-small-heavy-size': '1.05rem',
  'es-sys-typescale-subheading-small-heavy-line-height': '1.64rem',
  'es-sys-typescale-subheading-small-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-small-heavy-weight': '700',

  'es-sys-typescale-subheading-extrasmall-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extrasmall-size': '0.85rem',
  'es-sys-typescale-subheading-extrasmall-line-height': '1.29rem',
  'es-sys-typescale-subheading-extrasmall-tracking': '0rem',
  'es-sys-typescale-subheading-extrasmall-weight': '400',

  'es-sys-typescale-subheading-extrasmall-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-subheading-extrasmall-heavy-size': '0.85rem',
  'es-sys-typescale-subheading-extrasmall-heavy-line-height': '1.29rem',
  'es-sys-typescale-subheading-extrasmall-heavy-tracking': '0rem',
  'es-sys-typescale-subheading-extrasmall-heavy-weight': '700',

  // label

  // not updated
  'es-sys-typescale-label-extralarge-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extralarge-size': '1.5rem',
  'es-sys-typescale-label-extralarge-line-height': '1.25rem',
  'es-sys-typescale-label-extralarge-tracking': '0rem',
  'es-sys-typescale-label-extralarge-weight': '400',

  'es-sys-typescale-label-extralarge-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extralarge-heavy-size': '1.5rem',
  'es-sys-typescale-label-extralarge-heavy-line-height': '1.25rem',
  'es-sys-typescale-label-extralarge-heavy-tracking': '0rem',
  'es-sys-typescale-label-extralarge-heavy-weight': '700',

  'es-sys-typescale-label-large-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-large-size': '1.15rem',
  'es-sys-typescale-label-large-line-height': '1.71rem',
  'es-sys-typescale-label-large-tracking': '0rem',
  'es-sys-typescale-label-large-weight': '400',

  'es-sys-typescale-label-large-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-large-heavy-size': '1.15rem',
  'es-sys-typescale-label-large-heavy-line-height': '1.71rem',
  'es-sys-typescale-label-large-heavy-tracking': '0rem',
  'es-sys-typescale-label-large-heavy-weight': '700',

  'es-sys-typescale-label-medium-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-medium-size': '1rem',
  'es-sys-typescale-label-medium-line-height': '1.5rem',
  'es-sys-typescale-label-medium-tracking': '0rem',
  'es-sys-typescale-label-medium-weight': '400',

  'es-sys-typescale-label-medium-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-medium-heavy-size': '1rem',
  'es-sys-typescale-label-medium-heavy-line-height': '1.5rem',
  'es-sys-typescale-label-medium-heavy-tracking': '0rem',
  'es-sys-typescale-label-medium-heavy-weight': '700',

  'es-sys-typescale-label-small-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-small-size': '0.95rem',
  'es-sys-typescale-label-small-line-height': '1.43rem',
  'es-sys-typescale-label-small-tracking': '0rem',
  'es-sys-typescale-label-small-weight': '400',

  'es-sys-typescale-label-small-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-small-heavy-size': '0.95rem',
  'es-sys-typescale-label-small-heavy-line-height': '1.43rem',
  'es-sys-typescale-label-small-heavy-tracking': '0rem',
  'es-sys-typescale-label-small-heavy-weight': '700',

  'es-sys-typescale-label-extrasmall-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extrasmall-size': '0.85rem',
  'es-sys-typescale-label-extrasmall-line-height': '1.29rem',
  'es-sys-typescale-label-extrasmall-tracking': '0rem',
  'es-sys-typescale-label-extrasmall-weight': '400',

  'es-sys-typescale-label-extrasmall-heavy-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-label-extrasmall-heavy-size': '0.85rem',
  'es-sys-typescale-label-extrasmall-heavy-line-height': '1.29rem',
  'es-sys-typescale-label-extrasmall-heavy-tracking': '0rem',
  'es-sys-typescale-label-extrasmall-heavy-weight': '700',

  // body
  'es-sys-typescale-body-extralarge-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-extralarge-size': '1.4rem',
  'es-sys-typescale-body-extralarge-line-height': '2.14rem',
  'es-sys-typescale-body-extralarge-tracking': '0rem',
  'es-sys-typescale-body-extralarge-weight': '400',

  'es-sys-typescale-body-large-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-large-size': '1.25rem',
  'es-sys-typescale-body-large-line-height': '1.93rem',
  'es-sys-typescale-body-large-tracking': '0rem',
  'es-sys-typescale-body-large-weight': '400',

  'es-sys-typescale-body-medium-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-medium-size': '1.15rem',
  'es-sys-typescale-body-medium-line-height': '1.71rem',
  'es-sys-typescale-body-medium-tracking': '0rem',
  'es-sys-typescale-body-medium-weight': '400',

  'es-sys-typescale-body-small-font': typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-small-size': '1rem',
  'es-sys-typescale-body-small-line-height': '1.5rem',
  'es-sys-typescale-body-small-tracking': '0rem',
  'es-sys-typescale-body-small-weight': '400',

  'es-sys-typescale-body-extrasmall-font':
    typeface_ref['es-ref-typeface-brand'],
  'es-sys-typescale-body-extrasmall-size': '0.85rem',
  'es-sys-typescale-body-extrasmall-line-height': '1.29rem',
  'es-sys-typescale-body-extrasmall-tracking': '0rem',
  'es-sys-typescale-body-extrasmall-weight': '400',
};

const FontsTW = {
  typeface: {
    'typeface-brand': typeface_ref['es-ref-typeface-brand'],
  },

  typescales: {
    'display-extralarge': [
      typescale_system['es-sys-typescale-display-extralarge-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-display-extralarge-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-display-extralarge-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-display-extralarge-weight'],
      },
    ],

    'display-large': [
      typescale_system['es-sys-typescale-display-large-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-display-large-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-display-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-large-weight'],
      },
    ],
    'display-medium': [
      typescale_system['es-sys-typescale-display-medium-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-display-medium-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-display-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-medium-weight'],
      },
    ],
    'display-small': [
      typescale_system['es-sys-typescale-display-small-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-display-small-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-display-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-display-small-weight'],
      },
    ],
    'display-extrasmall': [
      typescale_system['es-sys-typescale-display-extrasmall-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-display-extrasmall-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-display-extrasmall-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-display-extrasmall-weight'],
      },
    ],

    'heading-extralarge': [
      typescale_system['es-sys-typescale-heading-extralarge-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-heading-extralarge-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-heading-extralarge-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-heading-extralarge-weight'],
      },
    ],
    'heading-large': [
      typescale_system['es-sys-typescale-heading-large-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-heading-large-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-heading-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-large-weight'],
      },
    ],
    'heading-medium': [
      typescale_system['es-sys-typescale-heading-medium-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-heading-medium-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-heading-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-medium-weight'],
      },
    ],
    'heading-small': [
      typescale_system['es-sys-typescale-heading-small-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-heading-small-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-heading-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-heading-small-weight'],
      },
    ],
    // 'heading-small-light': [
    //   typescale_system['es-sys-typescale-heading-small-light-size'],
    //   {
    //     lineHeight:
    //       typescale_system['es-sys-typescale-heading-small-light-line-height'],
    //     letterSpacing:
    //       typescale_system['es-sys-typescale-heading-small-light-tracking'],
    //     fontWeight:
    //       typescale_system['es-sys-typescale-heading-small-light-weight'],
    //   },
    // ],
    'heading-extrasmall': [
      typescale_system['es-sys-typescale-heading-extrasmall-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-heading-extrasmall-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-heading-extrasmall-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-heading-extrasmall-weight'],
      },
    ],

    'subheading-extralarge': [
      typescale_system['es-sys-typescale-subheading-extralarge-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-extralarge-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-extralarge-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-extralarge-weight'],
      },
    ],
    'subheading-extralarge-heavy': [
      typescale_system['es-sys-typescale-subheading-extralarge-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-extralarge-heavy-line-height'
          ],
        letterSpacing:
          typescale_system[
            'es-sys-typescale-subheading-extralarge-heavy-tracking'
          ],
        fontWeight:
          typescale_system[
            'es-sys-typescale-subheading-extralarge-heavy-weight'
          ],
      },
    ],
    'subheading-large': [
      typescale_system['es-sys-typescale-subheading-large-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-subheading-large-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-large-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-large-weight'],
      },
    ],
    'subheading-large-heavy': [
      typescale_system['es-sys-typescale-subheading-large-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-large-heavy-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-large-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-large-heavy-weight'],
      },
    ],
    'subheading-medium': [
      typescale_system['es-sys-typescale-subheading-medium-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-subheading-medium-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-medium-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-medium-weight'],
      },
    ],
    'subheading-medium-heavy': [
      typescale_system['es-sys-typescale-subheading-medium-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-medium-heavy-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-medium-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-medium-heavy-weight'],
      },
    ],
    'subheading-small': [
      typescale_system['es-sys-typescale-subheading-small-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-subheading-small-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-small-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-small-weight'],
      },
    ],
    'subheading-small-heavy': [
      typescale_system['es-sys-typescale-subheading-small-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-small-heavy-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-small-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-small-heavy-weight'],
      },
    ],
    'subheading-extrasmall': [
      typescale_system['es-sys-typescale-subheading-extrasmall-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-extrasmall-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-subheading-extrasmall-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-subheading-extrasmall-weight'],
      },
    ],
    'subheading-extrasmall-heavy': [
      typescale_system['es-sys-typescale-subheading-extrasmall-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-subheading-extrasmall-heavy-line-height'
          ],
        letterSpacing:
          typescale_system[
            'es-sys-typescale-subheading-extrasmall-heavy-tracking'
          ],
        fontWeight:
          typescale_system[
            'es-sys-typescale-subheading-extrasmall-heavy-weight'
          ],
      },
    ],

    'label-extralarge': [
      typescale_system['es-sys-typescale-label-extralarge-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-extralarge-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-extralarge-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-extralarge-weight'],
      },
    ],
    'label-extralarge-heavy': [
      typescale_system['es-sys-typescale-label-extralarge-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-label-extralarge-heavy-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-label-extralarge-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-extralarge-heavy-weight'],
      },
    ],
    'label-large': [
      typescale_system['es-sys-typescale-label-large-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-large-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-large-weight'],
      },
    ],
    'label-large-heavy': [
      typescale_system['es-sys-typescale-label-large-heavy-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-large-heavy-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-large-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-large-heavy-weight'],
      },
    ],
    'label-medium': [
      typescale_system['es-sys-typescale-label-medium-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-medium-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-medium-weight'],
      },
    ],
    'label-medium-heavy': [
      typescale_system['es-sys-typescale-label-medium-heavy-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-medium-heavy-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-medium-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-medium-heavy-weight'],
      },
    ],
    'label-small': [
      typescale_system['es-sys-typescale-label-small-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-small-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-label-small-weight'],
      },
    ],
    'label-small-heavy': [
      typescale_system['es-sys-typescale-label-small-heavy-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-small-heavy-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-small-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-small-heavy-weight'],
      },
    ],
    'label-extrasmall': [
      typescale_system['es-sys-typescale-label-extrasmall-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-label-extrasmall-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-label-extrasmall-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-extrasmall-weight'],
      },
    ],
    'label-extrasmall-heavy': [
      typescale_system['es-sys-typescale-label-extrasmall-heavy-size'],
      {
        lineHeight:
          typescale_system[
            'es-sys-typescale-label-extrasmall-heavy-line-height'
          ],
        letterSpacing:
          typescale_system['es-sys-typescale-label-extrasmall-heavy-tracking'],
        fontWeight:
          typescale_system['es-sys-typescale-label-extrasmall-heavy-weight'],
      },
    ],

    'body-extralarge': [
      typescale_system['es-sys-typescale-body-extralarge-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-body-extralarge-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-body-extralarge-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-extralarge-weight'],
      },
    ],
    'body-large': [
      typescale_system['es-sys-typescale-body-large-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-large-line-height'],
        letterSpacing: typescale_system['es-sys-typescale-body-large-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-large-weight'],
      },
    ],
    'body-medium': [
      typescale_system['es-sys-typescale-body-medium-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-body-medium-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-body-medium-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-medium-weight'],
      },
    ],
    'body-small': [
      typescale_system['es-sys-typescale-body-small-size'],
      {
        lineHeight: typescale_system['es-sys-typescale-body-small-line-height'],
        letterSpacing: typescale_system['es-sys-typescale-body-small-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-small-weight'],
      },
    ],
    'body-extrasmall': [
      typescale_system['es-sys-typescale-body-extrasmall-size'],
      {
        lineHeight:
          typescale_system['es-sys-typescale-body-extrasmall-line-height'],
        letterSpacing:
          typescale_system['es-sys-typescale-body-extrasmall-tracking'],
        fontWeight: typescale_system['es-sys-typescale-body-extrasmall-weight'],
      },
    ],
  },
};

export {FontsTW};
