import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

function App() {
  return (
    <div className="App">
      <div>Hello from the other side (remote)</div>
      
      <nav className="horizontal-nav">
        <Link to="page-a">feature/Page A</Link>
        <Link to="page-b">feature/Page B</Link>
      </nav>
      <React.Suspense fallback="Loading">
        <Routes>
          <Route index element={<Home />} />
          <Route path="page-a" element={<PageA />} />
          <Route path="page-b" element={<PageB />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
