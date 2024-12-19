import { createTheme, ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

import { breakpoints } from './breakpoints';

import { typography } from './typography';

const customTheme: ThemeOptions = {
  spacing: 4,
  typography,
  breakpoints,
};

const extraThemeOptions = {}; // add custom extra themes

export const theme = createTheme(deepmerge(customTheme, extraThemeOptions));
