import { Route, Navigate } from "react-router-dom";
import { useAuthentication } from "../context/autenticationContext";

export default function PrivateRoute({ path,element, ...props }:{path:string,element:JSX.Element}) {
  const { isUserLoggedIn } = useAuthentication();
  console.log({isUserLoggedIn})
  return isUserLoggedIn ? (
    <Route {...props} path={path} element={element} />
  ) : (
    <Navigate replace state={{ from: path }} to="/logIn"></Navigate>
  );
}
