import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import "./assets/styles/globals.scss";
import Character from "./pages/character";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
