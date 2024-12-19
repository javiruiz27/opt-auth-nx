import { createContext, Dispatch, SetStateAction } from 'react';

interface IAuthenticationContext {
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
  isWaitingForValidation: boolean;
  setIsWaitingForValidation: Dispatch<SetStateAction<boolean>>;
  jwtToken: string | null;
  setJwtToken: Dispatch<SetStateAction<string | null>>;
  isAuthenticated: boolean;
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
  jwtToken: null,
  setJwtToken: () => {
    /** do nothing */
  },
  isAuthenticated: false,
};

export const AuthenticationContext = createContext(
  authenticationContextInitialValue
);
