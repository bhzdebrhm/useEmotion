import {flatten, fromEntries} from '@bhzdebrhm/utils';


export const flattenTokens = ({tokens, semanticTokens}: any) => {
    const tokenEntries = Object.entries(flatten(tokens) ?? {}).map(
        ([token, value]) => {
            const enhancedToken = {isSemantic: false, value};
            return [token, enhancedToken]
        }
    );
    const semanticTokenEntries = Object.entries(
        flatten(semanticTokens) ?? {}
    ).map(([token, value]) => {
        const enhancedToken = {isSemantic: false, value};
        return [token, enhancedToken];
    });

    return fromEntries([...tokenEntries, ...semanticTokenEntries])
}