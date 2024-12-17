import { Typography } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const App = () => {
  return (
    <div className="container">
      <Typography variant="h1">HOLA QUE TAL</Typography>
      <Typography variant="subtitle1">
        <FormattedMessage id="test.test" />
      </Typography>
    </div>
  );
};

export default App;
