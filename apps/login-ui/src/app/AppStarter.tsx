import React, { useCallback } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@onboarding/themes';
import App from './App';
import { IntlProvider } from 'react-intl';

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
  const messagesByLocale = useCallback(() => {
    if (locale.includes('es')) {
      return translations.es;
    }
    return translations.en;
  }, []);

  const children = (
    <ThemeProvider theme={theme}>
      <IntlProvider messages={messagesByLocale()} locale={locale}>
        <App />
      </IntlProvider>
    </ThemeProvider>
  );

  return children;
};
