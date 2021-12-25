import { createContext, useState } from 'react';

interface User {
  email: string
  loggedIn: boolean
}

interface AuthState {
  AuthStatus: string
  AccessToken: null | string
  User: User
}

const defaultAuthState: AuthState = {
  AuthStatus: 'checkingAuthStatus',
  User: { email: '', loggedIn: false },
  AccessToken: null
};

const AuthContext = createContext<any | undefined>(
  undefined
);

const AuthProvider = (props) => {
  const [state, setState] = useState(defaultAuthState);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
}


export { AuthContext, AuthProvider }