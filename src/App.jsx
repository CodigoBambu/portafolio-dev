import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Navbar from "./components/MenuNav";
import Transition from "./components/Transition";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setShowTransition(true);
    setNextRoute(path);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />

      <AnimatePresence mode="wait">
        {showTransition && (
          <Transition
            onAnimationEnd={() => {
              setShowTransition(false);
              if (nextRoute) navigate(nextRoute);
            }}
          />
        )}
      </AnimatePresence>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;
