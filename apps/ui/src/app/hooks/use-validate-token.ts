import { useMutation } from '@tanstack/react-query';
import { postValidateToken } from '../services';

const VALIDATE_TOKEN_KEY = 'validate_token';

interface IValidateMutation {
  email: string;
  otp: string;
}

const useValidateToken = () => {
  const { data, mutate, error, isSuccess } = useMutation({
    mutationKey: [VALIDATE_TOKEN_KEY],
    mutationFn: async ({email, otp}: IValidateMutation) => {
        const response = await postValidateToken(email, otp);
        return response.token;
      },
  });

  return {
    data,
    mutate,
    error,
    isSuccess
  };
};

export default useValidateToken;
