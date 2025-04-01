import { useState } from 'react'
import { Router,Route,Routes } from 'react-router-dom';
import './index.css'
import MainLayout from './components/Layout';
import SignIn from './pages/SignIn';

function App() {
  const [someState, setSomeState] = useState(null);

  return (
    <>

    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route/>
        <Route/>
        <Route/>
        <Route path="/SignIn" element={<SignIn/>}/>
     </Route >
    </Routes>

    </>
  );
}

export default App;
