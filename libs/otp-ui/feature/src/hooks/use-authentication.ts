import { useContext } from 'react';
import { AuthenticationContext } from '../context/authentication-context';

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  return context;
}
