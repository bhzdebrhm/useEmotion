import React from 'react';
import { WithCSSVar, computeCss } from '../utils';
import useState from 'react-usestateref'

import instance from './instance';
import { Dict, runIfFn } from '@bhzdebrhm/utils';
import {useCustomCompareEffect} from '@bhzdebrhm/react-hooks';
import { isEqual } from 'lodash';
import { useTheme } from '../theme';


export type StyleRef = {
    ref: {
        className: string,
        attach: () => void,
    },
    loadStyle: <A, T>(internalVariables?: A, internalTheme?: T) => StyleRef["ref"]
}

export function loadStyle<
    S extends Record<string, unknown> | React.CSSProperties,
    A extends Record<string, unknown>,
    T extends WithCSSVar<Dict>
>(theme: T, styleOrStyleFn: S | ((props?: A) => S), variables?: A): StyleRef {

    const loadInternal = (
        internalVariables: A | undefined = variables, 
          internalTheme: T = theme
            ): StyleRef["ref"] => {
        const nextStyles: S = runIfFn(styleOrStyleFn, internalVariables);
        const computedCss = computeCss(nextStyles)(internalTheme);
        const css = instance.css`${computedCss}`;
        return css;
    };

    return {
        ref: loadInternal(),
        //@ts-ignore
        loadStyle: (internalVariables?: A, internalTheme?: T) => loadInternal(internalVariables, internalTheme)
    }
}


export function usePreLoadedStyle<
    S extends Record<string, unknown> | React.CSSProperties,
    A extends Record<string, unknown>,
    T extends WithCSSVar<Dict>
>(style: S | ((props?: A) => S), styleRefProp?: StyleRef, variables?: A): [string | undefined, (variables: A) => void] {
     const [state, setState] = useState(styleRefProp);
     const theme = useTheme();
     
    React.useInsertionEffect(() => {
        //* if ref is present use ref
        if (state?.ref.attach) {
            state.ref.attach();
            //* else create ref before render
        } else {
            const loaded = loadStyle(theme, style, variables);
            loaded.ref.attach();
            setState(loaded)
        }
    }, [state])

    useCustomCompareEffect(() => {
        if (state?.loadStyle) {
            const nextRef = state?.loadStyle<A, T>(variables);
            setState((prev) => {
                if (prev) {
                    return {...prev, ref: nextRef}
                };
                return prev
            })
        }
    }, [variables], (prev, current) => isEqual(prev, current))

    const reloadStyles = React.useCallback((variables: A) => {
        if (styleRefProp?.loadStyle) {
            const nextRef = styleRefProp?.loadStyle<A, T>(variables);
            setState((prev) => {
                if (prev) {
                    return {...prev, ref: nextRef}
                };
                return prev
            })
        }
    }, [styleRefProp, setState])

    return [state?.ref.className , reloadStyles]
};

export const injectGlobal = instance.injectGlobal