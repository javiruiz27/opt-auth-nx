import { Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { OtpInputComp } from '../otp-input/otp-input';
import useValidateToken from '../../hooks/use-validate-token';
import { Snackbar } from '@mui/material';
import { AuthenticationContext } from '../../context/authentication-context';

const ValidateTokenForm = () => {
  const [userToken, setUserToken] = useState<string>('');
  const [openErrorMessage, setOpenErrorMessage] = useState<boolean>(false);

  const {
    mutate: fetchValidation,
    data: jwtToken,
    error,
    isSuccess,
  } = useValidateToken();
  const { email, setJwtToken } = useContext(AuthenticationContext);

  const handleValidateToken = () => {
    fetchValidation({ email: email ?? '', otp: userToken });
  };

  useEffect(() => {
    if (isSuccess) {
      setJwtToken(jwtToken);
    }
    if (error) {
      setOpenErrorMessage(true);
    }
  }, [error, isSuccess, jwtToken, setJwtToken]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '8px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5">Introduce your token</Typography>
      <OtpInputComp userToken={userToken} setUserToken={setUserToken} />
      <Button type="submit" onClick={handleValidateToken}>
        Validate
      </Button>
      <Snackbar
        open={isSuccess}
        message={'You are successfully logged'}
        autoHideDuration={5000}
      />
      <Snackbar
        open={openErrorMessage}
        message={'Error validating your otp token'}
        onClose={() => setOpenErrorMessage(false)}
        autoHideDuration={5000}
      />
    </div>
  );
};

export default ValidateTokenForm;
