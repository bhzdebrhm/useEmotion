
import { omitVars, extractTokens, extractSemanticTokens, } from './themeTokens';
import { flattenTokens } from './flattenTokens';
import { createThemeVars } from './createThemeVars';
import { analyzeBreakpoints } from '@bhzdebrhm/utils';

export const computeTheme: any = (rawTheme: any) => {
  const theme = omitVars(rawTheme);

  /**
   * exmp : {
   * blur: {...},
   * colors: {
   * blue: {
   *   ...
   * }
   * }
   * }
   */

  // extract values to create theme vars from
  const tokens = extractTokens(theme);

  const semanticTokens = extractSemanticTokens(theme);

  const flatTokens = flattenTokens({ tokens, semanticTokens });

  const cssVarPrefix = theme.config?.cssVarPrefix;

  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars,
  } = createThemeVars(flatTokens, { cssVarPrefix });

  const defaultCssVars: any = {
    "--tmgic-css-variables": "var(--HELLO-DEVS,/* !(- -)! */)",
  }


  Object.assign(theme, {
    __cssVars: { ...defaultCssVars, ...cssVars },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme.breakpoints),
  })

  return theme as any
}