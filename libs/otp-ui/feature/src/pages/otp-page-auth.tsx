import { useContext } from 'react';
import { AuthenticationContext } from '../context/authentication-context';
import RequestTokenForm from '../components/request-token-form/request-token-form';
import ValidateToken from '../components/validate-token/validate-token';

export const OtpPageAuth = () => {
  const { isWaitingForValidation } = useContext(AuthenticationContext);
  console.log(
    '🚀 ~ OtpPageAuth ~ isWaitingForValidation:',
    isWaitingForValidation
  );

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
          <ValidateToken />
        </div>
      ) : (
        <div data-testid="request_token">
          <RequestTokenForm />
        </div>
      )}
    </div>
  );
};
