import {mergeWith} from 'lodash';
import { objectKeys } from "@bhzdebrhm/utils"
import {
  background,
  border,
  color,
  effect,
  filter,
  flexbox,
  grid,
  interactivity,
  layout,
  list,
  others,
  position,
  ring,
  space,
  textDecoration,
  transform,
  transition,
  typography,
  scroll,
} from "./config"
import { pseudoPropNames, pseudoSelectors } from "./pseudos"

export const systemProps = mergeWith(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition,
)

const layoutSystem = Object.assign({}, space, layout, flexbox, grid, position)
export const layoutPropNames = objectKeys(layoutSystem)

export const propNames = [...objectKeys(systemProps), ...pseudoPropNames]
const styleProps = { ...systemProps, ...pseudoSelectors }

export const isStyleProp = (prop: string) => prop in styleProps
