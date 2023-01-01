// import { useEnvironment } from "react-env"
import React from 'react';

import { __DEV__, isBrowser, noop } from '@bhzdebrhm/utils';
import { addListener, ColorMode, root, syncBodyClassName } from './colorModeUtils';
import { localStorageManager, StorageManager } from './storageManager';

type ConfigColorMode = ColorMode | "system" | undefined
export type { ColorMode, ConfigColorMode }

export interface ColorModeOptions {
  initialColorMode?: ConfigColorMode
  useSystemColorMode?: boolean
}

interface ColorModeContextType {
  colorMode: ColorMode
  toggleColorMode: () => void
  setColorMode: (value: any) => void
}




export const ColorModeContext: any = React.createContext({} as any);


if (__DEV__) {
  ColorModeContext.displayName = "ColorModeContext"
}

/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export const useColorMode = () => {
  const context: any = React.useContext(ColorModeContext)
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider")
  }
  return context
}

export interface ColorModeProviderProps {
  value?: ColorMode
  children?: React.ReactNode
  options: ColorModeOptions
  colorModeManager?: StorageManager
}




/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export const ColorModeProvider = (props: ColorModeProviderProps) => {
  const {
    value,
    children,
    options: { useSystemColorMode, initialColorMode },
    colorModeManager = localStorageManager,
  } = props;

  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";



  /**
   * Only attempt to retrieve if we're on the server. Else this will result
   * in a hydration mismatch warning and partially invalid visuals.
   *
   * Else fallback safely to `theme.config.initialColormode` (default light)
   */
  const [colorMode, rawSetColorMode] = React.useState<ColorMode | undefined>(
    colorModeManager.type === "cookie"
      ? colorModeManager.get(defaultColorMode)
      : defaultColorMode,
  )

  // TODO: use useEnvoinment instead
  const document = window.document;


  React.useEffect(() => {
    if (isBrowser && colorModeManager.type === 'localStorage') {
      const rootGet = root.get();
      const colorManagerGet = colorModeManager.get();
      if (colorManagerGet) {
        return rawSetColorMode(colorManagerGet)
      };
      if (rootGet) {
        return rawSetColorMode(rootGet)
      };
      return rawSetColorMode(defaultColorMode)
    }
  }, [colorModeManager, useSystemColorMode, defaultColorMode, initialColorMode]);


  /**
   * on colorMode change reflect change to:
   *  date-theme <html> tag 
   *  class <body> tag 
   */
  React.useEffect(() => {
    const isDark = colorMode === "dark"
    syncBodyClassName(isDark, document)
    root.set(isDark ? "dark" : "light")
  }, [colorMode, document]);

  const setColorMode = React.useCallback(
    (value: ColorMode, isListenerEvent = false) => {
      if (!isListenerEvent) {
        colorModeManager.set(value)
      } else if (colorModeManager.get() && !useSystemColorMode) return

      rawSetColorMode(value)
    },
    [colorModeManager, useSystemColorMode],
  )

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }, [colorMode, setColorMode])


  React.useEffect(() => {
    const shouldUseSystemListener =
      useSystemColorMode || initialColorMode === "system"
    let removeListener: any
    if (shouldUseSystemListener) {
      removeListener = addListener(setColorMode)
    }
    return () => {
      if (removeListener && shouldUseSystemListener) {
        removeListener()
      }
    }
  }, [setColorMode, useSystemColorMode, initialColorMode])


  // presence of `value` indicates a controlled context
  const context = React.useMemo(
    () => ({
      colorMode: (value ?? colorMode) as ColorMode,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
    }),
    [colorMode, setColorMode, toggleColorMode, value],
  )


  return (
    <ColorModeContext.Provider value={context}>
      {children}
    </ColorModeContext.Provider>
  )


}

if (__DEV__) {
  ColorModeProvider.displayName = "ColorModeProvider"
}


/**
* Locks the color mode to `dark`, without any way to change it.
*/
export const DarkMode = (props: React.PropsWithChildren<{}>) => {
  const context = React.useMemo<ColorModeContextType>(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
    }),
    [],
  )

  return <ColorModeContext.Provider value={context} {...props} />
}

if (__DEV__) {
  DarkMode.displayName = "DarkMode"
}


/**
* Locks the color mode to `light` without any way to change it.
*/
export const LightMode = (props: React.PropsWithChildren<{}>) => {
  const context = React.useMemo<ColorModeContextType>(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
    }),
    [],
  )

  return <ColorModeContext.Provider value={context} {...props} />
}

if (__DEV__) {
  LightMode.displayName = "LightMode"
}


/**
* Change value based on color mode.
*
* @param light the light mode value
* @param dark the dark mode value
*
* @example
*
* ```js
* const Icon = useColorModeValue(MoonIcon, SunIcon)
* ```
*/
export function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark,
) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}
