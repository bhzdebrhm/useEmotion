
import {pick} from 'lodash';
// breakpoints ?
// components ? 
// configs ?
// direction ?
// styles ? 
const tokens = [
    "colors", 
    "borders", 
    "borderWidths",
    "borderStyles",
    "fonts",  
    "fontSizes",  
    "fontWeights",  
    "letterSpacings",  
    "lineHeights",  
    "raduis",  
    "space",  
    "shadows",  
    "sizes",  
    "zIndices",  
    "transition",  
    "blur",  
  ] as const

  export type ThemeScale =
  | typeof tokens[number]
  | "transition.duration"
  | "transition.property"
  | "transition.easing"


export const extractTokens = (theme: any) => {
    const _tokens = tokens as unknown as Array<string>;
    return pick(theme, _tokens)
}


export const extractSemanticTokens = (theme: any) => {
    return theme.semanticTokens;
}



export const omitVars: any = (rawTheme: any) => {
    const {__cssMap, __cssVars, __breakpoints, ...cleanTheme} = rawTheme;
    return cleanTheme;
}