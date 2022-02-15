module.exports = {
  purge: [
    './src/pages/**/*.js',
    './src/pages/**/*.jsx',
    './src/components/**/*.js',
    './src/components/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: '100%',
        },
      },
      gridTemplateColumns: {
        9: 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-1': 'span 2 / span 2',
        'span-1.5': 'span 3 / span 3',
        'span-2': 'span 4 / span 4',
        'span-2.5': 'span 5 / span 5',
        'span-3': 'span 6 / span 6',
        'span-3.5': 'span 7 / span 7',
        'span-4': 'span 8 / span 8',
        'span-4.5': 'span 9 / span 9',
        'span-5': 'span 10 / span 10',
        'span-5.5': 'span 11 / span 11',
        'span-6': 'span 12 / span 12',
        'span-6.5': 'span 13 / span 13',
        'span-7': 'span 14 / span 14',
        'span-7.5': 'span 15 / span 15',
        'span-8': 'span 16 / span 16',
        'span-8.5': 'span 17 / span 17',
        'span-9': 'span 18 / span 18',
      },

      gridColumnStart: {
        0.5: '2',
        1: '3',
        1.5: '4',
        2: '5',
        2.5: '6',
        3: '7',
        3.5: '8',
        4: '9',
        4.5: '10',
        5: '11',
        5.5: '12',
        6: '13',
        6.5: '14',
        7: '15',
        7.5: '16',
        8: '17',
        8.5: '18',
        9: '19',
      },

      // must be in decreasing order
      screens: {
        // sm320: '320px',
        // sm375: '375px',
        '4xl': '2250px',
        '3xl': '1920px',
        '2xl': '1540px',
        sm425: { max: '425px' }, // max-width breakpoint
        sm375: { max: '375px' }, // max-width breakpoint
        sm320: { max: '320px' }, // max-width breakpoint
      },

      // By default the spacing scale is inherited by the
      // padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins.
      spacing: {
        1: '0.1rem',
        1.5: '0.15rem',
        2: '0.2rem',
        3: '0.3rem',
        4: '0.4rem',
        5: '0.5rem',
        6: '0.6rem',
        7: '0.7rem',
        8: '0.8rem',
        9: '0.9rem',
        10: '1rem',
        11: '1.1rem',
        12: '1.2rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        17: '1.7rem',
        18: '1.8rem',
        20: '2rem',
        23: '2.3rem',
        24: '2.4rem',
        25: '2.5rem',
        26: '2.6rem',
        27: '2.7rem',
        28: '2.8rem',
        30: '3rem',
        32: '3.2rem',
        35: '3.5rem',
        36: '3.6rem',
        38: '3.8rem',
        40: '4rem',
        42: '4.2rem',
        46: '4.6rem',
        50: '5rem',
        58: '5.8rem',
        60: '6rem',
        64: '6.4rem',
        65: '6.5rem',
        70: '7rem',
        72: '7.2rem',
        74: '7.4rem',
        76: '7.6rem',
        80: '8rem',
        85: '8.5rem',
        86: '8.6rem',
        90: '9rem',
        100: '10rem',
        110: '11rem',
        120: '12rem',
        130: '13rem',
        140: '14rem',
        150: '15rem',
        160: '16rem',
        170: '17rem',
        175: '17.5rem',
        180: '18rem',
        190: '19rem',
        200: '20rem',
        210: '21rem',
        220: '22rem',
        230: '23rem',
        240: '24rem',
        245: '24.5rem',
        250: '25rem',
        280: '28rem',
        290: '29rem',
        300: '30rem',
        340: '34rem',
        350: '35rem',
        380: '38rem',
        390: '39rem',
        400: '40rem',
        440: '44rem',
        500: '50rem',
        520: '52rem',
        580: '58rem',
        550: '55rem',
        600: '60rem',
        640: '64rem',
        900: '90rem',
        1000: '100rem',
        1050: '105rem',
      },

      width: {
        '1/9': '11.1111%',
        '2/9': '22.2222%',
        '3/9': '33.3333%',
        '4/9': '44.4444%',
        '5/9': '55.5555%',
        '6/9': '66.6666%',
        '7/9': '77.7777%',
        '8/9': '88.8888%',
      },

      minHeight: {
        40: '40rem',
        120: '12rem',
        140: '14rem',
        180: '18rem',
        300: '30rem',
      },

      minWidth: {
        auto: 'auto',
        '80vw': '80vw',
        300: '30rem',
        346: '34.6rem',
        390: '39rem',
        450: '45rem',
      },

      maxWidth: {
        '80vw': '80vw',
        300: '30rem',
        390: '39rem',
        440: '44rem',
        450: '45rem',
        720: '72rem',
        220: '220rem',
      },

      // custom color pallete imported from tailwind.scss
      colors: {
        primary: {
          DEFAULT: 'var(--primary)', // steel-blue
          light: 'var(--primary-light)', // light-steel-blue
        },
        secondary: 'var(--secondary)', // white
        background: 'var(--background)', // light-gray
        image: 'var(--image)', // light-gray 2
      },

      // FontSize & Line-Height Customization
      fontSize: {
        'xs-caption': ['0.8rem', '1.25'], // 8, 10
        'xss-A': ['1rem', '1.1'], //10
        'xss-B': ['1.1rem', '1.2'], //10

        'xs-A': ['1.2rem', '1.25'], // 12, 15
        'xs-B': ['1.2rem', '1.35'], // 12, 16.2
        'xs-C': ['1.3rem', '1.35'], // 13, 17.5

        'sm-A': ['1.4rem', '1.25'], // 14, 17.5
        'sm-B': ['1.4rem', '1.3'], // 14, 18.2
        'sm-C': ['1.4rem', '1.35'], // 14, 18.9

        base: ['1.6rem', '1.3'], // 16, 20.8
        'base-A': ['1.6rem', '1.35'], // 16, 21.6
        'base-B': ['1.6rem', '1'], // 16, 16

        lg: ['1.8rem', '1.3'], // 18, 23.4
        xl: ['1.9rem', '1.1'], // 19, 20.9

        '2xl-A': ['2rem', '1'], // 20, 20,
        '2xl-B': ['2rem', '0.79'], // 20, 15.8
        '2xl-C': ['2rem', '1.35'], // 20, 27
        // '2xl-D': ['2.2rem', ], //
        // '2xl-E': ['2.4rem', ], //
        '2xl-F': ['2.6rem', '1'], // 26, 26
        '2xl-G': ['2.8rem', '1.15'], // 28, 32

        '3xl-A': ['3rem', '1.1'], // 30, 33,
        '3xl-B': ['3.2rem', '1'], // 32, 32
        '3xl-C': ['3.2rem', '1.3'], // 32, 41.6
        '3xl-D': ['3.2rem', '0.9'], // 32, 28.2
        '3xl-E': ['3.2rem', '1.05'], // 32, 33.6
        '3xl-F': ['3.4rem', '1.1'], // 34,
        '3xl-G': ['3.6rem', '1.1'], // 36,
        // '3xl-H': ['3.8rem', '1.1'], // 38,

        '4xl-A': ['4rem', '1.1'], // 40, 44
        '4xl-B': ['4.4rem', '1'], // 44, 44
        '4xl-C': ['4.4rem', '1.1'], // 44, 48
        '4xl-D': ['4.8rem', '1'], // 48, 48
        '4xl-E': ['4.8rem', '1.1'], // 48, 52.8
        '4xl-F': ['4.8rem', '1.3'], // 48, 62.4

        '5xl': ['5.4rem', '1'], // 54, 54
        '6xl': ['8.3rem', '0.87'], // 83, 72.21
        '6xl-B': ['8.3rem', '0.9'], // 83, 74.7
        '6xl-C': ['9.4rem', '0.87'], // 94, 81.8
        '7xl': ['12rem', '0.9'], // 120, 108
        '8xl': ['14rem', '0.87'], // 140,121.8
        '9xl': ['17.5rem', '0.87'], // 175,152.25
      },

      letterSpacing: {
        '-8': '-0.08em',
        '-7': '-0.07em',
        '-6': '-0.06em',
        '-5.5': '-0.055em',
        '-5': '-0.05em',
        '-4.5': '-0.045em',
        '-4': '-0.04em',
        '-3': '-0.03em',
        '-1.5': '-0.015em',
      },
      textOpacity: ['active'],

      outline: {
        black: ['2px solid var(--primary)', '2px'],
        white: ['2px solid var(--secondary)', '2px'],
      },

      transitionTimingFunction: {
        'out-bigd': 'cubic-bezier(0,0,.2,1)',
        'in-bigd': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-out-bigd': 'cubic-bezier(.8,0,.2,1)',
      },

      transitionDuration: {
        1100: '1100ms',
        1200: '1200ms',
        1300: '1300ms',
        1400: '1400ms',
        1500: '1500ms',
        1600: '1600ms',
        1700: '1700ms',
        1800: '1800ms',
        1900: '1900ms',
        2000: '2000ms',
      },
    },
    fontFamily: {
      sans: '"Good Sans","ABC Monument Grotesk"',
      monumentGrotesk: 'ABC Monument Grotesk', // for headings that use Good Sans by default
    },
    aspectRatio: {
      1: '1',
      1.5: '1.5',
      2: '2',
      2.5: '2.5',
      3: '3',
      3.5: '3.5',
      4: '4',
      4.5: '4.5',
      5: '5',
      5.5: '5.5',
      6: '6',
      6.5: '6.5',
      7: '7',
      7.5: '7.5',
      8: '8',
      8.5: '8.5',
      9: '9',
      9.5: '9.5',
      10: '10',
      10.5: '10.5',
      11: '11',
      11.5: '11.5',
      12: '12',
      12.5: '12.5',
      13: '13',
      13.5: '13.5',
      14: '14',
      14.5: '14.5',
      15: '15',
      15.5: '15.5',
      16: '16',
      16.5: '16.5',
    },
  },
  variants: {
    fill: ['hover', 'focus'], // SVG hover - fill effect
    extend: {
      borderWidth: ['first', 'last'],
      outline: ['responsive', 'focus-within', 'focus', 'focus-visible'],
      padding: ['first', 'last'],
    },
  },
  keyframes: {
    buttonarrowhover: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  mode: 'jit', // experimental beta feature
}
