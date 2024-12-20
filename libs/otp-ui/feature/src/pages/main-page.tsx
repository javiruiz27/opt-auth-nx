import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Header } from '@onboarding/header-feature';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Typography variant="h1">HOLA QUE TAL</Typography>
      <Typography variant="body1Bold">
        <FormattedMessage id="test.test" />
      </Typography>
    </div>
  );
};
