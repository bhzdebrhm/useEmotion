import { AnyFunction, objectKeys } from '@bhzdebrhm/utils';

const state = {
  hover: (str: string, post: string) =>
    `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str: string, post: string) =>
    `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str: string, post: string) => `${str}:focus-visible ${post}`,
  focusWithin: (str: string, post: string) => `${str}:focus-within ${post}`,
  active: (str: string, post: string) =>
    `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str: string, post: string) =>
    `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str: string, post: string) =>
    `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str: string, post: string) =>
    `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str: string, post: string) =>
    `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str: string, post: string) =>
    `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str: string, post: string) =>
    `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str: string, post: string) =>
    `${str}:placeholder-shown ${post}`,
}

const toGroup = (fn: AnyFunction) =>
  merge((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group")

const toPeer = (fn: AnyFunction) =>
  merge((v) => fn(v, "~ &"), "[data-peer]", ".peer")

const merge = (fn: AnyFunction, ...selectors: string[]) =>
  selectors.map(fn).join(", ")




export const pseudoSelectors = {
  /**
   * Styles from css selector *
   */
  all: "*",
  /**
   * Styles for CSS selector `&:hover`
   */
  hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  focusVisible: "&:focus-visible",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   */
  disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box before={{content:`""` }}/>
   * ```
   */
  before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box after={{content:`""` }}/>
   * ```
   */
  after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  first: "&:first-of-type",
  /**
   * Styles for CSS Selector `&:first-child`
   */
  firstChild: "&:first-child",
  /**
 * Styles for CSS Selector `&:last-child`
 */
  lastChild: "&:last-child",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  indeterminate:
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  groupHover: toGroup(state.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  peerHover: toPeer(state.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  groupFocus: toGroup(state.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  peerFocus: toPeer(state.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  groupFocusVisible: toGroup(state.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  peerFocusVisible: toPeer(state.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  groupActive: toGroup(state.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  peerActive: toPeer(state.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  groupDisabled: toGroup(state.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  peerDisabled: toPeer(state.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  groupInvalid: toGroup(state.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  peerInvalid: toPeer(state.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  groupChecked: toGroup(state.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  peerChecked: toPeer(state.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  groupFocusWithin: toGroup(state.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  peerFocusWithin: toPeer(state.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  peerPlaceholderShown: toPeer(state.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  dark:
    ".style-dark &:not([data-theme])," +
    "[data-theme=dark] &:not([data-theme])," +
    "&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  light:
    ".style-light &:not([data-theme])," +
    "[data-theme=light] &:not([data-theme])," +
    "&[data-theme=light]",
}

export type Pseudos = typeof pseudoSelectors

export const pseudoPropNames = objectKeys(pseudoSelectors)
