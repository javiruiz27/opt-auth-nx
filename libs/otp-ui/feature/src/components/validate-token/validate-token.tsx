import React, { useState } from 'react';
import ValidateTokenForm from '../validate-token-form/validate-token-form';
import { Button, Typography } from '@mui/material';

const ValidateToken = () => {
  const [isValidatingForm, setIsValidatingForm] = useState<boolean>(false);

  if (isValidatingForm) {
    return <ValidateTokenForm />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography>
        Your token is sent to your email, please check and introduce
      </Typography>
      <Button type="submit" onClick={() => setIsValidatingForm(true)}>
        Complete
      </Button>
    </div>
  );
};

export default ValidateToken;
