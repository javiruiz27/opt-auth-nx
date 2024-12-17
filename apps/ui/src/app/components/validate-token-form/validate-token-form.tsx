import { Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { OtpInputComp } from '../otp-input/otp-input';
import useValidateToken from '../../hooks/use-validate-token';
import { AuthenticationContext } from '../../context/authentication-context';
import { Snackbar } from '@mui/material';

const ValidateTokenForm = () => {
  const [userToken, setUserToken] = useState<string>("");
  const [openErrorMessage, setOpenErrorMessage] = useState<boolean>(false);
  

  const { mutate: fetchValidation, isSuccess, data: jwtToken, error } = useValidateToken();
  const {email} = useContext(AuthenticationContext);


  const handleValidateToken = () => {
    fetchValidation({email: email ?? "", otp: userToken});
  }

  useEffect(() => {
   if(error) {
    setOpenErrorMessage(true);
   }
  }, [error])
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "8px"
    }}>
        <Typography variant="h5">Introduce your token</Typography>
        <OtpInputComp userToken={userToken} setUserToken={setUserToken} />
        <Button type='submit' onClick={handleValidateToken}>
          Validate
        </Button>
        <Snackbar
          open={openErrorMessage}
          message={"Error validating your otp token"}
          onClose={() => setOpenErrorMessage(false)}
        />
    </div>
  )
}

export default ValidateTokenForm;