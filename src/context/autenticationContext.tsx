import { useContext } from "react";
import { createContext, useState, useReducer } from "react";
import axios, { AxiosError } from "axios";
import { useScore } from "./scoreContext";
import getThequizeFromServer from "../comman function/getTheQuizes";
import { ContactsOutlined } from "@material-ui/icons";
// export type userLog
// export type AuthenticationType ={
//     isUserLogedIn : boolean,
//     logInUser : (userName : string , password : string)=>
// }

const AuthenticationContext = createContext<any>({
  isUserLoggedIn: false,
  Token: " ",
  logInUser: () => {},
  signUpUser: () => {},
  logOut: () => {},
});
type Token = {
  token: string | null;
};
function getTokenFromLocalStorage(): Token {
  const localStorageValue: string | null = localStorage.getItem("token");
  if (typeof localStorageValue === "string") {
    return JSON.parse(localStorageValue);
  }
  return { token: null };
}
export function AuthenticationProvider({ children }: { children: any }) {
  const { token }: Token = getTokenFromLocalStorage();

  console.log({ token }, "at the start");
  setupAuthHeaderForServiceCalls(token);
  let flag;
  token !== null ? (flag = true) : (flag = false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(flag);

  type UserLoginData = { success: boolean; token: string };
  type ServerError = { success: boolean; errorMessage: string };

  async function logInUser(username: string, password: string) {
    try {
      const response = await axios.post<UserLoginData>(
        "https://Quize-app-server.jaysinghdhakad.repl.co/logIn",
        {
          username: username,
          password: password,
        }
      );

      setupAuthHeaderForServiceCalls(response.data.token);
      localStorage?.setItem(
        "token",
        JSON.stringify({ token: response.data.token })
      );
      setIsUserLoggedIn(true);
      return { flag: true };
    } catch (error) {
      setIsUserLoggedIn(false);
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          if (serverError.response.status === 401) {
            return { flag: false, error: "invalid-entries" };
          }
          return { flag: false, error: "server-error" };
        }
      }
      return { flag: false, error: "server-error" };
    }
  }
  async function signUpUser(
    username: string,
    password: string,
    emailId: string
  ) {
    try {
      const response = await axios.post<UserLoginData>(
        "https://Quize-app-server.jaysinghdhakad.repl.co/signUp",
        { name: username, password: password, emailId: emailId }
      );
      console.log(typeof response.data.token);
      setupAuthHeaderForServiceCalls(response.data.token);
      localStorage?.setItem(
        "token",
        JSON.stringify({ token: response.data.token })
      );

      setIsUserLoggedIn(true);
      return { flag: true };
    } catch (error) {
      setIsUserLoggedIn(false);
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          if (serverError.response.status === 401) {
            return { flag: false, error: "invalid-entries" };
          }
          return { flag: false, error: "server-error" };
        }
      }
      return { flag: false, error: "server-error" };
    }
  }
  function logOut() {
    setIsUserLoggedIn(false);
    localStorage?.removeItem("token");
    setupAuthHeaderForServiceCalls(null);
  }

  function setupAuthHeaderForServiceCalls(token: string | null) {
    if (token) {
      console.log("is this working auth", { token });
      return (axios.defaults.headers.common["authorization"] = token);
    }
    delete axios.defaults.headers.common["authorization"];
  }

  return (
    <AuthenticationContext.Provider
      value={{ isUserLoggedIn, logInUser, signUpUser, logOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
