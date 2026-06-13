import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "../src/components/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
   return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}