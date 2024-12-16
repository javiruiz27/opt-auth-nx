import { ReactNode, useState } from "react";
import { AuthenticationContext } from "./authentication-context";

export const AuthenticationProvider = ({ children }: {children: ReactNode}) => {
  const [otpToken, setOtpToken] = useState<string | null>(null);

  return (
    <AuthenticationContext.Provider
      value={{
        otpToken,
        setOtpToken
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
