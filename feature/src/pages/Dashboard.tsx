import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Dashboard = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo([]);
    } else {
      oktaAuth.getUser().then((info) => setUserInfo(info));
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => oktaAuth.signOut()}>Logout</button>
      <div>
        <p>
          Belowww is the information from your ID token which was obtained during
          the &nbsp;
          <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">
            PKCE Flow
          </a>{" "}
          and is now stored in local storage.
        </p>
        <p>
          This route is protected with the <code>&lt;SecureRoute&gt;</code>{" "}
          component, which will ensure that this page cannot be accessed until
          you have authenticated.
        </p>
        <table>
          <thead>
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userInfo).map((claimEntry) => {
              const claimName = claimEntry[0];
              const claimValue:any = claimEntry[1];
              const claimId = `claim-${claimName}`;
              return (
                <tr key={claimName}>
                  <td>{claimName}</td>
                  <td id={claimId}>{claimValue.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button onClick={callBackend}>Call api</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages?.map((message, index) => (
              <tr key={index} id={message.id}>
                <td>{message.date}</td>
                <td>{message.text}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Dashboard;
