import { createTheme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

type CustomThemeOptions = object;

const customTheme: ThemeOptions = {
    spacing: 4,
    typography,
    breakpoints,
}
  
const extraThemeOptions: CustomThemeOptions = {}
  

export const theme = createTheme(deepmerge(customTheme, extraThemeOptions)) //we can add custom styles with deepmerge if customTheme is not enough