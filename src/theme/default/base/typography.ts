
export type FontSizes = "headLine" | "title" | "subTitle" | "body" | "caption" | "button" | "dataInput.value" | "dataInput.label" | "small"
export type FontWeights = "bold" | 'regular';
export type LetterSpacings = "letterSpacings.tighter" | "letterSpacings.tight" | "letterSpacings.normal" | "letterSpacings.wide" | "letterSpacings.wider" | "letterSpacings.widest"
export type LineHeights = "normal" | "none" | "shorter" | "short" | "base" | "tall" | "taller";

const typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },

  fontWeights: {
    bold: 700,
    regular: 400,
  },

  fonts: {
    iranYekan: "IRANYekan"
  },

  fontSizes: {
    headLine: "3rem",
    title: "1.5rem",
    subTitle: "1.25rem",
    body: "1rem",
    caption: "0.75rem",
    small: "0.6rem",
    button: "0.875rem",
    dataInput: {
      value: "0.75rem",
      label: "0.75rem"
    }
  }

}

export default typography
