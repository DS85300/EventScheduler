import { useState } from "react";
import { Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout";
import LogIn from "./pages/LogIn";
import CreateEntry from "./pages/CreateEntry";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import authCheck from "./utils/authCheck";
import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SignUp from "./pages/SignUp";

function App() {
  const [someState, setSomeState] = useState(null);

  const ProtectedLayout = () => {
    const isLoggedIn = authCheck();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="protected" element={<ProtectedLayout />}>
            <Route index element={<CreateEntry />} />
          </Route>
          <Route path="/LogIn" element={<LogIn />} />
          <Route index path="/event/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
