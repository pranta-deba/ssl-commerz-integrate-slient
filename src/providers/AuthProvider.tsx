import { createContext, ReactNode } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
