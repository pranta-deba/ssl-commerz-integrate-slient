/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
