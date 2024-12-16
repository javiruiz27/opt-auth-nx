import { useMutation } from '@tanstack/react-query';
import { postRequestToken } from '../services';

export interface TokenResponse {
  otp: string;
}

const REQUEST_TOKEN_KEY = 'request_token';

const useRequestToken = () => {
  const { data, mutate, error, isSuccess } = useMutation({
    mutationKey: [REQUEST_TOKEN_KEY],
    mutationFn: async (email: string) => {
        const response = await postRequestToken(email);
        return response;
      },
  });

  return {
    data,
    mutate,
    error,
    isSuccess
  };
};

export default useRequestToken;
