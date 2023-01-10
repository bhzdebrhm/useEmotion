// @flow
import createCache from '@emotion/cache';
import { serializeStyles } from '@emotion/serialize';
import { EmotionCache, getRegisteredStyles, insertStyles, SerializedStyles } from '@emotion/utils';

//@ts-ignore
function insertWithoutScoping(cache, serialized: SerializedStyles) {
    if (cache.inserted[serialized.name] === undefined) {
        return cache.insert('', serialized, cache.sheet, true)
    }
}

//@ts-ignore
function merge(registered: Object, css: (...args: any[]) => {
    className: string;
    attach: () => void;
}, className: string) {
    const registeredStyles: any = []
    const rawClassName = getRegisteredStyles(
        //@ts-ignore
        registered,
        //@ts-ignore
        registeredStyles,
        className
    )

    if (registeredStyles.length < 2) {
        return className
    }

    const cCss = css(registeredStyles);
    cCss.attach();
    return rawClassName + cCss.className
}

export type Interpolation = any
export type Interpolations = Array<Interpolation>

type CreateStyles<ReturnValue> = (...args: Interpolations) => ReturnValue

type ClassNameArg =
    | string
    | boolean
    | { [key: string]: boolean | void | null }
    | Array<ClassNameArg>
    | void
    | null

interface StyleSheet {
    insert(rule: string): void;
    flush(): void;
    speedy(newVal: boolean): void;
    tags: Array<HTMLStyleElement>;
    isSpeedy: number;
    ctr: number;
}

export type Emotion = {
    css: (...args: any[]) => {
        className: string,
        attach: () => void
    },
    cx: (...classNames: Array<ClassNameArg>) => string,
    flush: () => void,
    hydrate: (ids: Array<string>) => void,
    injectGlobal: CreateStyles<void>,
    keyframes: CreateStyles<string>,
    sheet: StyleSheet,
    cache: EmotionCache,
    merge: any,
    getRegisteredStyles: any
}

const createEmotion = (options: any): Emotion => {
    let cache = createCache(options)

    //@ts-ignore
    cache.sheet.speedy = function (value: boolean) {
        //@ts-ignore
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0) {
            throw new Error('speedy must be changed before any rules are inserted')
        }
        //@ts-ignore
        this.isSpeedy = value
    }
    cache.compat = true

    //@ts-ignore
    let css = (...args) => {
        let serialized = serializeStyles(args, cache.registered, undefined)
        const attach = () => {
            insertStyles(cache, serialized, false);
        }
        return {
            className:`${cache.key}-${serialized.name}`,
            attach
        }
    }
    //@ts-ignore
    let keyframes = (...args) => {
        let serialized = serializeStyles(args, cache.registered)
        let animation = `animation-${serialized.name}`
        insertWithoutScoping(cache, {
            name: serialized.name,
            styles: `@keyframes ${animation}{${serialized.styles}}`
        })

        return animation
    }
    //@ts-ignore
    let injectGlobal = (...args) => {
        let serialized = serializeStyles(args, cache.registered)
        insertWithoutScoping(cache, serialized)
    }
    //@ts-ignore
    let cx = (...args) => {
        return merge(cache.registered, css, classnames(args))
    };

    return {
        css,
        cx,
        injectGlobal,
        keyframes,
        hydrate(ids: Array<string>) {
            ids.forEach(key => {
                cache.inserted[key] = true
            })
        },
        flush() {
            cache.registered = {}
            cache.inserted = {}
            cache.sheet.flush()
        },
        //@ts-ignore
        sheet: cache.sheet,
        cache,
        getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
        merge: merge.bind(null, cache.registered, css)
    }
}
//@ts-ignore
let classnames = args => {
    let cls = ''
    for (let i = 0; i < args.length; i++) {
        let arg = args[i]
        if (arg == null) continue

        let toAdd
        switch (typeof arg) {
            case 'boolean':
                break
            case 'object': {
                if (Array.isArray(arg)) {
                    toAdd = classnames(arg)
                } else {
                    toAdd = ''
                    for (const k in arg) {
                        if (arg[k] && k) {
                            toAdd && (toAdd += ' ')
                            toAdd += k
                        }
                    }
                }
                break
            }
            default: {
                toAdd = arg
            }
        }
        if (toAdd) {
            cls && (cls += ' ')
            cls += toAdd
        }
    }
    return cls
}

export default createEmotion({ key: 'css' })