import React from 'react';
import { WithCSSVar, computeCss } from '../utils';
import useState from 'react-usestateref'

import instance from './instance';
import { Dict, runIfFn } from '@bhzdebrhm/utils';
import {useCustomCompareEffect} from '@bhzdebrhm/react-hooks';
import { isEqual } from 'lodash';
import { useTheme } from '../theme';


export type StyleRef<V, T> = {
    ref: {
        className: string,
        attach: () => void,
    },
    loadStyle:(internalVariables?: V, internalTheme?: T) => StyleRef<V, T>["ref"]
}

export function loadStyle<
    T extends WithCSSVar<Dict>,
    V extends Record<string, unknown>,
    S extends Record<string, unknown> | React.CSSProperties,
>(theme: T, styleOrStyleFn: S | ((props?: V) => S), variables?: V): StyleRef<V, T> {

    const loadInternal = (
        internalVariables: V | undefined = variables, 
          internalTheme: T = theme
            ): StyleRef<V, T>["ref"] => {
        const nextStyles: S = runIfFn(styleOrStyleFn, internalVariables);
        const computedCss = computeCss(nextStyles)(internalTheme);
        const css = instance.css`${computedCss}`;
        return css;
    };

    return {
        ref: loadInternal(),
        loadStyle: (internalVariables?: V, internalTheme?: T) => loadInternal(internalVariables, internalTheme)
    }
}


export function usePreLoadedStyle<
    S extends Record<string, unknown> | React.CSSProperties,
    V extends Record<string, unknown>,
    T extends WithCSSVar<Dict>
>(styleRefProp: StyleRef<V, T>, style?: S | ((props?: V) => S), variables?: V): [string | undefined, (variables: V) => void] {
     const [state, setState] = useState(styleRefProp);
     const theme = useTheme();
     
    React.useInsertionEffect(() => {
        //* if ref is present use ref
        if (state?.ref?.attach) {
            state.ref.attach();
            return
            //* else create ref before render
        } 
        if (styleRefProp) {
            styleRefProp.ref.attach();
            return
        }
        if (style) {
            const loaded = loadStyle(theme, style, variables);
            loaded.ref.attach();
            setState(loaded);
            return
        }
    }, [state])

    useCustomCompareEffect(() => {
        if (state?.loadStyle) {
            const nextRef = state?.loadStyle(variables);
            setState((prev) => {
                if (prev) {
                    return {...prev, ref: nextRef}
                };
                return prev
            })
        }
    }, [variables], (prev, current) => isEqual(prev?.[0], current?.[0]))

    const reloadStyles = React.useCallback((variables: V) => {
        if (styleRefProp?.loadStyle) {
            const nextRef = styleRefProp?.loadStyle(variables);
            setState((prev) => {
                if (prev) {
                    return {...prev, ref: nextRef}
                };
                return prev
            })
        }
    }, [styleRefProp, setState])

    return [state?.ref?.className || styleRefProp?.ref?.className , reloadStyles]
};

export const injectGlobal = instance.injectGlobal