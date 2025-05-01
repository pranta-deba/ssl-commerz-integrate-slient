import { ReactNode, useEffect, useState } from "react";
import { IUser } from "../types";
import { AuthContext } from "../contexts/authContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userLoader, setUserLoader] = useState<boolean>(false);

  useEffect(() => {
    setUserLoader(true);
    const localData = localStorage.getItem("user");
    if (localData) {
      setUser(JSON.parse(localStorage.getItem("user") as string));
    }
    setUserLoader(false);
  }, []);

  const value = { user, setUser, userLoader, setUserLoader };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
