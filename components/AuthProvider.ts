
'use client';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface AuthProviderProps {
  children: React.ReactNode; // Ensures children are properly typed
  session?: Session | null; // Session is optional
}

// Correct typing for AuthProvider
const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {
  return (
    < SessionProvider >
      {children}
    </sessionProvider>
  );
};

export default AuthProvider;
