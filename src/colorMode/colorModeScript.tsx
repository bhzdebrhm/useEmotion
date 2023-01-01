import * as React from "react"
import { ColorMode, ConfigColorMode } from "./colorModeProvider"

export function setScript(initialValue: ConfigColorMode) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const systemPreference = mql.matches ? "dark" : "light"

  let persistedPreference: ColorMode = systemPreference

  try {
    persistedPreference = localStorage.getItem(
      "style-color-mode",
    ) as ColorMode
  } catch (error) {
    console.log(
      "localStorage is not available. Color mode persistence might not work as expected",
    )
  }

  let colorMode: ColorMode

  if (persistedPreference) {
    colorMode = persistedPreference
  } else if (initialValue === "system") {
    colorMode = systemPreference
  } else {
    colorMode = initialValue ?? systemPreference
  }

  if (colorMode) {
    /**
     * Keep in sync with `root.set() {@file ./color-mode.utils.ts}
     */
    document.documentElement.setAttribute("data-theme", colorMode)
  }
}

interface ColorModeScriptProps {
  initialColorMode?: ConfigColorMode
  /**
   * Optional nonce that will be passed to the created `<script>` tag.
   */
  nonce?: string
}

/**
 * Script to add to the root of your application when using localStorage,
 * to help prevent flash of color mode that can happen during page load.
 */
export const ColorModeScript = (props: ColorModeScriptProps) => {
  let { initialColorMode = "light" } = props

  // Runtime safeguard against invalid color mode values.
  const validColorModeValues = ["dark", "light", "system"] as const
  if (!validColorModeValues.includes(initialColorMode)) {
    initialColorMode = "light"
  }

  const html = `(${String(setScript)})('${initialColorMode}')`
  return (
    <script nonce={props.nonce} dangerouslySetInnerHTML={{ __html: html }} />
  )
}
