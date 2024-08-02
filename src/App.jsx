import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StarPatternsPage from "./pages/StarPatternsPage";
import StarPatternCatalog from "./pages/StarPatternCatalog.jsx";
import StarsCatalog from "./pages/StarsCatalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/starPatternsPage" element={<StarPatternsPage />} />
      <Route path="/starPatternCatalog" element={< StarPatternCatalog/>} />
      <Route path="/starsCatalog" element={<StarsCatalog />} />
    </Routes>
  );
}

export default App;