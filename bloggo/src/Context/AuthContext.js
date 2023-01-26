import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthController = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider 
    value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
