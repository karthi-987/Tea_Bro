import React, { createContext, useContext, useState, useCallback } from "react";


interface AuthContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

const ADMIN_USER = "karthik";
const ADMIN_PASS = "teabro@123";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((username: string, password: string) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAdmin(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => setIsAdmin(false), []);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
