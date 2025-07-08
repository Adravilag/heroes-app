import { createContext } from "react";

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
