import { merge } from 'lodash';
export const filterRawThemeColorMode = (rawTheme: any, colorMode: string) => {
    return {
        ...rawTheme,
        colors: colorMode === "light" ?
            rawTheme.colors.default :
            merge({}, rawTheme.colors.default, rawTheme.colors.dark),
        shadows: colorMode === "light" ?
            rawTheme.shadows.default :
            merge({}, rawTheme.shadows.default, rawTheme.shadows.dark),
    }
}