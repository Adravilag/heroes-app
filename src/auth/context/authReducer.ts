import { types } from "../types/types";

export type AuthAction = {
  type: string;
  payload: any;
};

export const Action = {
  login: types.login,
  logout: types.logout,
} as const;

export const authReducer = (
  state = { isAuthenticated: false, user: null },
  action = { type: "", payload: null }
) => {
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
