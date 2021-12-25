import { useEffect, useState } from "react";
import { routes } from "../constants/routes";
import useAuthState from "../hooks/useAuthState";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

let unprotectedRoutes = [
  routes.LOGIN,
];

const ProtectedRoute = ({ router, children }) => {
  const { User, AuthStatus, setAuthStatus } = useAuthState();
  const [Authanticated, setAuthanticated] = useState<string>('');

  useEffect(() => {
    console.log(AuthStatus)
    if (AuthStatus === 'checkingAuthStatus') {
      // try to get the user
      let _User;
      if (typeof window !== "undefined" && window.localStorage) {

        let userLs = localStorage.getItem(User);
        if (userLs) {
          // get User from localStorage
          _User = JSON.parse(userLs);
        } else {
          // get User form context API
          _User = User
        }

        setTimeout(() => {
          // timeout to represent loading state
          setAuthStatus(_User.loggedIn ? 'loggedIn' : 'anonymous');
        }, 1000);
      }

    }
    let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
    if (isBrowser() && AuthStatus === 'anonymous' && pathIsProtected) {
      router.push(routes.LOGIN);
    }
    if (isBrowser() && AuthStatus === 'loggedIn') {
      console.log(router);
      if (router.pathname === "/") { // no route is "/"
        router.push(routes.DASHBOARD);
      }
    }

    if (AuthStatus !== 'checkingAuthStatus') {
      setTimeout(() => {
        // timeout to avoid screen flickering
        setAuthanticated('done')
      }, 200);
    }

  }, [AuthStatus]);

  return AuthStatus === 'checkingAuthStatus' ? <div>Loading...</div> : Authanticated === 'done' ? children : null;
};

export default ProtectedRoute;