import { ReactNode, useState } from 'react';
import { AuthenticationContext } from './authentication-context';

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isWaitingForValidation, setIsWaitingForValidation] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        email,
        setEmail,
        isWaitingForValidation,
        setIsWaitingForValidation,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
