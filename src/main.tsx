import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/** Styles */
import * as global from "_styles/global.module.scss";
import Spinner from "_components/Spinner";

const About = React.lazy(() => import("./pages/about"));
const Home = React.lazy(() => import("./pages/home"));
const Dev = React.lazy(() => import("./pages/dev"));

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find root. null received as root element.");
}
rootElement.className = global.root;

const root = ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* * is the 404 page */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/dev"
          element={
            <Suspense fallback={<Spinner />}>
              <Dev />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
