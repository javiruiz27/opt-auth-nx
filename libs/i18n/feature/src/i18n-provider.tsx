import React, { ReactNode, useCallback } from 'react';
import { IntlProvider } from 'react-intl';
import { Translations } from '@onboarding/i18n/data';

type Props = {
  translations: Translations;
  locale: string;
  children: ReactNode;
};

export const I18nProvider: React.FC<Props> = ({
  translations,
  locale,
  children,
}) => {
  const messagesByLocale = useCallback(() => {
    if (locale.includes('es')) {
      return translations.es;
    }
    return translations.en;
  }, []);

  return (
    <IntlProvider messages={messagesByLocale()} locale={locale}>
      {children}
    </IntlProvider>
  );
};
