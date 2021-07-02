import { createContext, useReducer } from "react";
import { AuthReducer } from "./authReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    UserList: [{ username: "admin", password: "admin" }],
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
