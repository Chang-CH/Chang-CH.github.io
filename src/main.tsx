import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
/** Styles */
import * as global from "_styles/global.module.scss";
import Spinner from "_components/Spinner";

/** Theme */
import { ChakraProvider } from "@chakra-ui/react";
import theme from "_styles/theme";
import TextPage from "_components/TextPage";

/** Lazy imported pages */
const Projects = React.lazy(() => import("./pages/projects"));
const Home = React.lazy(() => import("./pages/home"));

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find root. null received as root element.");
}
rootElement.className = global.root;

const root = ReactDOM.createRoot(rootElement ).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* * is the 404 page */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <>
            <Route
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <TextPage>
                  <Outlet />
                </TextPage>
              }
            >
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Spinner />}>
                    <Projects />
                  </Suspense>
                }
              />
            </Route>
          </>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
