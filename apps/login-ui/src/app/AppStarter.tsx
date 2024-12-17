import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@onboarding/themes';
import App from './App';
import { I18nProvider } from '@onboarding/i18n/feature';

const translations = {
  //cant import of external file. eslint error
  es: {
    'test.test': 'prueba',
  },
  en: {
    'test.test': 'test',
  },
};

type Props = object;

const locale = navigator.language;

export const AppStarter: React.FC<Props> = () => {
  const children = (
    <ThemeProvider theme={theme}>
      <I18nProvider translations={translations} locale={locale}>
        <App />
      </I18nProvider>
    </ThemeProvider>
  );

  return children;
};
