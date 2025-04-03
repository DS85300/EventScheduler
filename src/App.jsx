import { useState } from 'react'
import { Router,Route,Routes } from 'react-router-dom';
import './index.css'
import MainLayout from './components/Layout';
import LogIn from './pages/LogIn';
import CreateEntry from './pages/CreateEntry';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';

function App() {
  const [someState, setSomeState] = useState(null);

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="/CreateEvent" element={<CreateEntry/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/event/:id" element={<EventDetails/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
