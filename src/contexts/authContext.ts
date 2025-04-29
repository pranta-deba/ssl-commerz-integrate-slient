import { createContext } from "react";
import { IAuthContextType } from "../types";

export const AuthContext = createContext<IAuthContextType>({
  user: null,
  setUser: () => {},
});
