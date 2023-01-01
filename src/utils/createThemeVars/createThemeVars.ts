// import {omitVars, extractTokens} from './themeTokens';
import { isObject, mergeWith} from 'lodash';
import {cssVar} from './cssVar';
import {calc} from './calc';
import {pseudoSelectors} from '../pseudos';

function tokenToCssVar(token: string | number, prefix?: string) {
    return cssVar(String(token).replace(/\./g, "-"), undefined, prefix)
  }
  
  export function createThemeVars(
    flatTokens: any,
    options: any,
  ) {
    let cssVars: any = {}
    const cssMap: any = {}
  
    for (const [token, tokenValue] of Object.entries<any>(flatTokens)) {
      const { isSemantic, value } = tokenValue
      const { variable, reference } = tokenToCssVar(token, options?.cssVarPrefix)
  
      if (!isSemantic) {
        if (token.startsWith("space")) {
          const keys = token.split(".")
          const [firstKey, ...referenceKeys] = keys
          /** @example space.-4 */
          const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`
          const negativeValue = calc.negate(value as any)
          const negatedReference = calc.negate(reference)
          cssMap[negativeLookupKey] = {
            value: negativeValue,
            var: variable,
            varRef: negatedReference,
          }
        }
  
        cssVars[variable] = value
        cssMap[token] = {
          value,
          var: variable,
          varRef: reference,
        }
        continue
      }
  
      const lookupToken = (maybeToken: string) => {
        const scale = String(token).split(".")[0]
        const withScale = [scale, maybeToken].join(".")
        /** @example flatTokens['space.4'] === '16px' */
        const resolvedTokenValue = flatTokens[withScale]
        if (!resolvedTokenValue) return maybeToken
        const { reference } = tokenToCssVar(withScale, options?.cssVarPrefix)
        return reference
      }
  
      const normalizedValue = isObject(value) ? value : { default: value }
  
      cssVars = mergeWith(
        cssVars,
        Object.entries(normalizedValue).reduce(
          (acc, [conditionAlias, conditionValue]: any) => {
            const maybeReference = lookupToken(conditionValue)
            if (conditionAlias === "default") {
              acc[variable] = maybeReference
              return acc
            }
  
            /** @example { _dark: "#fff" } => { '.style-dark': "#fff" } */
            const conditionSelector =
              (pseudoSelectors as any)?.[conditionAlias] ?? conditionAlias
            acc[conditionSelector] = { [variable]: maybeReference }
  
            return acc
          },
          {} as any,
        ),
      )
  
      (cssMap as any)[token] = {
        value: reference,
        var: variable,
        varRef: reference,
      }
    }
  
    return {
      cssVars,
      cssMap,
    }
  }