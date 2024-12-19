import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const App = () => {
  return (
    <div className="container">
      <Typography variant="h1">HOLA QUE TAL</Typography>
      <Typography variant="body1Bold">
        <FormattedMessage id="test.test" />
      </Typography>
    </div>
  );
};

export default App;
