import * as CSS from "csstype"
import { Config } from "../utils/prop-config"
import { Length, Token, t, transforms } from "../utils"

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur("--style-blur"),
  brightness: t.propT("--style-brightness", transforms.brightness),
  contrast: t.propT("--style-contrast", transforms.contrast),
  hueRotate: t.degreeT("--style-hue-rotate"),
  invert: t.propT("--style-invert", transforms.invert),
  saturate: t.propT("--style-saturate", transforms.saturate),
  dropShadow: t.propT("--style-drop-shadow", transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur("--style-backdrop-blur"),
  backdropBrightness: t.propT(
    "--style-backdrop-brightness",
    transforms.brightness,
  ),
  backdropContrast: t.propT("--style-backdrop-contrast", transforms.contrast),
  backdropHueRotate: t.degreeT("--style-backdrop-hue-rotate"),
  backdropInvert: t.propT("--style-backdrop-invert", transforms.invert),
  backdropSaturate: t.propT("--style-backdrop-saturate", transforms.saturate),
}

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * style UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | "auto">
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--style-filter` css variable
   */
  blur?: Token<{}, "blur">
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--style-brightness` css variable
   */
  brightness?: Token<Length>
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--style-contrast` css variable
   */
  contrast?: Token<Length>
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--style-hue-rotate` css variable
   */
  hueRotate?: Token<Length>
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--style-invert` css variable
   */
  invert?: Token<Length>
  /**
   * Sets the saturation filter value of an element.
   * Value is assigned to `--style-saturate` css variable
   */
  saturate?: Token<Length>
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--style-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, "shadows">
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * style UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--style-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, "blur">
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--style-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--style-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--style-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--style-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--style-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>
}
