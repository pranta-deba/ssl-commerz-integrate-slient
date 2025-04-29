import { ReactNode, useState } from "react";
import { IUser } from "../types";
import { AuthContext } from "../contexts/authContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
