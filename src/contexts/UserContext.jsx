/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (email, pass) => {
    setEmail(email);
    setPassword(pass);
  };

  const logout = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <UserContext.Provider value={{ email, password, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
