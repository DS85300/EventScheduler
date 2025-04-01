import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout";

function App() {
  const [someState, setSomeState] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
