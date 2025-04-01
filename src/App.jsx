import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout";
import CreateEntry from "./pages/CreateEntry";

function App() {
  const [someState, setSomeState] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CreateEntry />} />
          <Route />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
