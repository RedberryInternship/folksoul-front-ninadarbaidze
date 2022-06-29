import React, { useState } from 'react';
import { ContextData, Children } from 'components';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  return storedToken;
};

export const AuthContextProvider: React.FC<Children> = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
  };

  const contextValue: ContextData = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
