
import React, { createContext, useState } from 'react';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';
import { loginUser } from '../apis/AuthApi';

interface AuthContextProps {
  user: UserLoginResponse | null;
  login: (request: UserLoginRequest) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserLoginResponse | null>(null);

  const login = async (request: UserLoginRequest) => {
    try {
      // Add necessary logs here
      console.log('Logging in...');
      const response = await loginUser(request);
      setUser(response);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    // Add necessary logs here
    console.log('Logging out...');
    setUser(null);
    console.log('Logout successful');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};