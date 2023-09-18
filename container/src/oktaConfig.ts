const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const PORT = process.env.REACT_APP_PORT;

export const oktaConfig = {
  clientId: `${CLIENT_ID}`,
  issuer: `https://${BASE_URL}/oauth2/default`,
  redirectUri: `http://localhost:${PORT}/login/callback`, // this makes redirects to login if not logged in for secure routes
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
