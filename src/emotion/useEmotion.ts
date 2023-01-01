import { Updater, useImmer } from '@bhzdebrhm/react-hooks';
import React, { DependencyList } from 'react';
import { computeCss } from '../utils';

import { useTheme } from '..';
import instance from './instance';

export function useEmotion<S extends Record<string, unknown> | React.CSSProperties>(styles: S, deps: DependencyList | undefined = []): [string, Updater<S>] {
    const [localStyle, setLocalStyles] = useImmer(styles, deps);
    const theme = useTheme();
    
    const css = React.useMemo(() => {
        const computedCss = computeCss(localStyle)(theme);
        const css = instance.css`${computedCss}`;
        return css;
    }, [theme, localStyle]);


    React.useInsertionEffect(() => {
        css[1]();
    }, [css])


    return [css[0], setLocalStyles]
}