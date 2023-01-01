import { isObject } from "lodash"
export const requiredThemeKeys: (keyof any)[] = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "raduis",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
]

export function isTheme(unit: unknown): unit is any {
  if (!isObject(unit)) {
    return false
  }

  return requiredThemeKeys.every((propertyName) =>
    Object.prototype.hasOwnProperty.call(unit, propertyName),
  )
}
