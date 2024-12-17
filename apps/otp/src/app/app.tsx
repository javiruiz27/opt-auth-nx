import { useContext } from 'react';
import RequestTokenForm from './components/request-token-form/request-token-form';
import { AuthenticationContext } from './context/authentication-context';
import ValidateTokenForm from './components/validate-token-form/validate-token-form';

export function App() {
  const { isWaitingForValidation } = useContext(AuthenticationContext);

  const appContainerStyles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div data-testid="app" style={appContainerStyles}>
      {isWaitingForValidation ? (
        <div data-testid="validate_token">
          <ValidateTokenForm />
        </div>
      ) : (
        <div data-testid="request_token">
          <RequestTokenForm />
        </div>
      )}
    </div>
  );
}

export default App;