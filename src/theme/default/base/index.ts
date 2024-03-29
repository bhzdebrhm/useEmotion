import borders from "./borders"
import breakpoints from "./breakpoints"
import colors from "./colors"
import raduis from "./radius"
import shadows from "./shadows"
import sizes from "./sizes"
import { spacing } from "./spacing"
import transition from "./transition"
import typography from "./typography"
import zIndices from "./z-index"
import blur from "./blur"



const bases = {
  breakpoints,
  zIndices,
  raduis,
  blur,
  colors,
  ...typography,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition,
}



export default bases
