import { createContext, Dispatch, SetStateAction } from "react";

interface IAuthenticationContext {
    otpToken: string | null;
    setOtpToken: Dispatch<SetStateAction<string | null>>;

}

export const authenticationContextInitialValue: IAuthenticationContext = {
  otpToken: null,
  setOtpToken: () => {
    /** do nothing */
  },
};

export const AuthenticationContext = createContext(authenticationContextInitialValue);
