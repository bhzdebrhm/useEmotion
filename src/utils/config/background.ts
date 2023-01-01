import * as CSS from "csstype"
import type { Config } from "../utils/prop-config"
import { t, Token, transforms } from "../utils"

export const background: Config = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transforms.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transforms.bgClip },
  backgroundGradient: t.propT("backgroundImage", transforms.gradient),
}

Object.assign(background, {
  backgroundImage: background.backgroundImage,
  backgroundImg: background.backgroundImage,
})

export interface BackgroundProps {
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: Token<CSS.Property.BackgroundClip | "text">
  /**
   * The CSS `background` property
   */
  background?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: Token<CSS.Property.Color, "colors">
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: Token<CSS.Property.BackgroundImage>
  /**
   * The background-gradient shorthand
   */
  backgroundGradient?: Token<CSS.Property.BackgroundImage>
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: Token<CSS.Property.BackgroundSize | number>
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: Token<CSS.Property.BackgroundPosition | number>
  /**
   * The CSS `background-image` property
   */
  backgroundImg?: Token<CSS.Property.BackgroundImage>
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>
}
