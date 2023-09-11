import React, { ReactNode } from "react";
import "./App.css";
// import ErrorBoundary from "./ErrorBoundary";
// @ts-ignore
const RemoteApp = React.lazy(() => import("Feature/App"));

const RemoteWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    {children}
    {/* <ErrorBoundary>{children}</ErrorBoundary> */}
  </div>
);

function App() {
  return (
    <div className="App">
      <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
        Hello App
        <h1>This is the Container!</h1>
        <h2>Remote App:</h2>
        <RemoteWrapper>
          <RemoteApp />
        </RemoteWrapper>
        <a href="http://localhost:4000">Link to Remote App</a>
      </div>
    </div>
  );
}
export default App;
