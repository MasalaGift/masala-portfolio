import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ProjectDetails from "../src/components/ProjectDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}