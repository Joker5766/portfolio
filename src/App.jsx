import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/ui/CustomCursor";

const MainRoutes = () => {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Render ProjectDetail as a smooth window modal overlay with AnimatePresence */}
      <AnimatePresence>
        {background && (
          <Routes location={location} key="modal-overlay">
            <Route path="/projects/:id" element={<ProjectDetail isModal />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
