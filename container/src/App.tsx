import React, { ReactNode } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaConfig } from "./oktaConfig";
import "./App.css";
import Home from "./pages/Home";
import SamplePage1 from "./pages/sample-page1";
import SamplePage2 from "./pages/sample-page2";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import {RequiredAuth} from "./component/SecureRoute";
import Login from "./pages/Login";

// @ts-ignore
const RemoteApp = React.lazy(() => import("Feature/App"));

function App() {
  const CALLBACK_PATH = "/login/callback";
  const oktaAuth = new OktaAuth(oktaConfig);
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin), {
      replace: true,
    });
  };
  return (
    <div className="App">
      <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
        Hello App
        <h1>This is the Container!</h1>
        <nav className="horizontal-nav">
          <Link to="/page-a">container/Page A</Link>
          <Link to="/page-b">container/Page B</Link>
          <Link to="/feature">Feature</Link>
          <Link to="/test">Test</Link>
        </nav>
        <React.Suspense fallback="Loading">
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes>
              <Route index path="/" element={<Landing />} />
              <Route path={CALLBACK_PATH} element={<LoginCallback />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/page-a" element={<SamplePage1 />} />
              <Route path="/page-b" element={<SamplePage2 />} />
              <Route element={<RequiredAuth />}>
                <Route path="/feature/*" element={<RemoteApp />} />
              </Route>
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Security>
        </React.Suspense>
      </div>
    </div>
  );
}
export default App;
