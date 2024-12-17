import { TypographyOptions } from '@mui/material/styles/createTypography'
import { fonts } from "./fonts";
import { breakpoints } from './breakpoints';

export const typography: TypographyOptions = {
    fontFamily: fonts.primary,
    fontSize: 16,
    h1: {
      fontFamily: fonts.primary,
      fontSize: fonts.size.huge,
      fontWeight: 600,
      lineHeight: 1.23,
      textTransform: 'uppercase',
      [`@media (min-width: ${breakpoints.values?.md}px)`]: {
        fontSize: fonts.size.xhuge,
        lineHeight: 1.25,
      },
    },
    h2: {
      fontFamily: fonts.primary,
      fontSize: fonts.size.xlarge,
      fontWeight: 600,
      lineHeight: 1.45,
      textTransform: 'uppercase',
      [`@media (min-width: ${breakpoints.values?.md}px)`]: {
        fontSize: fonts.size.big,
        lineHeight: 1.33,
      },
    },
    h3: {
      fontSize: fonts.size.medium,
      lineHeight: 1.2,
      fontWeight: 600,
      textTransform: 'uppercase',
      [`@media (min-width: ${breakpoints.values?.md}px)`]: {
        fontSize: fonts.size.large,
        lineHeight: 1.27,
      },
    },
    h4: {
      fontSize: fonts.size.medium,
      lineHeight: 1.33,
      fontWeight: 600,
      [`@media (min-width: ${breakpoints.values?.md}px)`]: {
        fontSize: fonts.size.large,
        lineHeight: 1.4,
      },
    },
    h5: {
      fontSize: fonts.size.base,
      lineHeight: 1.5,
      fontWeight: 600,
    },
    h6: {
      fontSize: fonts.size.small,
      lineHeight: 1.43,
      fontWeight: 600,
    },
  }
  