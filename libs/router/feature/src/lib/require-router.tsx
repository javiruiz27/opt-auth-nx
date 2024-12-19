import { Navigate } from 'react-router-dom';
import { useAuthentication } from '@onboarding/otp-ui/feature';
import { ReactNode } from 'react';

export function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated === true ? children : <Navigate to="/login" />;
}
