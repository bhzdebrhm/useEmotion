import { localStorageManager } from '../colorMode';
import { syncBodyClassName } from '../colorMode/colorModeUtils';
import { injectGlobal } from '../emotion/usePreloadedEmotion';
import { computeTheme, filterRawThemeColorMode } from '../utils';
import { theme } from './default';

//* initialization


interface ThemeConfigsOptions  {
    mode?: "dark" | "light"
}

export const initTheme = (theme: any, options?: ThemeConfigsOptions) => {
    const colorModeManager = localStorageManager
    const colorMode = options?.mode ? options?.mode : colorModeManager.get();
    const isDark = colorMode === "dark"
    syncBodyClassName(isDark, window.document);
    colorMode && colorModeManager.set(colorMode)
    const filtered = filterRawThemeColorMode(theme, colorMode || "light");
    const computed = computeTheme(filtered);
    const root = ":host, :root" ;
    const selector = [root, `[data-theme]`].join(",");
    injectGlobal({ [selector]: computed.__cssVars });
    return {
        theme: computed,
        options: {...options, mode: colorMode}
    };
}


export function reInitTheme(nextOptions: ThemeConfigsOptions) {
    initTheme(theme, nextOptions);
}

export default initTheme(theme);


