import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth } = useOktaAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // oktaAuth.signInWithRedirect({ originalUri: "/dashboard" });

    try {
      setError("");
      const transaction = await oktaAuth.signInWithCredentials({
        username,
        password,
      });

      if (transaction.status === "SUCCESS") {
        oktaAuth.signInWithRedirect({
          sessionToken: transaction.sessionToken,
          originalUri: "/feature/dashboard",
        });
      }
    } catch (error:any) {
      setError(error.message);
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Custom Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
