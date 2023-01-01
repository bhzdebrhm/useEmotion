//@ts-ignore
import { isReadable, random, readability, TinyColor, WCAG2Parms } from '@ctrl/tinycolor';

import { Dict, get } from '@bhzdebrhm/utils';

/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path
 * @param fallback - the fallback color
 */
export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color)
  const { isValid } = new TinyColor(hex)
  return isValid ? hex : fallback
}


/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param opacity - the amount of opacity the color should have (0-1)
 */
export const transparentize =
  (color: string, opacity: number) => (theme: Dict) => {
    const raw = getColor(theme, color)
    return new TinyColor(raw).setAlpha(opacity).toRgbString()
  }
