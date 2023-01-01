/**
 * run time Types: these are types of colors at run time, use these keys to apply 
 * colors. 
 * system prepended colors dynamicly change based on color mode
*/
// systemBackground.primary --> for base layer backgound
// systemBackground.secondary --> for backgound layered on primary backgrounded element
// systemBackground.tertiary --> for backgound layered on secondary backgrounded color
// systemBlackOrWhite --> black on dark mode, white on light mode
// systemBlackOrWhiteReverse --> white on dark mode, dark on light mode
// systemFill.primary
// systemFill.quaternary
// systemFill.secondary
// systemFill.tertiary
// systemGray.one
// systemGray.two
// systemGray.three
// systemGray.four
// systemGray.five
// systemGray.six
// systemLabel.primary
// systemLabel.quaternary
// systemLabel.secondary
// systemLabel.tertiary
// systemSeperator.noTransparency
// systemSeperator.withTransparency
// systemBlue
// systemBrown
// systemCurrent
// systemCyan
// systemGreen
// systemIndigo
// systemMint
// systemOrange
// systemPink
// systemPurple
// systemRed
// systemTeal
// systemTransparent
// systemYellow
// black
// white

const colors = {
  default /* light */: {
    systemBrandColor: "rgb(42, 57, 144)",
    transparent: "transparent",
    current: "currentColor",
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)",
    systemBlackOrWhite: "rgb(255, 255, 255)",
    systemBlackOrWhiteReverse: {
      1000: "rgba(0, 0, 0, 1)",
      700: "rgba(0, 0, 0, 700)"
    },
    systemRed: {
      1000: "rgba(255, 59, 48, 1)",
      900: "rgba(255, 59, 48, 0.9)",
      700: "rgba(255, 59, 48, 0.7)",
      600: "rgba(255, 59, 48, 0.6)",
      500: "rgba(255, 59, 48, 0.5)",
      300: "rgba(255, 59, 48, 0.3)",
      200: "rgba(255, 59, 48, 0.2)",
      100: "rgba(255, 59, 48, 0.1)"
    },
    systemOrange: {
      1000: "rgb(255, 149, 0)",
      900: "rgba(255, 149, 0, 0.9)",
      800: "rgba(255, 149, 0, 0.8)",
      700: "rgba(255, 149, 0, 0.7)",
      600: "rgba(255, 149, 0, 0.6)",
      500: "rgba(255, 149, 0, 0.5)",
      400: "rgba(255, 149, 0, 0.4)",
      300: "rgba(255, 149, 0, 0.3)",
      200: "rgba(255, 149, 0, 0.2)",
      100: "rgba(255, 149, 0, 0.1)",
    },
    systemYellow: {
      1000: "rgba(255, 204, 0, 1)",
      500: "rgba(255, 204, 0, 0.5)",
      300: "rgba(255, 204, 0, 0.3)",
      200: "rgba(255, 204, 0, 0.2)",
      100: "rgba(255, 204, 0, 0.1)",
    },
    systemGreen: {
      1000: "rgba(52, 199, 89, 1)",
      900: "rgba(52, 199, 89, 0.9)",
      600: "rgba(52, 199, 89, 0.6)",
      700: "rgba(52, 199, 89, 0.7)",
      500: "rgba(52, 199, 89, 0.5)",
      300: "rgba(52, 199, 89, 0.3)",
      200: "rgba(52, 199, 89, 0.2)",
      100: "rgba(52, 199, 89, 0.1)",
    },
    systemMint: "rgb(0, 199, 190)",
    systemTeal: "rgb(48, 176, 199)",
    systemCyan: {
      1000: "rgba(50, 173, 230, 1)",
      700: "rgba(50, 173, 230, 0.7)",
      200: "rgba(50, 173, 230, 0.2)",
    },
    systemBlue: {
      1000: "rgba(0, 122, 255, 1)",
      900: "rgba(0, 122, 255, 0.9)",
      800: "rgba(0, 122, 255, 0.8)",
      700: "rgba(0, 122, 255, 0.7)",
      500: "rgba(0, 122, 255, 0.5)",
    },
    systemIndigo: "rgb(88, 86, 214)",
    systemPurple: "rgb(175, 82, 222)",
    systemPink: "rgb(255, 45, 85)",
    systemBrown: "rgb(162, 132, 94)",
    systemGray: {
      one: {
        1000: "rgb(142, 142, 147)",
        700: "rgba(142, 142, 147, 0.7)",
        100: "rgba(142, 142, 147, 0.1)",
      },
      two: {
        1000: "rgba(174, 174, 178, 1)",
        700: "rgba(174, 174, 178, 0.7)",
        100: "rgba(174, 174, 178, 0.1)"
      },
      three: "rgb(199, 199, 204)",
      four: "rgb(209, 209, 214)",
      five: "rgb(229, 229, 234)",
      six: "rgb(242, 242, 247)"
    },
    systemBackground: {
      primary: "rgba(240, 242, 245, 1)",
      secondary: {
        1000: "rgba(255, 255, 255, 1)",
        900: "rgba(255, 255, 255, 0.9)",
        700: "rgba(255, 255, 255, 0.7)",
        600: "rgba(255, 255, 255, 0.6)",
        500: "rgba(255, 255, 255, 0.5)",
        400: "rgba(255, 255, 255, 0.4)",
        300: "rgba(255, 255, 255, 0.3)",
        200: "rgba(255, 255, 255, 0.2)",
        100: "rgba(255, 255, 255, 0.1)"
      },
      tertiary: {
        1000: "rgba(247, 248, 250, 1)",
        900: "rgba(247, 248, 250, 0.9)",
        800: "rgba(247, 248, 250, 0.8)",
        700: "rgba(247, 248, 250, 0.7)",
        500: "rgba(247, 248, 250, 0.5)",
        300: "rgba(247, 248, 250, 0.3)",
      },
      quaternary: "rgba(250,250,253,1)"
    },
    systemIcon: {
      primary: "rgba(228, 230, 234, 1)",
      secondary: "rgba(101, 103, 107, 1)"
    },
    systemButton: {
      primary: "rgba(231, 243, 255, 1)",
      secondary: "rgba(228 ,230, 235, 1)",
    },
    hoverOverly: "rgba(0, 0, 0, 0.05)",
    systemBorder: "rgba(228, 230, 235, 1)",
    systemSeperator: "rgba(206, 208, 212, 1)",
    systemLabel: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(138, 138, 142, 1)",
      tertiary: "rgba(191, 191, 193, 1)",
      quaternary: "rgba(120, 120, 121, 1)"
    },

  },
  dark: {
    systemBlackOrWhite: "rgb(0, 0, 0)",
    systemBlackOrWhiteReverse: {
      1000: "rgba(255, 255, 255, 1)",
      700: "rgba(255, 255, 255, 700)",
    },
    systemRed: {
      1000: "rgba(255, 69, 58, 1)",
      900: "rgba(255, 69, 58, 0.9)",
      700: "rgba(255, 69, 58, 0.7)",
      600: "rgba(255, 69, 58, 0.6)",
      500: "rgba(255, 69, 58, 0.5)",
      300: "rgba(255, 69, 58, 0.3)",
      200: "rgba(255, 69, 58, 0.2)",
      100: "rgba(255, 69, 58, 0.1)",
    },
    systemOrange: {
      1000: "rgb(255, 159, 10)",
      900: "rgba(255, 159, 10, 0.9)",
      800: "rgba(255, 159, 10, 0.8)",
      700: "rgba(255, 159, 10, 0.7)",
      600: "rgba(255, 159, 10, 0.6)",
      500: "rgba(255, 159, 10, 0.5)",
      400: "rgba(255, 159, 10, 0.4)",
      300: "rgba(255, 159, 10, 0.3)",
      200: "rgba(255, 159, 10, 0.2)",
      100: "rgba(255, 159, 10, 0.1)",
    },
    systemYellow: {
      1000: "rgba(255, 214, 10, 1)",
      500: "rgba(255, 214, 10, 0.5)",
      300: "rgba(255, 214, 10, 0.3)",
      200: "rgba(255, 214, 10, 0.2)",
      100: "rgba(255, 214, 10, 0.1)",
    },
    systemGreen: {
      1000: "rgba(48, 209, 88, 1)",
      900: "rgba(48, 209, 88, 0.9)",
      600: "rgba(48, 209, 88, 0.6)",
      700: "rgba(48, 209, 88, 0.7)",
      500: "rgba(48, 209, 88, 0.5)",
      300: "rgba(48, 209, 88, 0.3)",
      200: "rgba(48, 209, 88, 0.2)",
      100: "rgba(48, 209, 88, 0.1)",
    },
    systemMint: "rgb(102, 212, 207)",
    systemTeal: "rgb(64, 200, 224)",
    systemCyan: {
      1000: "rgba(100, 210, 255, 1)",
      700: "rgba(100, 210, 255, 0.7)",
      200: "rgba(100, 210, 255, 0.2)",
    },
    systemBlue: {
      1000: "rgba(10, 132, 255, 1)",
      900: "rgba(10, 132, 255, 0.9)",
      800: "rgba(10, 132, 255, 0.8)",
      700: "rgba(10, 132, 255, 0.7)",
      500: "rgba(10, 132, 255, 0.5)",
    },
    systemIndigo: "rgb(94, 92, 230)",
    systemPurple: "rgb(191, 90, 242)",
    systemPink: "rgba(255, 55, 95)",
    systemBrown: "rgb(172, 142, 104)",
    systemGray: {
      one: {
        1000: "rgb(142, 142, 147)",
        700: "rgba(142, 142, 147, 0.7)",
        100: "rgba(142, 142, 147, 0.1)",
      },
      two: {
        1000: "rgba(99, 99, 102, 1)",
        700: "rgba(99, 99, 102, 0.7)",
        100: "rgba(99, 99, 102, 0.1)",
      },
      three: "rgb(72, 72, 74)",
      four: "rgb(58, 58, 60)",
      five: "rgb(44, 44, 46)",
      six: "rgb(28, 28, 30)"
    },
    systemBackground: {
      primary: "rgba(24, 25, 26, 1)",
      secondary: {
        1000: "rgba(36, 37, 38, 1)",
        900: "rgba(36, 37, 38, 0.9)",
        700: "rgba(36, 37, 38, 0.7)",
        600: "rgba(36, 37, 38, 0.6)",
        500: "rgba(36, 37, 38, 0.5)",
        400: "rgba(36, 37, 38, 0.4)",
        300: "rgba(36, 37, 38, 0.3)",
        200: "rgba(36, 37, 38, 0.2)",
        100: "rgba(36, 37, 38, 0.1)",
      },
      tertiary: {
        1000: "rgba(50, 52, 54, 1)",
        900: "rgba(50, 52, 54, 0.9)",
        500: "rgba(50, 52, 54, 0.5)",
        300: "rgba(50, 52, 54, 0.3)",
      },
      quaternary: "rgba(60,60,63,1)"

    },
    systemBorder: "rgba(62, 64, 66, 1)",
    systemSeperator: "rgba(62, 64, 66, 1)",
    systemIcon: {
      primary: "rgba(29, 31, 35, 1)",
      secondary: "rgba(176, 179, 184, 1)"
    },
    systemButton: {
      primary: "rgba(45, 136, 255, 0.2)",
      secondary: "rgba(225, 225, 255, 0.1)",
    },
    hoverOverly: "rgba(255, 255, 255, 0.1)",
    systemLabel: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(243, 243, 249, 1)",
      tertiary: "rgba(249, 249, 252, 1)",
      quaternary: "rgba(251, 251, 253, 1)"
    },
  },

}

export default colors
