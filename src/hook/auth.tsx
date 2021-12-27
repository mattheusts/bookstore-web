import React, { createContext, useContext, useState } from 'react';
import { getAuth } from '../utils/util';

interface IAuthContextDataProps {
  token: string;
  username: string;
}

interface IAuthContextData extends IAuthContextDataProps {
  setAuth: any;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<IAuthContextDataProps>({} as IAuthContextDataProps);

  const res = getAuth();

  return (
    <AuthContext.Provider value={{ token: res.token!, setAuth, username: res.username! }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
