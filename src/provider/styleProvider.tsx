import React from 'react';
import { ColorModeProvider, useColorMode } from '../colorMode';
import { CSSReset } from '../cssReset';
import { ThemeProvider, useTheme, theme as theme_} from '../theme';


interface StyleProviderProps {
    colorModeManager?: any;
    portalZIndex?: any;
    resetCSS?: boolean;
    theme?: any,
    environment?: any
    cssVariables?: any,
    globalStyles?: boolean,
    children?: React.ReactElement,
}


export const StyleProvider: React.FC<StyleProviderProps> = (props): React.ReactElement => {
    const {
        colorModeManager,
        resetCSS,
        theme,
        globalStyles = true,
        cssVariables,
        children
    } = props;


    const mergedTheme = React.useMemo(() => {
        return theme || theme_
    }, [theme]);


    return (
        <React.Fragment>
            {resetCSS && <CSSReset />}
            <ColorModeProvider
                options={mergedTheme.config}
                colorModeManager={colorModeManager}
            >
                <ThemeProvider
                    theme={mergedTheme}
                    globalStyles={globalStyles}
                    cssVariables={cssVariables}
                >
                    {children}
                </ThemeProvider>
            </ColorModeProvider>
        </React.Fragment>
    )
};

export const useStyleContext = () => {
    const theme = useTheme();
    const { colorMode } = useColorMode();
    return { theme, colorMode };
}