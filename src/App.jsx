import React, { useState, useEffect } from "react";
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
import SideMenu from "./components/MenuSide";
import Transition from "./components/Transition";
import LoadingScreen from "./components/LoadingScreen";
import Services from "./sections/Services"

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => {
    setShowTransition(true);
    setNextRoute(path);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="flex">
      <SideMenu onNavigate={handleNavigation} />
      <div className="flex-1">
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
          <Route path="/service" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
