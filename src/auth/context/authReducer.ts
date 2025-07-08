import { types } from "../types/types";
import { type User } from "./AuthContext";

export type AuthAction = {
  type: string;
  payload: User | null;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

export const Action = {
  login: types.login,
  logout: types.logout,
} as const;

export const authReducer = (
  state: AuthState = { isAuthenticated: false, user: null },
  action: AuthAction = { type: "", payload: null }
): AuthState => {
  switch (action.type) {
    case Action.login:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case Action.logout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
