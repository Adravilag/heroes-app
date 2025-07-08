import { useReducer } from "react";
import { AuthContext, type User } from "./AuthContext";
import { authReducer, type AuthState as AuthReducerState } from "./authReducer";

type AuthState = AuthReducerState;

const init = (initialState: AuthState): AuthState => {
  const user = localStorage.getItem("user");
  return {
    ...initialState,
    isAuthenticated: !!user,
    user: user ? JSON.parse(user) : null,
  };
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(
    authReducer,
    {
      isAuthenticated: false,
      user: null,
    },
    init
  );

  const onLoginUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "LOGIN", payload: user });
  };

  const onLogoutUser = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login: onLoginUser,
        logout: onLogoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
