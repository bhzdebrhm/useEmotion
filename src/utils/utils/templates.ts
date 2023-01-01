/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  "rotate(var(--style-rotate, 0))",
  "scaleX(var(--style-scale-x, 1))",
  "scaleY(var(--style-scale-y, 1))",
  "skewX(var(--style-skew-x, 0))",
  "skewY(var(--style-skew-y, 0))",
]

export function getTransformTemplate() {
  return [
    "translateX(var(--style-translate-x, 0))",
    "translateY(var(--style-translate-y, 0))",
    ...transformTemplate,
  ].join(" ")
}

export function getTransformGpuTemplate() {
  return [
    "translate3d(var(--style-translate-x, 0), var(--style-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ")
}

export const filterTemplate = {
  "--style-blur": "var(--style-empty,/*!*/ /*!*/)",
  "--style-brightness": "var(--style-empty,/*!*/ /*!*/)",
  "--style-contrast": "var(--style-empty,/*!*/ /*!*/)",
  "--style-grayscale": "var(--style-empty,/*!*/ /*!*/)",
  "--style-hue-rotate": "var(--style-empty,/*!*/ /*!*/)",
  "--style-invert": "var(--style-empty,/*!*/ /*!*/)",
  "--style-saturate": "var(--style-empty,/*!*/ /*!*/)",
  "--style-sepia": "var(--style-empty,/*!*/ /*!*/)",
  "--style-drop-shadow": "var(--style-empty,/*!*/ /*!*/)",
  filter: [
    "var(--style-blur)",
    "var(--style-brightness)",
    "var(--style-contrast)",
    "var(--style-grayscale)",
    "var(--style-hue-rotate)",
    "var(--style-invert)",
    "var(--style-saturate)",
    "var(--style-sepia)",
    "var(--style-drop-shadow)",
  ].join(" "),
}

export const backdropFilterTemplate = {
  backdropFilter: [
    "var(--style-backdrop-blur)",
    "var(--style-backdrop-brightness)",
    "var(--style-backdrop-contrast)",
    "var(--style-backdrop-grayscale)",
    "var(--style-backdrop-hue-rotate)",
    "var(--style-backdrop-invert)",
    "var(--style-backdrop-opacity)",
    "var(--style-backdrop-saturate)",
    "var(--style-backdrop-sepia)",
  ].join(" "),
  "--style-backdrop-blur": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-brightness": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-contrast": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-grayscale": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-hue-rotate": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-invert": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-opacity": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-saturate": "var(--style-empty,/*!*/ /*!*/)",
  "--style-backdrop-sepia": "var(--style-empty,/*!*/ /*!*/)",
}

export function getRingTemplate(value: any) {
  return {
    "--style-ring-offset-shadow": `var(--style-ring-inset) 0 0 0 var(--style-ring-offset-width) var(--style-ring-offset-color)`,
    "--style-ring-shadow": `var(--style-ring-inset) 0 0 0 calc(var(--style-ring-width) + var(--style-ring-offset-width)) var(--style-ring-color)`,
    "--style-ring-width": value,
    boxShadow: [
      `var(--style-ring-offset-shadow)`,
      `var(--style-ring-shadow)`,
      `var(--style-shadow, 0 0 #0000)`,
    ].join(", "),
  }
}

export const flexDirectionTemplate = {
  "row-reverse": {
    space: "--style-space-x-reverse",
    divide: "--style-divide-x-reverse",
  },
  "column-reverse": {
    space: "--style-space-y-reverse",
    divide: "--style-divide-y-reverse",
  },
}

const owlSelector = "& > :not(style) ~ :not(style)"

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      "calc(var(--style-space-x) * calc(1 - var(--style-space-x-reverse)))",
    marginInlineEnd:
      "calc(var(--style-space-x) * var(--style-space-x-reverse))",
  },
}

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      "calc(var(--style-space-y) * calc(1 - var(--style-space-y-reverse)))",
    marginBottom: "calc(var(--style-space-y) * var(--style-space-y-reverse))",
  },
}
