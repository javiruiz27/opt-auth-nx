import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@onboarding/otp-ui-theme';
import { I18nProvider } from '@onboarding/i18n/feature';
import { ReactQueryProvider } from '@onboarding/react-query/feature';
import AppRoutes from './AppRoutes';
import { AuthenticationProvider } from '@onboarding/otp-ui/feature';
import translations from '../../translations.json';
import { HeaderDepsBuilder } from './header/HeaderDepsBuilder';

type Props = object;

const locale = navigator.language;

export const AppStarter: React.FC<Props> = () => {
  const headerDeps = new HeaderDepsBuilder().buildDeps();

  const children = (
    <ThemeProvider theme={theme}>
      <I18nProvider translations={translations} locale={locale}>
        <ReactQueryProvider>
          <AuthenticationProvider>
            <AppRoutes />
          </AuthenticationProvider>
        </ReactQueryProvider>
      </I18nProvider>
    </ThemeProvider>
  );

  return children;
};
