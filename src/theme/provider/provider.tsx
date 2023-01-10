import React from 'react';

import {
    Global, Interpolation, ThemeProviderProps as EmotionThemeProviderProps
} from '@emotion/react';

import { Dict, get, runIfFn } from '@bhzdebrhm/utils';
import { useColorMode } from '../../colorMode';
import { computeCss, computeTheme, filterRawThemeColorMode, WithCSSVar } from '../../utils';
import { Fonts } from '../default/Fonts';
import { ThemeProviderContext } from './context';

export interface ThemeProviderProps extends EmotionThemeProviderProps {
    cssVariables?: string,
    globalStyles?: boolean
}

export function useTheme<T extends object = Dict>() {
    const theme = React.useContext(
        ThemeProviderContext as unknown as React.Context<T | undefined>,
    );
    if (!theme) {
        //
    }

    return theme as WithCSSVar<T>
}


export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    const { cssVariables, theme, children, globalStyles } = props;
    const { colorMode } = useColorMode()

    const filteredByColor = React.useMemo(
        () => filterRawThemeColorMode(theme, colorMode),
        [theme, colorMode]
    );

    const computedTheme = React.useMemo(() =>
     computeTheme(filteredByColor),
      [filteredByColor])

        return (
            <ThemeProviderContext.Provider value={computedTheme}>
                <CSSVars root={cssVariables} />
                    {globalStyles && <GlobalStyle />}
                    {globalStyles && <Fonts />}
                    {children}
            </ThemeProviderContext.Provider>
    )

}


export const CSSVars = ({ root = ":host, :root" }: any) => {
    const theme = useTheme();
    /**
     * Append color mode selector to allow semantic tokens to change according to the color mode
     */
    const selector = [root, `[data-theme]`].join(",")
    return <Global styles={{ [selector]: theme.__cssVars }} />
};




/**
 * Applies styles defined in `theme.styles.global` globally
 * using emotion's `Global` component
 */
export const GlobalStyle = () => {
    const { colorMode } = useColorMode();
    const theme = useTheme();
    return (
        <Global
            styles={() => {
                const styleObjectOrFn = get(theme, "styles.global");
                const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode })
                if (!globalStyles) return undefined
                const styles = computeCss(globalStyles)(theme);
                return styles as Interpolation<{}>
            }}
        />
    )
}