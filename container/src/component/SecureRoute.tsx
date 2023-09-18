// import React, { useState, useEffect } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useOktaAuth } from "@okta/okta-react";

// const SecureRoute = () => {
//   const { authState } = useOktaAuth();
//   const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);

//   useEffect(() => {
//     if (authState?.isAuthenticated !== null) {
//       setAuthenticated(authState?.isAuthenticated);
//     }
//   }, [authState]);

//   if (authenticated === undefined) {
//     // Authentication check is in progress, render a loading indicator or placeholder
//     return <div>Loading...</div>;
//   }
//   console.log("authState", authState);
//   if (authState?.isAuthenticated) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default SecureRoute;

import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

export const RequiredAuth: React.FC = () => {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) return;
    if (!authState?.isAuthenticated) navigate("/login");
  }, [authState, authState?.isAuthenticated, navigate]);

  if (!authState || !authState?.isAuthenticated) {
    return <Loading />;
  }

  return <Outlet />;
};
