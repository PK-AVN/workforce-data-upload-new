import React, { ReactNode } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SamplePage1 from "./pages/sample-page1";
import SamplePage2 from "./pages/sample-page2";
import ProtectedRoute from "./ProtectedRoute";
// import ErrorBoundary from "./ErrorBoundary";
// @ts-ignore
const RemoteApp = React.lazy(() => import("Feature/App"));

function App() {
  return (
    <div className="App">
      <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
        Hello App
        <h1>This is the Container!</h1>
        <nav className="horizontal-nav">
          <Link to="/page-a">container/Page A</Link>
          <Link to="/page-b">container/Page B</Link>
          <Link to="/feature">Feature</Link>
        </nav>
        <React.Suspense fallback="Loading">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page-a" element={<SamplePage1 />} />
            <Route path="/page-b" element={<SamplePage2 />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/feature/*" element={<RemoteApp />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}
export default App;
