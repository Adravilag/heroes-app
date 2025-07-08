import { createContext } from "react";

export interface User {
  id: string;
  username: string;
  name?: string;
  email?: string;
  role?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
