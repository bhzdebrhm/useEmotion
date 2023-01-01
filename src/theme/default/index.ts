import bases from "./base"
import { styles } from "./global"
export * from './Fonts'
const direction: any = "ltr"

const config: any = {
  useSystemColorMode: false,
  initialColorMode: "light",
}

export const theme = {
  direction,
  ...bases,
  styles,
  config,
}
export type Theme = typeof theme

export * from "./utils";
