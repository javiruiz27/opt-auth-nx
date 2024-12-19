import { ReactNode, useMemo, useState } from 'react';
import { AuthenticationContext } from './authentication-context';

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isWaitingForValidation, setIsWaitingForValidation] = useState(false);
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  const isAuthenticated = useMemo(() => {
    return localStorage.getItem('jwtToken') ? true : false;
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        email,
        setEmail,
        isWaitingForValidation,
        setIsWaitingForValidation,
        jwtToken,
        setJwtToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
