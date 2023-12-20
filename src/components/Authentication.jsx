import { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (newToken) => setToken(newToken);
  const logout = () => setToken(null);

  return (
    <AuthenticationContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);