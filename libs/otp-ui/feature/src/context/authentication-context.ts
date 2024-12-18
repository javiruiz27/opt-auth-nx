import { createContext, Dispatch, SetStateAction } from 'react';

interface IAuthenticationContext {
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
  isWaitingForValidation: boolean;
  setIsWaitingForValidation: Dispatch<SetStateAction<boolean>>;
}

export const authenticationContextInitialValue: IAuthenticationContext = {
  email: null,
  setEmail: () => {
    /** do nothing */
  },
  isWaitingForValidation: false,
  setIsWaitingForValidation: () => {
    /** do nothing */
  },
};

export const AuthenticationContext = createContext(
  authenticationContextInitialValue
);
