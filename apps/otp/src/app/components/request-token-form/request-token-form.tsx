import React, { useContext, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  FormControl,
  Button,
  FormLabel,
  Typography,
} from '@mui/material';
import useRequestToken from '../../hooks/use-request-token';
import { AuthenticationContext } from '../../context/authentication-context';

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
  const { mutate: fetchNewToken, isSuccess, data } = useRequestToken();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault();
    fetchNewToken(data.emailRequired);
  };

  useEffect(() => {
    if (data?.otp) {
      setIsWaitingForValidation(true);
      setEmail(data.emailRequired);
    }
  }, [isSuccess, data, setIsWaitingForValidation, setEmail]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Typography variant="h5">Request a otp token</Typography>
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
        {errors.emailRequired && errors.emailRequired.message}
        <Button type="submit">Send</Button>
      </FormControl>
    </form>
  );
};

export default RequestTokenForm;
