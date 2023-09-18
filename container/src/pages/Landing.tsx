import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

function Landing() {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/feature/dashboard" />;
  }
}

export default Landing;
