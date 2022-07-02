import React, { useState } from 'react';
import { ContextData, Children, Data } from 'components';
import axios from 'axios';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
  editedMemberHandler: () => {},
  memberIsEdited: false,
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  return storedToken;
};

export const AuthContextProvider: React.FC<Children> = (props) => {
  const tokenData = retrieveStoredToken();
  const [memberIsEdited, setMemberIsEdited] = useState<boolean>(false);

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

  const editedMeberHandler = () => {
    setMemberIsEdited(!memberIsEdited);
  };

  const contextValue: ContextData = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    editedMemberHandler: editedMeberHandler,
    memberIsEdited: memberIsEdited,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
