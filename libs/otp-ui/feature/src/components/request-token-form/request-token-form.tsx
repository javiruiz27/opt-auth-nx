import React, { useContext, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  FormControl,
  Button,
  FormLabel,
  Typography,
  Snackbar,
} from '@mui/material';
import useRequestToken from '../../hooks/use-request-token';
import { AuthenticationContext } from '../../context/authentication-context';
import CircularProgress from '@mui/material/CircularProgress';

interface IRequestTokenForm {
  testId?: string;
}

type Inputs = {
  emailRequired: string;
};

const RequestTokenForm: React.FC<IRequestTokenForm> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      emailRequired: '',
    },
  });

  const { setIsWaitingForValidation, setEmail } = useContext(
    AuthenticationContext
  );
  const { mutate: fetchNewToken, status, data, isPending } = useRequestToken();

  const onSubmit: SubmitHandler<Inputs> = (d, e) => {
    e?.preventDefault();
    fetchNewToken(d.emailRequired);
  };

  useEffect(() => {
    if (status === 'success') {
      setIsWaitingForValidation(true);
      setEmail(data.emailRequired);
    }
  }, [status, data, setIsWaitingForValidation, setEmail]);

  if (isPending) {
    return <CircularProgress size="3rem" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        style={{
          gap: '12px',
        }}
      >
        <Typography variant="h2">Request a otp token</Typography>
        <div
          className="btn_and_label"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <FormLabel>Email</FormLabel>
          <TextField
            size="small"
            {...register('emailRequired', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        {errors.emailRequired && errors.emailRequired.message}
        <Button type="submit">Send</Button>
      </FormControl>
      <Snackbar
        open={status === 'error'}
        message={'Error requesting otp token'}
        autoHideDuration={1000}
      />
    </form>
  );
};

export default RequestTokenForm;
