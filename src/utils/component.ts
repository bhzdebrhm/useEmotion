import {Dict} from '@bhzdebrhm/utils';


//types
export type StyleFunctionProps = {
    colorScheme: string
    colorMode: "light" | "dark"
    orientation?: "horizontal" | "vertical"
    theme: Dict
    [key: string]: any
  }



export const lightOrDark = (light: string, dark: string) => {
    return (props: Dict | StyleFunctionProps) => 
        props.colorMode === "dark" ? dark : light;
}